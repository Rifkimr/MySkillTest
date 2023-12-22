import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const ButtonAction = () => {
  return (
    <div className="w-full gap-5 flex justify-between  mt-5">
    <Link className="w-full" href="/edit/id" >
  <Button className="w-full" >  <Pencil1Icon className="mr-5" /> Edit</Button>
    </Link>
  <Button variant="destructive" className="w-full"> <TrashIcon  className="mr-5"/> Delete</Button>
</div>
)
};

export default ButtonAction;
