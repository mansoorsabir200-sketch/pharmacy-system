import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductsFrom from "@/components/ui/productsform";


export default function NewProductsPage() {
  return (
    <div className=" pt-12 max-w-xl md:max-w-2xl px-4 mx-auto ">
      <Card className="bg-linear-to-r from-5% to-blue-950 ">
        <CardHeader>
          <CardTitle className=" text-2xl text-center w-full">Add New Products   </CardTitle>
        </CardHeader>
        <CardDescription>
          <ProductsFrom />
        </CardDescription>
      </Card>
    </div>
  );
}
