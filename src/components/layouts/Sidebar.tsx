"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  BackpackIcon,
  GraduationCapIcon,
  HandCoinsIcon,
  LandmarkIcon,
  LayoutGridIcon,
  School,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

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
    title: "Tabungan",
    href: "/savings",
    Icon: HandCoinsIcon,
  },
  {
    id: 5,
    title: "Pendapatan & Pengeluaran",
    href: "/Revenue",
    Icon: LandmarkIcon,
  },
];

export function Sidebar({}: Props) {
  const pathname = usePathname();

  return (
    <aside className="p-2 h-full fixed left-0 top-0 bottom-0 flex flex-col gap-5 bg-white pt-10">
      <div className="p-2 bg-blue-600 rounded-lg">
        <School color="#ffffff" strokeWidth={1.5} size={24} />
      </div>

      <div className="flex flex-col gap-2">
        <TooltipProvider>
          {sidebarItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger
                className={`p-2 hover:bg-gray-100 hover:text-blue-500 rounded-lg ${pathname === item.href ? "bg-gray-100 text-blue-500" : "text-gray-600"}`}
              >
                <Link key={item.id} href={item.href}>
                  <item.Icon
                    size={24}
                    strokeWidth={pathname === item.href ? 1.5 : 1.35}
                  />
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </aside>
  );
}
