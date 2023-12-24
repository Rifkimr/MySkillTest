// import React, { useState } from 'react'
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"
//   import { Input } from "@/components/ui/input"
//   import { Textarea } from "@/components/ui/textarea"
// import { Button } from './ui/button'

// const EditProfile = () => {
//   return (
//     <div>
//         <Card className="w-[100%] ">
//       <CardHeader>
//         <CardTitle>Profil</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmitForm}>
//           <div className="grid w-full items-center gap-4">
//               <Input id="name" defaultValue={formData} onChange={handleChange} placeholder="Nama" />
//               <Input id="title" defaultValue={formData} onChange={handleChange} placeholder="Title/posisi" />
//               <Textarea placeholder="Deskripsi"  id="description" defaultValue={formData} onChange={handleChange} />
//           </div>

//           <Button type="submit" >Simpan</Button>
//         </form>
//       </CardContent>
//     </Card>
//     </div>
//   )
// }

// export default EditProfile