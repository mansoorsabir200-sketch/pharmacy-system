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
      className="w-xs md:w-xl flex flex-col space-y-2 pt-4 px-4 "
      onSubmit={handelSubmit}
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
      <div className="flex   flex-col space-y-2">
        <label className="text-[20px] opacity-60"> Enter Password </label>
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>

      <div className="flex  flex-col mx-auto justify-center items-center  mt-4 mb-2 w-full  ">
        <Button type="Submit" className="w-2xs mt-2   ">
          Sign in
        </Button>
        <Button
          variant="ghost"
          asChild
          className=" bg-linear-30 w-2xs animate-pulse  mt-2  from-5% to-slate-400 hover:scale-105 duration-700"
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </form>
  );
}
