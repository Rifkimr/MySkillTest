'use client'
import ButtonAction from "@/components/ButtonAction";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowLeftIcon } from "@radix-ui/react-icons";


const DetailProject = () => {
  return (
    <span className="flex flex-col justify-center items-center">
    <CardTitle className="text-center my-6">Detail Project</CardTitle>
    <ArrowLeftIcon height={24} width={24} />
    <div className="w-[50%] flex flex-col items-center justify-center ">
              <div>
              <Card className="p-8">
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
                 <ButtonAction/>
              </Card>
              </div>
            </div>
            </span>
  ) 
};

export default DetailProject;
