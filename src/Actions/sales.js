"use server"

import { getUser } from "@/auth/getAuth";
import { db } from "@/drizzle/db";
import { ProductTable, SaleTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";


export async function createSale(salesData){
    const user = await getUser();
    if( user == undefined){
        return redirect("/sign-in")
    }
    
const product = await db.query.ProductTable.findFirst({
    where:eq(ProductTable.id, salesData.productId),
    columns:{ inventoryStock:true, id:true}
})

if(product == null){
    return redirect("/dashboard/sales")
}
    await db.insert(SaleTable).values({
        productId: salesData.productId,
        saleCount: salesData.saleCount,
    });

    await db.update(ProductTable).set({
        inventoryStock: product.inventoryStock - salesData.saleCount,
    })
    .where(eq(ProductTable.id,salesData.productId));
    redirect("/dashboard/sales");

}

export async function saleDelete(saleId){
    const user= await getUser();
    if(user== null){
        return redirect("/sign-in");
    }


    const sale= await db.query.SaleTable.findFirst({
        where:eq(SaleTable.id,saleId)
    })

    if(sale== null){
        return redirect("/dashboard/sales")
    }

    const product= await db.query.ProductTable.findFirst({
        where:eq(ProductTable.id,sale.productId)
    })
   if(user== null){
        return redirect("/sign-in");
    }

    await db.update(ProductTable).set({
        inventoryStock: product.inventoryStock+sale.saleCount
    })

    await db.delete(SaleTable).where(eq(SaleTable.id,sale.id))

}