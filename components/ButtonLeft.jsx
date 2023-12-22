import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonLeft = () => {

    const router = useRouter()

  return <button className="btn" onClick={() => router.back()} > 
    <ArrowLeftIcon/>
  </button>;
};

export default ButtonLeft;
