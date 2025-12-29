import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductsFrom from "@/components/ui/productsform";
import { db } from "@/drizzle/db";
import { ProductTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";


export default async function ProudctIdPage(props) {

  const { productId } = await props.params;
  const product= await db.query.ProductTable.findFirst({
    where: eq(ProductTable.id, productId)
  });
if(product == null){
  return notFound();
}
return <div className="mx-auto px-4 w-full my-4  flex justify-center items-center"> 

 <Card className="bg-linear-to-r from-5% to-blue-950"> <CardHeader> <CardTitle> edite product</CardTitle> </CardHeader>
<CardContent> <ProductsFrom product={product}/> </CardContent>
 
   </Card>
  
</div>

}
