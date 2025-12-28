import { Button } from "@/components/ui/button";
import DeletProductBtn from "@/components/ui/deletOroduct";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/drizzle/db";
import { EditIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import Sale from "../sales/page";
import { Alert } from "@/components/ui/alert";

export default async function Products() {
  const myProducts = await db.query.ProductTable.findMany({
    brand: true,
    buyPrice: true,
    salePrice: true,
    inventoryStock: true,
    expiryDate: true,
    createdAt: true,
  });

  return (
    <div
      className="h-screen bg-gradient-to-br from-50% to-gray-700 w-full 
      mt-10    "
    >
      <div className=" flex justify-between px-4 py-8  w-full  ">
        <h1 className="text-2xl md:text-3xl font-serif   tracking-tight">
          All products
        </h1>

        <Button asChild={true}>
          <Link href="/dashboard/products/new">
            {" "}
            <PlusIcon /> Add new product{" "}
          </Link>
        </Button>
      </div>

      <div className="  m-auto w-[90%]">
        <Table className="text-indigo-100 text-[18px]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Name
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Barnd
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Buy Price
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Sale Price
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Count
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Profit
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                expire date
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Created at
              </TableHead>
              <TableHead className="text-[20px] text-blue-100 font-[600] bg-neutral-800 ">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell> {product.name}</TableCell>
                <TableCell> {product.brand}</TableCell>
                <TableCell> {product.buyPrice}</TableCell>
                <TableCell> {product.salePrice}</TableCell>
                <TableCell> {product.inventoryStock}</TableCell>
                <TableCell> {product.inventoryStock* (product.salePrice-product.buyPrice)}</TableCell>
                <TableCell>{product.expirydate.toLocaleDateString()}</TableCell>
                <TableCell>{product.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>
                  <DeletProductBtn productId={product.id} />
                  <Button
                    asChild
                    className=" hover:bg-blue-600  hover:text-blue-100  "
                  >
                    <Link href={`/dashboard/products/${product.id}`}>
                      <EditIcon className="text-blue-600hover:text-blue-100" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
