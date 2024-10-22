"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export function Navbar({}: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 py-3 pl-[76px] flex justify-between pr-5 bg-white items-center">
      <h1 className="text-2xl font-semibold text-[#151D48]">Dashboard</h1>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />

        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
