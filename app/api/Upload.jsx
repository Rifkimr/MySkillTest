// pages/api/upload.js
import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({ dest: './public/uploads' });

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post((req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Send the file path as a response
  return res.status(200).json({ file: `/uploads/${req.file.filename}` });
});

export default handler;