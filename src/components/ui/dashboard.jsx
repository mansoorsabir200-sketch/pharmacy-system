import Link from "next/link";
import { Button } from "./button";
import {  MenuIcon, ThermometerSunIcon } from "lucide-react";
import { getUser } from "@/auth/getAuth";
import { ModeToggle } from "../Light&Dark";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";

export default async function DashboardHeader() {
  const user = await getUser();
  return (
    <div
      className="min-h-16 w-full  md:block  fixed flex top-0 inset-x-0 z-50 
     justify-between border-b border-neutral-600 bg-background/10 backdrop-blur-sm"
    >
      <Button className="text-xl mt-3 " size="sm" variant="ghost">
        PH
        <ThermometerSunIcon className="size-6" />
        <Link href="/"> </Link>
      </Button>

      <div className=" hidden  md:flex   md:justify-end space-x-6   px-2 items-center   ">
        <Button variant="link">
          <Link className="text-xl" href={"/dashboard"}>
            {" "}
            Dashboard
          </Link>
        </Button>
        <Button variant="link">
          <Link className="text-xl" href={"/dashboard/products"}>
            {" "}
            Products
          </Link>
        </Button>

        <Button variant={"link"}>
          <Link className="text-xl" href={"/dashboard/sales"}>
            {" "}
            Seles
          </Link>
        </Button>

        <Button variant={"link"}>
          <Link className="text-xl" href={"/dashboard/profile"}>
            {" "}
            profile{" "}
          </Link>
        </Button>

        {user == undefined ? (
          <Button className="text-xl" variant={"link"}>
            <Link href={"/sign-in"}> login </Link>
          </Button>
        ) : null}

        <Button variant="link">
          <Link className="text-xl" href={"/dashboard/about"}>
            About
          </Link>
        </Button>
      </div>
      <div className="md:hidden px-4 py-6">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle> Menue  </SheetTitle>
              <SheetDescription className="flex flex-col space-y-4">
                <Button variant="ghost">
                  <Link className="text-xl" href={"/dashboard"}>
                    {" "}
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost">
                  <Link className="text-xl" href={"/dashboard/products"}>
                    {" "}
                    Products
                  </Link>
                </Button>

                <Button variant={"ghost"}>
                  <Link className="text-xl" href={"/dashboard/sales"}>
                    {" "}
                    Seles
                  </Link>
                </Button>

                <Button variant={"ghost"}>
                  <Link className="text-xl" href={"/dashboard/profile"}>
                    {" "}
                    profile{" "}
                  </Link>
                </Button>

                {user == undefined ? (
                  <Button className="text-xl" variant={"ghost"}>
                    <Link href={"/sign-in"}> login </Link>
                  </Button>
                ) : null}

                <Button variant="ghost">
                  <Link className="text-xl" href={"/dashboard/about"}>
                    About
                  </Link>
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
