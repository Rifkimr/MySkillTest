import FormNewProject from "@/components/FormNewProject";
import React from "react";

const page = () => {
  return (
  <div className="flex justify-center items-center">
    <FormNewProject isEditing={false} />
  </div>
  )
};

export default page;
