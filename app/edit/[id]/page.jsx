
'use client'
import FormNewProject from "@/components/FormNewProject";
import React from "react";
import {CardTitle} from "@/components/ui/card"
import ButtonLeft from "@/components/ButtonLeft";


const EditProject = () => {
 return   (
    <div className='bg-red-200' >
    <ButtonLeft/>
 <div className=" bg-blue-400 flex flex-col justify-center items-center py-5" >
        <CardTitle>Edit Portofolio</CardTitle>
  <FormNewProject isEditing={false}  />
</div>
    </div>
 )
};

export default EditProject;
