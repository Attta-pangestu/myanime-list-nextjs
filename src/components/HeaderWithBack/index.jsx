"use client";

import { SkipBack } from "@phosphor-icons/react";
import React from "react";
import { useRouter } from "next/navigation";
const HeaderWithBack = ({ title }) => {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
  return (
    <>
        <header className="flex justify-between text-white my-6  ">
            <SkipBack size={32} onClick={handleBack} className="cursor-pointer" />
            <h1 className=" text-xl md:text-3xl font-bold text-center">{title}</h1>
        </header>
        <hr className="w-full border border-white" />
    </>
  );
};

export default HeaderWithBack;
