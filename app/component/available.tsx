"use client";
import { GooglePlayLogoIcon, AppStoreLogoIcon } from "@phosphor-icons/react";
import React from "react";

export default function Available() {
  return (
    <div className="py-2 px-4 flex items-center bg-zinc-100 rounded-full hidden md:flex">
      <p className="text-xs flex  font-light text-black/30">
        Available on{" "}
        <span className="px-1 flex items-center gap-0.5">
          App Store
          <AppStoreLogoIcon weight="fill" size={18} />
        </span>{" "}
        &
        <span className="px-1 flex items-center gap-0.5">
          Google Store
          <GooglePlayLogoIcon weight="fill" size={16} />
        </span>
      </p>
    </div>
  );
}
