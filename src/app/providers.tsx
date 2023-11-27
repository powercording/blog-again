"use client";

import { NextUIProvider } from "@nextui-org/react";

interface UiProviderProps {
  children: React.ReactNode;
  className?: string;
}

export function Providers({ children, className }: UiProviderProps) {
  return <NextUIProvider className={className}>{children}</NextUIProvider>;
}
