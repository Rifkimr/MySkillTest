import { useState, useRef } from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import { Link1Icon } from '@radix-ui/react-icons';

const Edit = () => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Menampilkan preview, tidak perlu diubah
        setProfile(prevProfile => ({
          ...prevProfile,
          imagecover: reader.result, // Update imagecover dengan hasil pembacaan gambar
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='bg-gray-300 h-[300px] flex justify-center items-center'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleFileInputClick}
      >
        {imagePreview ? (
          <img src={imagePreview} alt='Preview' className='max-w-full max-h-full' />
        ) : (
          <div className='flex flex-col items-center justify-center cursor-pointer'>
            <Link1Icon width={26} height={26} />
            <h1 className='text-center font-bold text-grey-200 underline'>
              Click to Select, or Drag and Drop
            </h1>
            <p className='text-center text-sm underline text-gray-500'>Support Format: Png, Jpg, Jpeg</p>
            <p className='text-center text-sm underline text-gray-500'>Max size: 500 Mb</p>
            <input
              type='file'
              onChange={handleFileChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </div>
        )}
      </div>
  );
};

export default Edit;
