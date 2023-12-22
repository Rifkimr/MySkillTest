'use client'

import { Card, CardDescription } from "@/components/ui/card";

const CardItem = () => {
  return (
    <div className="flex flex-col items-center justify-center transition cursor-pointer
    hover:scale-105 ">
              <div>
              <Card className="p-4">
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
  )
};

export default CardItem;
