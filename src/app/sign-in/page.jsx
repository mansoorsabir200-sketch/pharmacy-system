"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInForm } from "@/components/ui/sign-inForm";

export default function SignIn() {
  return (
    <div
      className="absolute  h-screen w-screen
            bg-gradient-to-br from-10% to-gray-700"
    >
      {/*    bg-[size:10px_10px] */}
      <Card className="w-3xl m-auto mt-24">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold"> Signe in</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
