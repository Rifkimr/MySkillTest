import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CardPortofolio = ({ item, index, handleCardClick, handleDeleteCard }) => {
  return <div>
  <Card className="p-4 w-[100%] transition cursor-pointer hover:scale-105"  key={index}
                    onClick={() => handleCardClick(index)}>
                    <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
        onClick={() => handleDeleteCard(index)}
      >
        X
      </button>
    <p className="text-large font-medium leading-none">{item.posisi}</p>
    <p className="text-sm font-medium text-muted-foreground">{item.perusahaan}</p>
    <p className="text-sm text-muted-foreground my-3">
      {item.postAt} - {item.endDate}
    </p>
    <CardDescription>{item.description}</CardDescription>
  </Card>
  </div>;
};

export default CardPortofolio;
