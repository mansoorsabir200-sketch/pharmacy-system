"use client"

import { Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { saleDelete } from "@/Actions/sales"

export function DeleteSale({saleId}){
    const router= useRouter()
    return (
      <Button    className="bg-red-800 hover:bg-red-900"
        onClick={async () => {
          await saleDelete(saleId);
          router.refresh();
        }}
      >
        <Trash2 className="text-red-100" />
      </Button>
    );
  

}