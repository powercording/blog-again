import { Button } from '@nextui-org/button';
import React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { FaPencil } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import Link from 'next/link';

type Content = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

type FloatingButtonProps = {
  contents?: Content[];
};

export default function FloatingButton({ contents }: FloatingButtonProps) {
  if (!contents) {
    console.log('contents is undefined');
  }

  return (
    <Popover offset={20} radius="sm">
      <PopoverTrigger className="fixed bottom-4 right-4 z-50">
        <Button isIconOnly radius="full" className="hover:scale-105 hover:bg-warning-300">
          <FaCirclePlus className="text-xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] py-2 font-bold">
        {contents?.map(content => (
          <PopoverItem key={content.text}>
            <Link href={content.href} className="flex items-center ">
              {content.icon}
              <span className="ml-3">{content.text}</span>
            </Link>
          </PopoverItem>
        ))}
        <PopoverItem key="setting">
          <Link href="settings" className="flex items-center ">
            <IoMdSettings className="mr-3 text-foreground-500" /> 설정
          </Link>
        </PopoverItem>
      </PopoverContent>
    </Popover>
  );
}

export const PopoverItem = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] rounded-small px-1 py-2 hover:bg-foreground-100">
    {children}
  </div>
);
