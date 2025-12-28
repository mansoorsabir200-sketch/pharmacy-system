"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SigneUPForm } from "@/components/ui/singn-upForm";

export default function SingnUpPage() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-white 
      bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
      [background-size:16px_16px]"
    >
      <Card className="w-3xl m-auto mt-24">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            {" "}
            Create Acuont
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SigneUPForm />
        </CardContent>
      </Card>
    </div>
  );
}
