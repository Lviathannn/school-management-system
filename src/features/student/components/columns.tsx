"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EyeIcon, MoreHorizontal, PenIcon, Trash } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Link from "next/link";

// This type is used to define the shape of our data.
export type TStudent = {
  id: string;
  nik: number;
  name: string;
  parent: string;
  parentContact: string;
  birthDate: Date;
  birtLocation: string;
  address: string;
  class: "A" | "B";
  gender: "Laki laki" | "Perempuan";
};

export const columns: ColumnDef<TStudent>[] = [
  {
    accessorKey: "nik",
    header: "NIK",
  },
  {
    accessorKey: "name",
    header: "Nama",

    cell(props) {
      const row = props.row.original;
      const imgUrl = row.gender === "Laki laki" ? "/boy.png" : "/girl.png";
      return (
        <div className="flex w-[200px] items-center gap-3">
          <div
            className={`flex aspect-square h-10 w-10 items-end justify-center overflow-hidden text-nowrap rounded-full ${row.gender === "Laki laki" ? "bg-blue-200" : "bg-rose-200"}`}
          >
            <Image
              src={imgUrl}
              width={30}
              height={30}
              className="object-contain"
              alt="student"
            />
          </div>

          <span className="font-medium">{row.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "birthDate",
    header: ({ table }) => (
      <div className="w-[200px]">Tempat Tanggal Lahir</div>
    ),
    size: 200,
    cell(props) {
      const date = props.getValue() as Date;
      const birthLocation = props.row.original.birtLocation;
      const formattedDate = format(date, "dd MMMM yyyy");

      return (
        <span className="w-[200px]">
          {birthLocation}, {formattedDate}
        </span>
      );
    },
  },

  {
    accessorKey: "parent",
    header: ({ table }) => <div className="w-[100px]">Orang Tua</div>,
  },
  {
    accessorKey: "parentContact",
    header: "Kontak",
  },
  {
    accessorKey: "address",
    header: "Alamat",
    cell(props) {
      const address = props.getValue() as string;

      return <div className="inline-block w-[350px]">{address}</div>;
    },
  },
  {
    accessorKey: "class",
    header: "Kelas",
    cell(props) {
      const studentClass = props.getValue() as string;

      return (
        <Badge
          variant={studentClass === "A" ? "primary" : "destructive"}
          className="text-nowrap rounded-md px-4 py-1 text-xs !font-medium"
        >
          Kelas {studentClass}
        </Badge>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,

    cell: ({ row }) => {
      const student = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus:!ring-transparent">
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>

                <MoreHorizontal className="h-2 w-2" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <Link href={`/students/${student.id}`}>
                <DropdownMenuItem>
                  <EyeIcon className="h-2 w-2" />
                  Lihat Detail
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem>
                <PenIcon className="h-2 w-2" />
                Edit Data
              </DropdownMenuItem>

              <DropdownMenuItem className="hover:!bg-red-500 hover:!text-white">
                <Trash className="h-2 w-2" />
                Hapus Data
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
