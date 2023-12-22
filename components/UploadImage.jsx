'use client'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Image from 'next/image';
import { Card } from './ui/card';


const UploadImage = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxSize: 500000000, // 500MB
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);

      // Send the file to the server
      const formData = new FormData();
      formData.append('file', file);

      axios.post('/api/upload', formData).then((response) => {
        console.log(response.data);
      });
    },
  });

  return (
    <div className="p-6">
      <Card className="w-full h-full bg-slate-200" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop an image here, or click to select a file</p>
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
            style={{ objectFit: 'cover' }}
          />
        )}
      </Card>
    </div>
  );
};

export default UploadImage;