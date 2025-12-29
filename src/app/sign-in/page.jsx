"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInForm } from "@/components/ui/sign-inForm";

export default function SignIn() {
  return (
    <div className="h-screen w-full bg-linear-10 from-15% to-slate-700 mx-auto px-2">
      <div className="pt-12">
        <Card className="w-[400px] bg-linear-10 from-5% to-slate-700 px-4 md:w-2xl  m-auto mt-24">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold ">Signe in</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="animate-typing">
              Create an ACC
            </CardDescription>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
