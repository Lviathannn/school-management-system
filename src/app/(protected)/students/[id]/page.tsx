import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/features/common";
import { formatRupiah } from "@/lib/format";
import {
  BackpackIcon,
  Edit,
  IdCardIcon,
  LandmarkIcon,
  StarIcon,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function StudentDetailPage({}: Props) {
  return (
    <main className="min-h-screen bg-gray-50 px-4 pb-10 pt-[88px] md:px-10 md:pl-[86px]">
      <Breadcrumb
        currentPath="Athika Tsary Adzkiya"
        parentPath="Siswa"
        parentHref="/students"
      />

      <section className="shadow_card mt-5 flex w-full flex-col gap-5 rounded-3xl bg-white p-10">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-2 rounded-full bg-emerald-300" />

            <h1 className="text-3xl font-semibold text-slate-800">
              Detail Siswa
            </h1>
          </div>

          <Button className="rounded-lg bg-gradient-to-br from-primary to-blue-400">
            <Edit size={16} />
            Edit Siswa
          </Button>
        </div>

        <div className="mt-5 flex gap-10">
          <Image
            src="/student.jpg"
            width={150}
            height={150}
            alt="student"
            className="h-[150px] w-[150px] rounded-full object-cover"
            quality={100}
          />

          <div className="flex w-full flex-col justify-between gap-10">
            <h1 className="text-2xl font-medium text-slate-700">
              Athika Tsary Adzkiya
            </h1>

            <div className="grid w-full grid-cols-3 gap-10">
              <div className="flex flex-col">
                <span className="text-sm text-slate-600">
                  Number Induk Siswa
                </span>

                <span className="text-lg font-medium text-slate-800">
                  123456789
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-slate-600">
                  Tempat, Tanggal Lahir
                </span>

                <span className="text-lg font-medium text-slate-800">
                  Jakarta, 12 Agustus 2015
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-slate-600">Kelas</span>

                <span className="text-lg font-medium text-slate-800">
                  <Badge
                    variant="primary"
                    className="rounded-md px-4 py-1 text-xs !font-medium"
                  >
                    Kelas A
                  </Badge>
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-slate-600">Orang Tua</span>

                <span className="text-lg font-medium text-slate-800">
                  Bapak dan Ibu
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-slate-600">No Telepon</span>

                <span className="text-lg font-medium text-slate-800">
                  08123456789
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-slate-600">Alamat</span>

                <span className="text-lg font-medium text-slate-800">
                  Jl. Raya Kalianda No. 1 RT 01 RW 01 Kalianda
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-5">
          <div className="flex items-center gap-5 rounded-lg bg-gray-100 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#facc15] text-white">
              <StarIcon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-700">52</span>

              <span className="text-sm text-slate-500">Total Bintang</span>
            </div>
          </div>

          <div className="flex items-center gap-5 rounded-lg bg-gray-100 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-400 text-white">
              <LandmarkIcon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-700">
                {formatRupiah(5000000)}
              </span>

              <span className="text-sm text-slate-500">Total Tabungan</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shadow_card mt-10 flex w-full flex-col gap-5 rounded-3xl bg-white p-10">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-2 rounded-full bg-emerald-300" />

            <h1 className="text-3xl font-semibold text-slate-800">
              Attachment
            </h1>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-5">
          <div className="flex items-center gap-5 rounded-lg bg-gray-100 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <BackpackIcon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-700">
                Foto Murid
              </span>

              <button className="text-sm text-blue-500 underline">
                Download File
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 rounded-lg bg-gray-100 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
              <IdCardIcon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-700">
                Kartu Keluarga
              </span>

              <button className="text-start text-sm text-blue-500 underline">
                Download File
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 rounded-lg bg-gray-100 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
              <User2Icon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-700">
                KTP Orang Tua
              </span>

              <button className="text-start text-sm text-blue-500 underline">
                Download File
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
