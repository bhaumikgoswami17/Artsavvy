// Importing necessary modules and packages
const express = require("express");
const app = express();
const database = require("./Config/Database");
const userRoutes = require("./routes/user");
const jobRoutes = require("./routes/job");
const profileRoutes = require("./routes/profile");
const contactUsRoute = require("./routes/Contact");
const mailRoute = require("./routes/mail");
const { cloudinaryConnect } = require("./Config/cloudinary");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const fileUpload = require("express-fileupload");
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Security Middleware
app.use(helmet());

// CORS Configuration
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// File Upload Middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Rate Limiting Middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use('/api/', apiLimiter);

// Logging Middleware
app.use(morgan('combined')); // 'combined' gives you a detailed log

// Connecting to Cloudinary
cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/send", mailRoute);

// Testing the server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
