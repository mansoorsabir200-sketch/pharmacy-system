"use client";

import { useState } from "react";
import { Input } from "./input";

import { Button } from "./button";
import { SaveProducts, upDateProduct } from "@/Actions/product";


export default function ProductsFrom({product}) {
  const expDate=product != null ? product.expirydate.toLocaleDateString().split("/").reverse().join("-") : "";
  
  
  const [name, setName] = useState(product != null ? product.name : "");
  const [brand, setBrand] = useState(product != null ? product.brand : "");
  const [buyPrice, setBuyPrice] = useState(product != null ? product.buyPrice : 0);
  const [salePrice, setSalePrice] = useState(product != null ? product.salePrice : 0);
  const [inventoryStock, setInventoryStock] = useState(product != null ? product.inventoryStock : 0);
  const [expiryDate, setExpiryDate] = useState(expDate);
  const [errMsg, setErrMsg] = useState("");

  async function HendaleSubmit(e) {
    e.preventDefault();

    if(product == null){
       const result = await SaveProducts({
      name,
      brand,
      buyPrice,
      salePrice,
      inventoryStock,
      expiryDate,
    });

    if (result.error) {
      setErrMsg(result.messagee);
    }

    }else{
      await upDateProduct(product.id,{
      name,
      brand,
      buyPrice,
      salePrice,
      inventoryStock,
      expiryDate,
      })
    }
  }

  return (
    <form className="py-4 px-6 mx-auto " onSubmit={HendaleSubmit}>
      {errMsg ? <p className="text-destructive font-sans">{errMsg}</p> : null}{" "}
      {/* ------------------------NAME------------------ */}
      <div className="  mx-auto px-4  flex-col md:flex  space-y-4 justify-between mt-2 ">
        <label className="p-2 text-[18px] ">product name</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />

        {/* ----------------BRAND--------------- */}

        <label className="p-2 text-[18px]  inline">product brand</label>
        <Input
          type="text"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          required
        />

        {/* ----------------------EXPIRYDATE-------------------------------- */}
        <div className="flex text-nowrap flex-col">
          <label className="p-2 text-[18px] "> product expire Date</label>
          <Input
            type="date"
            value={expiryDate}
            onChange={(e) => {
              setExpiryDate(e.target.value.toString());
            }}
            required
          />
        </div>
      </div>
      {/* -----------------BUYPRICE--------------------- */}
      <div className="  mx-auto px-4  flex-col md:flex  space-y-4 justify-between mt-2">
        <div className="flex text-nowrap flex-col">
          <label className="p-2 text-[18px] ">product buy Price</label>
          <Input
            type="number"
            value={buyPrice}
            onChange={(e) => {
              setBuyPrice(e.target.value);
            }}
            min={+1}
            required
          />
        </div>
        {/* --------------------SALEPRICE------------------ */}
        <div className="flex text-nowrap flex-col">
          <label className="p-2 text-[18px] ">product sale price</label>
          <Input
            type="number"
            value={salePrice}
            onChange={(e) => {
              setSalePrice(e.target.value);
            }}
            min={+1}
            required
          />
        </div>
        {/* ---------------------INVENTORYSTOK----------------------- */}
        <div className="flex text-nowrap flex-col">
          <label className="p-2 text-[18px]">innventorystok</label>
          <Input
            type="number"
            value={inventoryStock}
            onChange={(e) => {
              setInventoryStock(e.target.value);
            }}
            min={+1}
            required
          />
        </div>
      </div>
      {product == null ? (
        <Button type="submit" size="lg" className=" mt-4  mx-auto w-full">
          {" "}
          SAVE
        </Button>
      ) : (
        <Button type="submit" size="lg" className="w-2xs mt-4 ml-32">
          update
        </Button>
      )}
    </form>
  );
}
