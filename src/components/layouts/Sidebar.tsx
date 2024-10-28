"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  AlignLeft,
  BackpackIcon,
  CalendarIcon,
  GraduationCapIcon,
  LandmarkIcon,
  LayoutGridIcon,
  MoonIcon,
  School,
  StarIcon,
  TrendingUpIcon,
  UserIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/theme-store";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    Icon: LayoutGridIcon,
  },

  {
    id: 2,
    title: "Murid",
    href: "/students",
    Icon: BackpackIcon,
  },
  {
    id: 3,
    title: "Guru",
    href: "/teachers",
    Icon: GraduationCapIcon,
  },
  {
    id: 4,
    title: "Nilai",
    href: "/grade",
    Icon: StarIcon,
  },
  {
    id: 5,
    title: "Tabungan",
    href: "/savings",
    Icon: LandmarkIcon,
  },
  {
    id: 6,
    title: "Keuangan",
    href: "/Revenue",
    Icon: TrendingUpIcon,
  },

  {
    id: 7,
    title: "Jadwal",
    href: "/schedule",
    Icon: CalendarIcon,
  },
  {
    id: 8,
    title: "User",
    href: "/user",
    Icon: UserIcon,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toogleSidebar = useSidebarStore((state) => state.toogleOpen);

  if (isMobile) {
    return (
      <Sheet open={isOpen}>
        <SheetContent className="lg:hidden" side="left">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-3"
            onClick={() => toogleSidebar()}
          >
            <X size={24} />
          </Button>
          <ul className="flex flex-col gap-7">
            {sidebarItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-5 text-lg ${
                      pathname.includes(item.href)
                        ? "font-medium text-primary dark:text-primary"
                        : "text-slate-700 dark:text-white"
                    }`}
                  >
                    <div
                      className={cn(
                        `flex h-11 w-11 items-center justify-center rounded-lg dark:border-white dark:text-white ${
                          pathname.includes(item.href)
                            ? "bg-gray-100 font-semibold text-primary dark:text-primary"
                            : ""
                        } `,
                      )}
                    >
                      <item.Icon size={18} className={cn("")} />
                    </div>

                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* <ThemeButton /> */}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className="fixed bottom-0 left-0 top-0 z-50 hidden h-full flex-col justify-between bg-white p-2 py-4 md:flex">
      <div className="flex flex-col gap-5">
        <div className="rounded-lg bg-blue-600 p-2">
          <School color="#ffffff" strokeWidth={1.5} size={24} />
        </div>

        <div className="flex flex-col gap-2">
          <TooltipProvider>
            {sidebarItems.map((item) => (
              <Tooltip key={item.id}>
                <TooltipTrigger
                  className={`rounded-lg p-2 hover:bg-gray-100 hover:text-blue-500 ${pathname.includes(item.href) ? "bg-gray-100 text-blue-500" : "text-gray-600"}`}
                >
                  <Link key={item.id} href={item.href}>
                    <item.Icon
                      size={24}
                      strokeWidth={pathname.includes(item.href) ? 1.5 : 1.35}
                    />
                  </Link>
                </TooltipTrigger>

                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={`rounded-lg p-2 hover:bg-gray-100 hover:text-blue-500`}
          >
            <MoonIcon
              size={24}
              strokeWidth={1.5}
              color="#3b82f6"
              fill="#3b82f6 "
            />
          </TooltipTrigger>

          <TooltipContent side="right">Dark Mode</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </aside>
  );
}
