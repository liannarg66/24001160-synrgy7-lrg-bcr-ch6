import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
    cloud_name: "dfoqkricj", 
    api_key: "771687581752853", 
    api_secret: "1sXpRcphQqcjhX86t425Hp1a9qY", // Click 'View Credentials' below to copy your API secret
    secure: true
});

export default cloudinary;