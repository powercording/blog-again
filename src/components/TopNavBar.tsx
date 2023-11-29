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
  NavbarMenu,
} from "@nextui-org/react";

import { useState } from "react";
type NavBarProps = {
  className: string;
};

export default function TopNavBar({ className }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className={twMerge("w-full px-3 flex items-center")}
    >
      <NavbarContent className="shrink-1">
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>* add icon and brand name later.</NavbarBrand>
      </NavbarContent>
      {/* TODO: 각 드롭다운의 링크 작성하기 */}
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
                startContent={<FaReact className="text-primary-400" />}
              >
                Development
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              key="code"
              description="Javascript | Typescript | React | Next.js | TailwindCSS | NextUI | Vercel"
              startContent={<FaCode className="text-primary-600" />}
              className="text-lg"
            >
              Code
            </DropdownItem>
            <DropdownItem
              key="Thinking of code"
              description="What I thought when I was coding."
              startContent={<FaRegLightbulb className="text-warning-700" />}
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
                startContent={<BiDrink className="text-pink-400" />}
              >
                Drinks & Food
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem
              key="Alcohol"
              description="My favorite alcohol."
              startContent={<PiWineDuotone className="text-secondary-700" />}
              className="text-lg"
            >
              Wine
            </DropdownItem>
            <DropdownItem
              key="Other"
              description="Whiskey beer ..."
              startContent={<PiBeerBottle className="text-success-700" />}
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
        {/* Login or Logout */}
        <NavbarItem className="ml-auto">
          {/* TODO: 로그인 여부 확인하여 로그인 아웃 변경 및 마이페이지 버튼 */}
          <Link href="/auth/signin">Sign-in</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* TODO: 모바일 환경에서 메뉴 아이템 노출하기 for temporary*/}
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog">Blog</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
