"use client";

import { twMerge } from "tailwind-merge";
import { FaCode } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { BiDrink } from "react-icons/bi";
import { PiWineDuotone } from "react-icons/pi";
import { PiBeerBottle } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
interface NavBarProps {
  className: string;
}

export default function TopNavBar({ className }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      // className={twMerge("border w-full px-3 flex items-center", className)}
    >
      <NavbarContent className="shrink-1">
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        {/* <NavbarBrand>* add icon and brand name later.</NavbarBrand> */}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        {/* 코드 카테고리 */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                radius="sm"
                variant="light"
                startContent={<FaReact />}
              >
                Development
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              key="code"
              description="Javascript | Typescript | React | Next.js | TailwindCSS | NextUI | Vercel"
              startContent={<FaCode />}
              className="text-lg"
            >
              Code
            </DropdownItem>
            <DropdownItem
              key="Thinking of code"
              description="What I thought when I was coding."
              startContent={<FaRegLightbulb />}
              className="text-lg"
            >
              thinking of code
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* 술/음식 카테고리 */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                radius="sm"
                variant="light"
                startContent={<BiDrink />}
              >
                Drinks & Food
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              key="Alcohol"
              description="My favorite alcohol."
              startContent={<PiWineDuotone />}
              className="text-lg"
            >
              Wine
            </DropdownItem>
            <DropdownItem
              key="Other"
              description="Whiskey beer ..."
              startContent={<PiBeerBottle />}
              className="text-lg"
            >
              Other
            </DropdownItem>
            <DropdownItem
              key="Food"
              description="Yummy!"
              startContent={<GiForkKnifeSpoon />}
              className="text-lg"
            >
              Food
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
