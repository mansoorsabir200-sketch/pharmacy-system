import { getUser } from "@/auth/getAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardHeader from "@/components/ui/dashboard";
import { db } from "@/drizzle/db";
import { ProductTable } from "@/drizzle/schema";
import { eq, gte } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const outOfStokProducts = await db.query.ProductTable.findMany({
    where: eq(ProductTable.inventoryStock, 0),
    columns: {
      name: true,
    },
  });

  const inStokProducts = await db.query.ProductTable.findMany({
    where: gte(ProductTable.inventoryStock, 1),
    columns: {
      name: true,
    },
  });

  const saleProducts = await db.query.SaleTable.findMany({
    columns: {
      id: true,
    },
  });

  const user = await getUser();

  if (user == undefined) {
    return redirect("/sign-in");
  }

  return (
    <div>
      <DashboardHeader />
      <h1
        className="text-2xl md:text-3xl lg:text-4xl  text-sky-100 items-center 
         mt-4 text-center font-bold mx-auto "
      >
        Main Dashboard
      </h1>
      <hr className="w-1/2 mx-auto text-shadow-amber-200 shadow-2xs" />

      <div className=" flex-col space-y-10  px-8 md:flex md:flex-row md:items-center md:justify-center space-x-12 my-12  pt-6 ">
        <Card className="w-full mt-0 bg-linear-30 px-2 from-15% to-gray-700  hover:saturate-200 hover:scale-105 duration-1000 ">
          <CardHeader>
            <CardTitle className="text-2xl text-chart-2">
              In Store Products
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-center text-2xl">
            Your All in Store Products are
            <span className="text-chart-2"> {inStokProducts.length} </span>
          </CardDescription>
          <CardFooter>
            <Button asChild className="w-full bg-slate-300">
              <Link href="/dashboard/products"> Viwe All </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full mt-0  px-2 bg-linear-30 from-15% to-gray-700  hover:saturate-200 hover:scale-102 duration-1000">
          <CardHeader className="text-2xl">
            <CardTitle className="text-2xl text-chart-3">
              Out Of Store Products
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-center text-2xl">
            Required to Store Products are
            <span className="text-chart-3"> {outOfStokProducts.length} </span> .
          </CardDescription>
          <CardFooter>
            <Button asChild className="w-full bg-slate-300">
              <Link href="/dashboard/out"> Viwe All </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full mt-0   px-2 bg-linear-30 from-15% to-gray-700  hover:saturate-200 hover:scale-102 duration-1000">
          <CardHeader>
            <CardTitle className="text-2xl text-chart-5"> All Sales </CardTitle>
          </CardHeader>
          <CardDescription className="text-center text-2xl">
            All Sells From Store are{" "}
            <span className="text-chart-5"> {saleProducts.length} </span> .
          </CardDescription>
          <CardFooter>
            <Button asChild className="w-full bg-slate-300">
              <Link href="/dashboard/sales"> Viwe All </Link>
            </Button>
          </CardFooter>
        </Card>

        {/*  all pruducts */}
      </div>
    </div>
  );
}
