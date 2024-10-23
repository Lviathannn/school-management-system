import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { schedule } from "@/constant";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import {
  BackpackIcon,
  CalendarIcon,
  ChevronRightIcon,
  SunIcon,
} from "lucide-react";

type Props = {};

export function Schedule({}: Props) {
  return (
    <div className="w-full">
      <Header
        title="Jadwal"
        subtitle="Dalam 1 Bulan"
        icon={<CalendarIcon size={24} strokeWidth={1.5} color="#ffffff" />}
        color="#f43f5e"
        extra={
          <Button variant="ghost" className="text-slate-700" size="icon">
            <ChevronRightIcon size={16} strokeWidth={1.5} />
          </Button>
        }
      />

      <div className="mt-5 flex flex-col gap-2">
        {schedule.map((item, index) => (
          <div
            className="flex items-center justify-between rounded-lg bg-gray-50 p-2"
            key={index}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  `${item.type === "kegiatan" ? "bg-emerald-600" : "bg-red-500"} flex aspect-square h-8 w-8 items-center justify-center rounded-lg`,
                )}
              >
                {item.type === "libur" ? (
                  <SunIcon size={16} color="#ffffff" strokeWidth={1.5} />
                ) : (
                  <BackpackIcon size={16} color="#ffffff" strokeWidth={1.5} />
                )}
              </div>

              <div className="flex flex-col">
                <p className="truncate text-sm font-semibold">
                  {item.title.length < 20
                    ? item.title
                    : item.title.substring(0, 20) + "..."}
                </p>

                <p className="text-xs text-gray-500">
                  {format(item.date, "dd MMMM yyyy", { locale: id })}
                </p>
              </div>
            </div>

            <div
              className={`${item.type === "libur" ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-700"} text-nowrap rounded px-2 py-1 text-xs font-medium`}
            >
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
