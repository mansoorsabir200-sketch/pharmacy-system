import { signIn } from "@/Actions/auth";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";
import { DamIcon, DramaIcon, FlameKindlingIcon } from "lucide-react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  async function handelSubmit(e) {
    e.preventDefault();
    const response = await signIn({ email, password });
    if (response) {
      setErrMsg(response);
    }
  }
  return (
    <form
      onSubmit={handelSubmit}
      className="w-[660px] flex flex-col space-y-4  "
    >
      <h2 className="text-red-500 text-2xl"> {errMsg} </h2>
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
      <div
        className="flex space-x-56
      "
      >
        <Button type="Submit" className="w-2xs m-auto mt-10">
          {" "}
          Signe In{" "}
        </Button>{" "}
        <Link
          href="/sign-up"
          className="w-2xs m-auto mt-10 border-2 rounded-2xl bg-neutral-800
           hover:bg-neutral-700 text-center p-1.5"
        >
          {" "}
          signe UP
        </Link>
      </div>
    </form>
  );
}
