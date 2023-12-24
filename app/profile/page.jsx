'use client' 
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { useEffect} from 'react'
import { Link1Icon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"
import CardPortofolio from "@/components/cards/CardPortofolio"
import UseHandler from "@/utils/handlers";
import React, { useRef } from 'react';


const Edit = () => {
  const inputRef = useRef(null);
  const handleAddPortfolio = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const { 
    handleCardClick,
    handleSubmit,
    handleChange,
    handlePortfolioChange,
    addPortfolio,
    handleFileChange,
    handleDragOver,
    handleDrop,
    handleFileInputClick,
    handleDeleteCard,
    previewPortfolio,
    imagePreview,
    fileInputRef,
    editIndex,
    profile,
    isLoading,
    fetchData
  } = UseHandler();


  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="container p-3 ">
      <div className="flex gap-3 py-4">
      <Button variant="outline" className='mb-3 text-green-500 border-green-500 ' onClick={handleAddPortfolio}><PlusIcon className="mr-2" />  Tambah Portofolio</Button>
     <Button onClick={handleSubmit} disabled={isLoading}>
      {isLoading ? 'Memproses...' : 'Simpan Perubahan'}
    </Button>
      </div>
      <div className="sm:grid-rows-2 sm:p[20px] xl:grid grid-cols-5 gap-8">
        <div className="col-span-3 justify-center w-[100%]">
              <div className="w-[100%]  flex flex-col gap-y-6">
                <Card className='w-[100%] p-6'>
      <CardTitle className='mb-3'>Background Cover</CardTitle>
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
    </Card>
        <div>
        <Card className="w-[100%] ">
      <CardHeader>
        <CardTitle>Profil</CardTitle>
      </CardHeader>

      <CardContent>
           <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <Input id="name" placeholder="Nama" value={profile.name} onChange={handleChange} />
              <Input id="title" placeholder="Title/posisi" value={profile.title} onChange={handleChange} />
              <Textarea placeholder="Deskripsi" id="description" value={profile.description} onChange={handleChange} />
            </div>
          </form>
      </CardContent>
    </Card>

    <Card className="mt-5" >
      <CardHeader>
        <CardTitle>Add Portofolio</CardTitle>
      </CardHeader>
      <CardContent>
           <div className="grid w-full items-center gap-4">
                  <Input ref={inputRef} id="posisi" placeholder="Posisi" onChange={handlePortfolioChange} defaultValue={editIndex !== null ? previewPortfolio.posisi : ''} />
                  <Input id="perusahaan" placeholder="Perusahaan" onChange={handlePortfolioChange} defaultValue={editIndex !== null ? previewPortfolio.perusahaan : ''} />
                  <div className="flex justify-between gap-2">
                  <Input type="date" id="postAt" onChange={handlePortfolioChange} defaultValue={editIndex !== null ? previewPortfolio.postAt : ''} />
                  <Input type="date" id="endDate" onChange={handlePortfolioChange} defaultValue={editIndex !== null ? previewPortfolio.endDate : ''} />
                  </div>
                  <Textarea placeholder="Deskripsi" id="description" onChange={handlePortfolioChange} defaultValue={editIndex !== null ? previewPortfolio.description : ''} />
                </div>
                <Button className="mt-4" onClick={addPortfolio}>{editIndex !== null ? 'Update Portofolio' : 'Tambah Portofolio'}</Button>
      </CardContent>
      </Card>
        </div>
        </div>
        </div>
        <div className="col-span-2  w-[100%]">
          <div >
            <Card className=" relative h-full flex flex-col">
              <div className="w-full h-40 rounded-t-lg">
                  <img className="w-full h-full object-cover rounded-t-lg" src={imagePreview || profile.imagecover || 'placeholder-url'} alt="Placeholder" />
              </div>
              <div className="relative -mt-20 flex items-center justify-center">
                <Avatar className="w-24 h-24">
                <AvatarImage src={profile.avatar} alt="@shadcn" />
                </Avatar>
              </div>
            <div className="flex flex-col items-center justify-center ">
                <div className="w-[100%] mt-5">
                <CardTitle className="text-center"> {profile.name} </CardTitle>
                <h1 className="text-center font-bold text-grey-200"> {profile.title} </h1>
                <CardDescription className="text-center"> {profile.description} </CardDescription>
                </div>
            </div>
            <div className="flex-col mt-5 gap-y-3 flex px-3 ">
              <CardTitle className="text-center" >Portofolio</CardTitle>
              {profile.portfolio &&
          profile.portfolio.map((item, index) => (
            <CardPortofolio
              key={index}
              item={item}
              index={index}
              handleCardClick={handleCardClick}
              handleDeleteCard={handleDeleteCard}
            />
          ))}
            </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit