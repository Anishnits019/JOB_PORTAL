// middlewares/multer.js
import multer from 'multer';

const storage = multer.diskStorage({}); // no need to store on disk, cloudinary handles it
const upload = multer({ storage });

export default upload;
