import React from "react";
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { addJobDetails } from "../operations/jobDetailsAPI";

const fields = [
  // Define form fields
  {
    name: "companyName",
    label: "Art Name",
    placeholder: "Acme Inc",
    input: "input",
  },
  {
    name: "companyDescription",
    label: "Phone Number",
    placeholder: "+91 **********",
    input: "textarea",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "San Francisco, CA",
    input: "input",
  },
  {
    name: "role",
    label: "Type",
    placeholder: "Select Type",
    options: [
      { value: "Painting", text: "Painting" },
      { value: "Stitching", text: "Stitching" },
      { value: "Decoration", text: "Decoration" },
      { value: "Mehendi", text: "Mehendi" },
      { value: "nailart", text: "Nail Art" },
      { value: "pottery", text: "Pottery" },
      { value: "parlour", text: "Parlour" },
    ],
    input: "select",
  },
  {
    name: "salary",
    type: "number",
    label: "Prize",
    placeholder: "5000 - 80,000",
    input: "input",
  },
  {
    name: "imageUrl",
    label: "Upload Image",
    input: "file",
  },
];

const Page = () => {
  const methods = useForm({
    defaultValues: {
      companyName: "",
      companyDescription: "",
      location: "",
      role: "",
      salary: "",
      imageUrl: "",
    },
    mode: "onBlur", // Validate on blur
  });

  const { handleSubmit, reset, setValue } = methods;
  const { token } = useSelector((state) => state.auth);

  const onSubmit = async (values) => {
    try {
      const file = values.imageUrl[0]; // Get the file from form values
      let imageUrl = "";

      if (file) {
        // Handle file upload and get the image URL
        imageUrl = await uploadImage(file);
      }

      // Add image URL to values
      const finalValues = { ...values, imageUrl };
      console.log("Submitting data:", finalValues); // Log for debugging

      await addJobDetails(finalValues, token);
      reset(); // Reset the form
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const uploadImage = async (file) => {
    const uploadUrl = "https://api.cloudinary.com/v1_1/djimfq1jk/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pfcosp7i");

    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Image upload response:", data); // Log for debugging
      return data.secure_url; // Return the image URL
    } catch (error) {
      console.error("Image upload failed:", error);
      throw new Error('Image upload failed');
    }
  };

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <div className="lg:pl-24 pl-4 mt-6">
          <h2 className="text-3xl py-2 font-semibold">Post a New Art</h2>
          <p className="text-gray-500">Fill out the form below to create a new Art posting.</p>
          <hr className="mt-3 lg:w-[1300px] w-96" />
        </div>
        <div className="flex gap-4 lg:px-20 px-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:w-[75%] w-full px-5 py-5">
            {fields.map((field) => (
              <FormField key={field.name} {...field} setValue={setValue} />
            ))}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
          <div className="lg:block hidden my-10 hover:shadow-lg duration-700 h-[420px] w-96 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <h5 className="mb-6 text-3xl font-bold text-gray-900 ">Get more updates...</h5>
            <form className="grid">
              <input type="email" placeholder="Enter your email" className="border-gray-200 border-2 py-1 px-2 rounded-lg" required />
              <button className="bg-blue-600 my-4 py-1 text-white font-semibold rounded-lg">Subscribe Now</button>
              <p className="text-gray-500 py-3 text-md">Subscribe now to stay updated with the latest arts postings. Be the first to know about exclusive arts.</p>
            </form>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

const FormField = ({ name, label, placeholder, input, options, type, setValue }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {input === "input" && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => <input {...field} type={type || "text"} placeholder={placeholder} className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />}
        />
      )}
      {input === "textarea" && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => <textarea {...field} placeholder={placeholder} className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />}
        />
      )}
      {input === "select" && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <select {...field} placeholder={placeholder} className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500">
              <option value="" disabled hidden>{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.text}</option>
              ))}
            </select>
          )}
        />
      )}
      {input === "file" && (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur } }) => (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                onChange(e.target.files); // Handle file change
                setValue(name, e.target.files); // Update form value
              }}
              onBlur={onBlur}
              className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          )}
        />
      )}
      <span className="text-red-500 text-sm">{errors[name]?.message}</span>
    </div>
  );
};

export default Page;
