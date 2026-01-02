import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// reusable method for upload media file on cloudinery
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file
    console.log(
      "Response of Cloudinery from { cloudinery 22 } ==> ",
      localFilePath
    ); // for study purpouse
    return response;
  } catch (error) {
    console.log("File Note Uploaded on Cloudinary ", error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the operation got failed
  }
};
export { uploadOnCloudinary };

