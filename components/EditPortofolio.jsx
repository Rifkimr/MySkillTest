import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"

const EditPortofolio = () => {
  return (
    <div>
         <Card className="w-[100%] ">
      <CardHeader>
        <CardTitle>Portofolio</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
              <Input id="name" placeholder="Nama" />
              <Input id="posisi" placeholder="Title/posisi" />
              <Input id="perusahaan" placeholder="Perusahaan" />
            <div className="flex justify-between gap-2">
              <Input id="tanggalmulai" placeholder="Tanggal Mulai" />
              <Input id="tanggalselesai" placeholder="Tanggal Selesai" />
            </div>
            <div className="grid w-full gap-1.5">
              <Textarea placeholder="Deskripsi" id="descripsi" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default EditPortofolio