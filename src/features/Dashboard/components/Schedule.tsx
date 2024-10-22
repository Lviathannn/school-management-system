import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { schedule } from "@/constant";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import {
  BackpackIcon,
  CalendarIcon,
  ChevronRight,
  ChevronRightIcon,
  SunIcon,
} from "lucide-react";

type Props = {};

export function Schedule({}: Props) {
  return (
    <div>
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

      <div className="mt-5 flex gap-2 flex-col">
        {schedule.map((item, index) => (
          <div
            className="p-2 bg-gray-50 flex rounded-lg  justify-between items-center"
            key={index}
          >
            <div className="flex gap-3 items-center">
              <div
                className={cn(
                  `${item.type === "kegiatan" ? "bg-emerald-600" : "bg-red-500"} rounded-lg w-8 h-8 flex justify-center items-center aspect-square`,
                )}
              >
                {item.type === "libur" ? (
                  <SunIcon size={16} color="#ffffff" strokeWidth={1.5} />
                ) : (
                  <BackpackIcon size={16} color="#ffffff" strokeWidth={1.5} />
                )}
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-semibold truncate">
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
              className={`${item.type === "libur" ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-700"} px-2 py-1 text-xs rounded font-medium   text-nowrap`}
            >
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
