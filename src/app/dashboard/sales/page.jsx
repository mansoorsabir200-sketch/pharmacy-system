import { DeleteSale } from "@/components/DeleteSale";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/drizzle/db";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Sale() {
 const mySales= await db.query.SaleTable.findMany({
  with:{
    product:{
      name:true,
      brand:true
    }
  }
}

);

if(mySales === 0){
  return <div className=" px-4 pt-24">
    <Card>
      <CardHeader>
        <CardTitle> No Product  </CardTitle>
      </CardHeader>
      <CardDescription>
        first sale some Products then come here!
      </CardDescription>
      <CardFooter>
        <Button>
          <Link href="/dashboard/sales/new"> Add Sale </Link>
        </Button>
      </CardFooter>
    </Card>
  </div>
}

  return (
    <div
      className="h-screen  bg-gradient-to-br from-50% to-gray-700 w-full 
      mt-10    "
    >
      <div className=" flex justify-between  p-10 mt-4 w-full  ">
        <h1 className="text-2xl md:text-3xl font-serif   tracking-tight">
          All Sales
        </h1>

        <Button asChild>
          <Link href="/dashboard/sales/new">
            <PlusIcon /> Add new Sales
          </Link>
        </Button>
      </div>
      <div className="px-12 py-6 ">
        {/* ---------------------------- */}
        <Table className="text-indigo-100 text-[18px] ">
          <TableHeader>
            <TableRow>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Name
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Barnd
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Sale count
              </TableHead>

              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Sale Price
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                profit
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Added at
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mySales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell> {sale.product.name}</TableCell>
                <TableCell> {sale.product.brand}</TableCell>
                <TableCell> {sale.saleCount}</TableCell>
                <TableCell> {sale.product.salePrice}</TableCell>
                <TableCell>
                  {(sale.product.salePrice - sale.product.buyPrice) *
                    sale.saleCount}
                </TableCell>
                <TableCell>
                  {sale.product.createdAt.toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <DeleteSale saleId={sale.id}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* --------------------------- */}
      </div>
    </div>
  );
}
