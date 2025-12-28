"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { Trash2 } from "lucide-react";
import { deleteProdct } from "@/Actions/product";

export default function DeletProductBtn(props) {
  const router = useRouter();
  return (
    <Button
      className="size-icon text-red-800 hover:bg-red-700 cursor-pointer hover:text-white "
      onClick={async () => {
        const result =
        await deleteProdct(props.productId);
        if(result.success){
          alert(result.message);
          
          
        }
        router.refresh();
      }}
    >
      {" "}
      <Trash2 />
    </Button>
  );
}
