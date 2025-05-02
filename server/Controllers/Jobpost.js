const Job = require("../Models/Jobpost");
const User = require("../Models/user");
const mongoose = require('mongoose')

const { uploadImageToCloudinary } = require("../utils/imageUploader")


exports.getFulljobDetails = async (req, res) => {
  try {
    const { jobid } = req.body
    const userId = req.user.id
    const jobDetails = await Job.findOne({
      _id: jobid,
    }).populate({
      path: "jobadmin",
      select: "email", // Specify the field(s) you want to populate
    }).exec();

    if (!jobDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find job with id: ${jobid}`,
      })
    }
    return res.status(200).json({
      success: true,
      data: {
        jobDetails,
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}
exports.createjob = async (req, res) => {
  try {
    const userId = req.user.id;
    const { companyName, companyDescription, location, role, salary } = req.body;
    const image = req.files ? req.files.image : null;

    // Check for missing fields
    if (!companyName || !companyDescription || !location || !role || !salary) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    // Handle image upload
    let imageUrl = null;
    if (image) {
      const result = await uploadImageToCloudinary(image, 'job_images');
      imageUrl = result.secure_url;
    }

    const jobposterDetails = await User.findById(userId);

    if (!jobposterDetails) {
      return res.status(404).json({
        success: false,
        message: "Jobposter Details Not Found",
      });
    }

    const newJob = await Job.create({
      jobadmin: jobposterDetails._id,
      companyName,
      companyDescription,
      location,
      role,
      salary,
      imageUrl, // Add image URL to the job post
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { jobs: newJob._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: newJob,
      message: "Job posted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create job",
      error: error.message,
    });
  }
};



exports.editjob = async (req, res) => {
  try {
    // console.log('Request params:', req.params);
    // console.log('Request body:', req.body);
    
    const { jobid } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobid)) {
      return res.status(400).json({ error: "Invalid job ID" });
    }
    
    const updates = req.body;
    const jobpost = await Job.findById(jobid);

    if (!jobpost) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (req.files && req.files.image) {
      // Upload the new image to Cloudinary
      const newImageUrl = await uploadImageToCloudinary(req.files.image);
      updates.imageUrl = newImageUrl; // Set the new image URL
    }

    Object.keys(updates).forEach((key) => {
      jobpost[key] = updates[key];
    });

    await jobpost.save();

    const updatedJob = await Job.findById(jobid).populate("jobadmin").exec();

    res.json({
      success: true,
      message: "Job updated successfully",
      data: updatedJob,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
exports.getAlljobs = async (req, res) => {
  try {
    const allJobs = await Job.find().populate("jobadmin").exec();
    res.status(200).json({
      success: true,
      data: allJobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Can't Fetch Job Data",
      error: error.message,
    });
  }
};

exports.deletejob = async (req, res) => {
  try {
    const { jobid } = req.body;
    const jobpost = await Job.findById(jobid);

    if (!jobpost) {
      return res.status(404).json({ message: "Job not found" });
    }

    const userdata = await User.findOne({ jobs: jobid });
    if (userdata && Array.isArray(userdata.jobs)) {
      userdata.jobs = userdata.jobs.filter((id) => id.toString() !== jobid);
      await userdata.save();
    }

    await Job.findByIdAndDelete(jobid);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getuserjobs = async (req, res) => {
  try {
    const jobposterid = req.user.id;
    const jobs = await Job.find({ jobadmin: jobposterid }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user jobs",
      error: error.message,
    });
  }
};
