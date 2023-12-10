import { Button } from "@nextui-org/button";
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { FaPencil } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
export default function FloatingButton() {
  return (
    <Popover offset={20} radius="sm">
      <PopoverTrigger className="fixed bottom-4 right-4 z-50">
        <Button
          as="text"
          isIconOnly
          radius="full"
          className="hover:scale-105 hover:bg-warning-300"
        >
          <FaCirclePlus className="text-xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] font-bold py-2">
        <PopoverItem>
          <Link href="/write" className="flex items-center ">
            <FaPencil className="mr-3 text-success-500" /> 글쓰기
          </Link>
        </PopoverItem>
        <PopoverItem>
          <Link href="settings" className="flex items-center ">
            <IoMdSettings className="mr-3 text-foreground-500" /> 설정
          </Link>
        </PopoverItem>
      </PopoverContent>
    </Popover>
  );
}

export const PopoverItem = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] px-1 py-2 rounded-small hover:bg-foreground-100">
    {children}
  </div>
);
