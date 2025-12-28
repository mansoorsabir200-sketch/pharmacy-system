import Link from "next/link";
import { Button } from "./button";
import { PinIcon, ThermometerIcon, ThermometerSunIcon } from "lucide-react";
import { ModeToggle } from "../Light&Dark";

export default function Header() {
  return (
    <div
      className="min-h-16 w-full z-30  fixed flex top-0 inset-x-0 
     justify-between border-b border-neutral-600 bg-background/10 backdrop-blur-sm"
    >
      <Button className="p-2 mx-2 mt-2 " variant="Ghost"
       >
        <Link href="/">

          <ThermometerSunIcon className="size-8"/>
        </Link>
      </Button>

      <div className="flex  justify-around w-2xs">
        <Button variant="link">
          <Link href={"/dashboard"}> Dashboard</Link>
        </Button>
        
      </div>
    </div>
  );
}
