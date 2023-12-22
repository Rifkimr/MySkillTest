'use client' 
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import Dropzone from "@/components/Dropzone"
import EditProfile from "@/components/EditProfile"
import EditPortofolio from "@/components/EditPortofolio"
import { useState } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"

const Edit = () => {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <section className="bg-gray-100">
    <div className="container">
     <div className="flex gap-3 py-4">
     <Link href={'/create'} >
      <Button variant="outline" className='mb-3 text-green-500 border-green-500 '><PlusIcon className="mr-2" />  Add Portofolio</Button>
     </Link>
      <Button className='bg-slate-300 text-gray-700'>Simpan Perubahan</Button>
     </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 justify-center w-[100%]">
              <div className="w-[100%]  flex flex-col gap-y-6">
                <Dropzone setPreviewImage={setPreviewImage} />
                <Dropzone/>
                <EditProfile/>
                <EditPortofolio/>
              </div>
        </div>
        <div className="col-span-2  w-[100%]">
          <div>
            <Card className=" relative h-[100vh] flex flex-col">
              <div className="w-full h-40 rounded-t-lg">
                  {previewImage ? (
                  <img className="w-full h-full object-cover rounded-t-lg" src={previewImage} alt="Preview" />
                  ) : (
                  <img className="w-full h-full object-cover rounded-t-lg" src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="Placeholder" />
                  )}
              </div>

              <div className="relative -mt-20 flex items-center justify-center">
               <Avatar className="w-24 h-24">
               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
               </Avatar>
              </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[70%] flex mt-3">
                <div>
                <CardTitle className="text-center">Rifki Muhamad Ramdan</CardTitle>
                <h1 className="text-center font-bold text-grey-200">Title</h1>
               <CardDescription className="text-center">Saya adalah model bahasa buatan yang dikembangkan oleh OpenAI. Saya diciptakan untuk membantu dalam berbagai tugas</CardDescription>
                </div>
              </div>
               <CardTitle>Portofolio</CardTitle>
              <div className="w-[80%] mt-3 transition cursor-pointer
    hover:scale-105">
              <Card className="p-4 mt-5">
                  <p className="text-large font-medium leading-none">
              Fronten Web Developer
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              MySkill
            </p>
            <p className="text-sm  text-muted-foreground my-3">
              January 2023 - Agustus 2024
            </p>
                 <CardDescription className="text-black" >Deploy your new project in one-click. dalam berbagai tugas, mulai dari membe, hingga mendukung dalam proses pembelajaran dan eksplorasi konsep-konsep baru.</CardDescription>
              </Card>
              </div>
            </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Edit