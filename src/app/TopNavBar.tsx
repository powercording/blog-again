import { twMerge } from "tailwind-merge";

interface NavBarProps {
  className: string;
}

export default async function TopNavBar({ className }: NavBarProps) {
  return (
    <div className={twMerge("border w-full px-3 flex items-center", className)}>
      navbar
    </div>
  );
}
