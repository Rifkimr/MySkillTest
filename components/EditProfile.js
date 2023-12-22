import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"

const EditProfile = () => {
  return (
    <div>
        <Card className="w-[100%] ">
      <CardHeader>
        <CardTitle>Profil</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
              <Input id="name" placeholder="Nama" />
              <Input id="posisi" placeholder="Title/posisi" />
              <Textarea placeholder="Deskripsi" id="descripsi" />
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default EditProfile