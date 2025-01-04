import { StarIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  name: string;
  studentClass: string;
  gender: string;
  star: number;
};

export function BestStudent({ name, studentClass, gender, star }: Props) {
  return (
    <div className="rounded-lg p-[10px] flex bg-gray-50 justify-between items-center">
      <div className="flex gap-2">
        <div
          className="flex justify-center items-end w-10 h-10 rounded-full overflow-hidden"
          style={{
            backgroundColor: gender === "Perempuan" ? "#FFC0CB" : "#87CEEB",
          }}
        >
          <Image
            src={gender === "Perempuan" ? "/girl.png" : "/boy.png"}
            alt="student picture"
            width={32}
            height={32}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-lg font-medium text-slate-700 leading-6">
            {name}
          </span>

          <span className="text-xs text-slate-400">Kelas {studentClass}</span>
        </div>
      </div>

      <div className="w-10 flex justify-evenly items-center">
        <span className="text-sm">{star}</span>

        <StarIcon fill="#FACC15" size={16} strokeWidth={1.5} color="#FACC15" />
      </div>
    </div>
  );
}
