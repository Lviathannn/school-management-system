"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import { useSidebarStore } from "@/store/theme-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LogoutDropdown } from "@/features/common";

export function Navbar() {
  const toogleSidebar = useSidebarStore((state) => state.toogleOpen);
  const closeSidebar = useSidebarStore((state) => state.setClose);
  const pathname = usePathname();

  useEffect(() => {
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white px-4 py-3 lg:pl-[76px] lg:pr-10">
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          variant="ghost"
          className="bg-gray-100 lg:hidden"
          onClick={toogleSidebar}
        >
          <AlignLeft size={24} />
        </Button>

        <div className="">
          <h1 className="text-lg font-semibold text-[#151D48]">
            Halo ,Anwar Sanusi !
          </h1>

          <p className="text-xs text-slate-400">Super Admin</p>
        </div>
      </div>

      <LogoutDropdown />
    </header>
  );
}
