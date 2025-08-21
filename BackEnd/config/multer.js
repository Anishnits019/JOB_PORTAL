import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Cloudinary folder name
    allowed_formats: ['pdf','doc'], // Allowed file types
  },
});

const upload = multer({
      storage,
      limits: { fileSize: 5 * 1024 * 1024 }
       },
);

export default upload;
