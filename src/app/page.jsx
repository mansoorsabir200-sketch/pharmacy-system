import { getUser } from "@/auth/getAuth";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { Ghost, LucideArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const user = await getUser();


  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-40% flex-wrap px-4 py-4 mt-4  to-sky-800 h-dvh w-full flex  items-center justify-center  ">
        {/*       
      bg-gradient-to-tl from-neutral-700 to-transparent */}

        <div>
          <Link href="/dashboard">
            <img
              src="products-2.jpg"
              alt=""
              className=" rounded-2xl hover:scale-105  duration-1000 hover:shadow-blue-300 hover:shadow-2xs"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <h1
            className="pb-4  text-pretty text-primary  text-3xl md:text-5xl lg:text-7xl 
      font-bold tracking-normal text-center max-w-4xl"
          >
            The Best
            <span className="w-fit inline-block px-2  text-blue-100 font-bold font-serif ">
          
              Pharmacy
            </span>
            System
            <span className="text-xs md:text-2xl  p-4 w-fit mx-auto  block   tracking-normal">
          
              Grow Your Business With Us
            </span>
          </h1>

          <Button asChild size={"lg"} className="w-60 mx-auto ">
            <Link href="/dashboard">
          
              Dashboard
              <LucideArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
