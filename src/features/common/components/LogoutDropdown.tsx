"use client";
import { LogOut, MoonIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function LogoutDropdown() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            width={10}
            height={10}
            src="https://github.com/shadcn.png"
          />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-5 w-20">
        <DropdownMenuItem>
          <MoonIcon />
          <span>Darkmode</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="hover:!bg-red-500 hover:!text-white"
          onClick={() => {
            router.push("/login");
          }}
        >
          <LogOut />

          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
