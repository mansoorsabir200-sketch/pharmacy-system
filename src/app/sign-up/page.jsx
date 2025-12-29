"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SigneUPForm } from "@/components/ui/singn-upForm";

export default function SingnUpPage() {
  return (
    <div className="h-screen w-full bg-linear-10 from-15% to-slate-700   mx-auto px-2">
      <div className=" pt-24  ">
        <Card className="w-[360px] bg-linear-10 from-15% to-slate-700 md:max-2xl mt-12  mx-auto my-auto ">
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
    </div>
  );
}
