"use client";

import { toast } from "@/components/ui/use-toast";

import { Files, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useRef, useState } from "react";
import { CiShare2 } from "react-icons/ci";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function SharePopover() {
  const ref = useRef(null);

  const copyClip = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link Copied" });
  };
  const pathname = usePathname();
  const [currenturl, setCurrentUrl] = useState("");
  useEffect(() => {
    const fullUrl = window.location.href;
    setCurrentUrl(fullUrl);
  }, [pathname]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="px-10 shadow-none py-4 w-fit bg-transparent hover:bg-neutral-100 text-neutral-900 text-sm">
          <CiShare2 size={24} className="text-neutral-500 cursor-pointer" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col gap-4 p-6">
        <h5 className="text-neutral-900 font-semibold">Copy Link</h5>
        <div className="flex items-center gap-3">
          <Input ref={ref} type="text" value={currenturl} className="w-full" />
          <div className="border border-neutral-100 rounded flex justify-center items-center w-10 h-10">
            <Files
              onClick={copyClip}
              size={20}
              className="cursor-pointer hover:bg-neutral-100 text-neutral-500"
            />
          </div>
        </div>
        <h5 className="text-neutral-900 font-semibold">Share</h5>
        <div className="flex items-center gap-4">
          <Image
            src={"/Social Icons/telegram.png"}
            alt="icon"
            width={15}
            height={15}
            className="object-contain"
          />
          <Image
            src={"/Social Icons/Instagram.png"}
            alt="icon"
            width={15}
            height={15}
            className="object-contain"
          />
          <Image
            src={"/Social Icons/X.png"}
            alt="icon"
            width={15}
            height={15}
            className="object-contain"
          />
          <Image
            src={"/Social Icons/Pintress.png"}
            alt="icon"
            width={15}
            height={15}
            className="object-contain"
          />
          <Image
            src={"/Social Icons/Github.png"}
            alt="icon"
            width={15}
            height={15}
            className="object-contain"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
