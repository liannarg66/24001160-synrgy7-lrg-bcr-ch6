import multer from 'multer';
import path from 'path';

// Tentukan lokasi penyimpanan file dan penamaan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Inisialisasi Multer dengan storage yang sudah ditentukan
const upload = multer({ storage });

export default upload;
