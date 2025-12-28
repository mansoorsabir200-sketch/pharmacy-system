import { signeUP } from "@/Actions/auth";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

import Link from "next/link";

export function SigneUPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  async function handelSubmit(e) {
    e.preventDefault();
    const response = await signeUP({ name, email, password });

    if (response) {
      setErrMsg(response);
    }
  }
  return (
    <form
      onSubmit={handelSubmit}
      className="w-[660px] flex flex-col space-y-4  "
    >
      <h2 className="text-red-700">{errMsg} </h2>
      <div className="flex  flex-col space-y-2">
        <label className="text-[20px] opacity-60"> Enter Name </label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>
      {/* ----------- */}
      <div className="flex  flex-col space-y-2">
        <label className="text-[20px] opacity-60"> Enter Email </label>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      {/* ------------- */}
      <div className="flex  flex-col space-y-2">
        <label className="text-[20px] opacity-60"> Enter Password </label>
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex justify-between">
        <Button type="Submit" className="w-2xs ">
          {" "}
          Create Acc{" "}
        </Button>

        <Button
          variant="ghost"
          asChild
          className="p-1n border-[0.5px]  border-neutral-500"
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </form>
  );
}
