'use client'

import React from 'react'
import {
    Card,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

const FormNewProject = ({isEditing}) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
<div className='w-[40%] my-5'>
         <Card className="w-[100%] p-5 ">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="grid w-full items-center gap-4">
              <Input type="text" id="name" placeholder="Nama" {...register('name', {required: true})} />
              <Input type="text" id="posisi" placeholder="Title/posisi" {...register('posisi', {required: true})} />
              <Input type="text" id="perusahaan" placeholder="Perusahaan" {...register('perusahaan', {required: true})} />
            <div className="flex justify-between gap-2">
              <Input type="date" id="tanggalmulai" placeholder="Tanggal Mulai" {...register('tanggalmulai', {required: true})} />
              <Input type="date" id="tanggalselesai" placeholder="Tanggal Selesai" {...register('tanggalselesai', {required: true})} />
            </div>
            <div className="grid w-full gap-1.5">
              <Textarea placeholder="Deskripsi" id="deskripsi" {...register('deskripsi', {required: true})} />
            </div>
          </div>
          <Button type="submit" className="w-[100%] my-5 " > {isEditing ? 'Edit' : 'Tambah' } </Button>
        </form>
    </Card>
    </div>
  )
};

export default FormNewProject;
