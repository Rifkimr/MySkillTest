'use client'

import { getSignature, saveToDatabase } from '@/app/_actions'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Card, CardTitle, } from './ui/card'
import { Link1Icon } from '@radix-ui/react-icons'

const Dropzone = ({ setPreviewImage }) => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles(previousFiles => [
        ...acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      ])
      setPreviewImage(URL.createObjectURL(acceptedFiles[0]));
    }
  }, [setFiles, setPreviewImage])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
    onDrop
  })

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  async function action() {
    const file = files[0]
    if (!file) return

    const { timestamp, signature } = await getSignature()

    const formData = new FormData()

    formData.append('file', file)
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
    formData.append('signature', signature)
    formData.append('timestamp', timestamp)
    formData.append('folder', 'next')

    const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
    const data = await fetch(endpoint, {
      method: 'POST',
      body: formData
    }).then(res => res.json())

    await saveToDatabase({
      version: data?.version,
      signature: data?.signature,
      public_id: data?.public_id
    })
  }

  return (
    <Card className='w-[100%] p-6 '>
  <CardTitle className="mb-3">Background Cover</CardTitle>
     <Card {...getRootProps()} className="bg-gray-300 h-[300px] flex justify-center items-center">
  <form action={action}>
    <input {...getInputProps({ name: 'file' })} />
    <div className='flex flex-col items-center justify-center cursor-pointer'>
    <Link1Icon width={26} height={26} />
    <h1 className="text-center font-bold text-grey-200 underline">Drag and Drop, or <span className='text-blue-500'>Browse</span> </h1>
               <p className="text-center text-sm underline text-gray-500 ">Support Format: Png, Jpg, Jpeg</p>
               <p className="text-center text-sm underline text-gray-500">Max size : 500 Mb</p>
    </div>
  </form>
</Card>

    </Card>
  )
}

export default Dropzone
