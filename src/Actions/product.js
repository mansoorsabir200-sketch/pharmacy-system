"use server";
import { getUser } from "@/auth/getAuth";
import { db } from "@/drizzle/db";
import { ProductTable, SaleTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";


export async function SaveProducts(productData) {
  const user = await getUser();
  if (user == undefined) {
    return {
      error: true,
      messagee: "your  not login",
    };
  }
  await db.insert(ProductTable).values({
    name: productData.name,
    userId: user.user.id,
    brand: productData.brand,
    buyPrice: productData.buyPrice,
    salePrice: productData.salePrice,
    inventoryStock: productData.inventoryStock,
    expirydate: new Date(productData.expiryDate),
  });
  redirect("/dashboard/products");
}

export async function deleteProdct(productId) {
  const user = await getUser();

  if (user == undefined) {
    return redirect("/sign-in");
  }

  const sales= await db.query.SaleTable.findFirst({
    where:eq(SaleTable.productId,productId)
  })
if(sales){
  return {
    success:"false",
    message: "this product is already sell first delete the sell, after try to delete the product"
  }
}else{
  await db.delete(ProductTable).where(eq(ProductTable.id, productId));

  return {
    success: true,
    message: " product deleted"
  }

}

};

export async function upDateProduct(productId,productData){
  const user= await getUser();
  if(user == null){
    return redirect("/sign-in");
  }

  await db.update(ProductTable).set(productData).where(eq(ProductTable.id,productId))

 redirect("/dashboard/products");
}