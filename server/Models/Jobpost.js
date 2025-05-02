const mongoose = require("mongoose");
const { TbArrowUp } = require("react-icons/tb");

// Define the Section schema
const sectionSchema = new mongoose.Schema({
    jobadmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    companyName:{
        type:String,
        required:true
    },
    companyDescription:{
        type:String,
    },
	location:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Painting", "Stitching", "Decoration", "Mehendi","nailart","pottery","parlour"],
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    imageUrl: {
        type: String,  // Store the Cloudinary image URL
    },
    createdAt: { type: Date, default: Date.now },
});

// Export the Section model
module.exports = mongoose.model("jobpost", sectionSchema);
