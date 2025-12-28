import { SaleForm } from "@/components/SaleForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/drizzle/db";
import { ProductTable } from "@/drizzle/schema";
import { gte } from "drizzle-orm";
import Link from "next/link";

export default async function NewSalePage(){
    const products= await db.query.ProductTable.findMany({
        where:gte(ProductTable.inventoryStock,1),
        columns:{
            name:true,
            id:true,
            inventoryStock:true,
        }
    })
    if(products.length === 0){
        return (
          <Card className="w-[300px] md:max-w-3xl bg-red-950  mx-auto pt-12 mt-12 bg-linear-90 from-5% to-blue-950">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-red-600 "> No  Product ! </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-red-400 ">
                No Products Are here , Add some Products after Sale !!!
              </CardDescription>
            </CardContent>
            <CardFooter>
              {" "}
              <Button asChild>
                <Link href="/dashboard/products/new">add new product</Link>
              </Button>{" "}
            </CardFooter>
          </Card>
        );
    }
    return <div className=" px-2 py-4 mx-auto mt-14 max-w-3xl   ">
        <Card className=" mx-auto bg-gradient-to-br from-30% to-sky-800   ">
            <CardHeader>
                <CardTitle className="text-center text-2xl"> New Sale  </CardTitle>
            </CardHeader>
            <CardContent>
                <SaleForm products={products}/>
            </CardContent>
        </Card>
    </div>
}