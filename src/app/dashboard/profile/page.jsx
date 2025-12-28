import { getUser } from "@/auth/getAuth";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOutBtn } from "@/components/ui/LogBtn";
import { UserRoundCog } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Profile() {
  const userData = await getUser();

  if (userData == null) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full  py-32 px-4 ">
      <Card className="max-w-3xl h mx-auto mt-12 h-46   bg-linear-30 from-3% to-slate-700">
        <UserRoundCog className="size-40" />
        <CardHeader>
          <h1 className="text-2xl text-neutral-300 "> {userData.user.name}</h1>
          <CardTitle>{userData.user.email}</CardTitle>
        </CardHeader>
        <LogOutBtn />
      </Card>
    </div>
  );
}
