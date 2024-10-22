"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export function Navbar({}: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 py-3 pl-[76px] flex justify-between pr-10 bg-white items-center z-50">
      <div className="">
        <h1 className="text-lg font-semibold text-[#151D48]">
          Halo ,Anwar Sanusi !
        </h1>

        <p className="text-xs text-slate-400">Super Admin</p>
      </div>

      <Avatar>
        <AvatarImage
          width={10}
          height={10}
          src="https://github.com/shadcn.png"
        />

        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
