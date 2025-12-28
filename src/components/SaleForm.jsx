"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createSale } from "@/Actions/sales";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
export function SaleForm({ products }) {
  const [productId, setProductId] = useState(products[0].id);
  const [saleCount, setSaleCount] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    await createSale({ productId, saleCount });
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4   w-xl px-4 mx-auto md:max-w-2xl"
    >
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-neutral-300 font-semibold text-[18px]">
            {" "}
            name{" "}
          </label>
          <select
            value={productId === "" ? products[0].id : productId}
            onChange={(e) => setProductId(e.target.value)}
            className="max-w-[300px] md:max-w-2xl  border-2 p-2 rounded-xs outline-0"
          >
            {products.map((p) => {
              return (
                <option key={p.id} className="bg-secondary " value={p.id}>
                  {" "}
                  {p.name}{" "}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-neutral-300 font-semibold  text-[18px]">
          sale Count
        </label>
        <Input
          className="w-[300px] md:w-[560px]"
          type="Number"
          value={saleCount}
          onChange={(e) => setSaleCount(e.target.valueAsNumber)}
          min={1}
          max={
            productId === ""
              ? 1
              : products.find((pr) => pr.id === productId).inventoryStock
          }
          required
        />
      </div>
      <Button type="submit"> Sale Product </Button>
    </form>
  );
}
