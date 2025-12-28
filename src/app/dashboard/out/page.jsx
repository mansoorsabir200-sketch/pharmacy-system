import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/drizzle/db"
import { ProductTable } from "@/drizzle/schema"
import { eq } from "drizzle-orm"

export default async function OutOfStokProducts(){

    const products= await db.query.ProductTable.findMany({
        where: eq(ProductTable.inventoryStock,0),
        with:{
            sales:{
                columns:{
                    createdAt:true,
                }
            }
        }
    })
console.log(products);

    return (
      <div className="w-full h-screen bg-gradient-to-br from-10% to-gray-700  px-12 py-4 pt-22 mx-auto flex flex-col  items-center space-y-10">
        <h2 className="text-2xl px-2 md:text-3xl lg:text-4xl text-center text-neutral-300 font-semibold  ">
          {" "}
          These Products Are Not in Store !, <span className="block text-2xl text-chart-2"> keep them in list </span>
        </h2>
        <Table className="mx-auto ">
          <TableHeader>
            <TableRow>
              <TableHead className="text-neutral-300 text-2xl">name</TableHead>
              <TableHead className="text-neutral-300 text-2xl">brand</TableHead>
              <TableHead className="text-neutral-300 text-2xl">
                buy price
              </TableHead>
              <TableHead className="text-neutral-300 text-2xl">
                {" "}
                sell at{" "}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((p) => {
              return (
                <TableRow key={p.id}>
                  <TableCell> {p.name} </TableCell>
                  <TableCell> {p.brand} </TableCell>
                  <TableCell> {p.salePrice}</TableCell>
                  <TableCell>
                    {/* {p.sales[0].createdAt.toLocaleDateString()} */}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
}