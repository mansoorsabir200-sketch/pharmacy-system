"use client";

import { logout } from "@/Actions/auth";
import { Button } from "./button";
import { LogOutIcon } from "lucide-react";

export function LogOutBtn() {
  return (
    <Button
      onClick={async () => await logout()}
      className="w-[180px] ml-auto mr-3 "
    >
      {" "}
      Delete Account
      <LogOutIcon />
    </Button>
  );
}
