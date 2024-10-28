import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Pagination } from "@/features/common";
import { DataTable } from "@/features/dataTable";
import { TStudent, columns } from "@/features/student";
import { BackpackIcon, Download, PlusIcon } from "lucide-react";

type Props = {};

const studentData: TStudent[] = [
  {
    id: "728ed52fd",
    nik: 320718011001,
    name: "Athiya Rizky Adzkiya",
    parent: "Arifin",
    parentContact: "08123456789",
    birthDate: new Date(),
    birtLocation: "Lampung",
    address: "Jl. Raya Kalianda",
    class: "B",
    gender: "Perempuan",
  },
  {
    id: "728ed52fs",
    nik: 320718011001,
    name: "Leviathan Envy",
    parent: "Anwar",
    parentContact: "08123456789",
    birthDate: new Date(),
    birtLocation: "Ciamis",
    address: "Ponpes Darul Ulum",
    class: "A",
    gender: "Laki laki",
  },
  {
    id: "728ed52fa",
    nik: 320718011001,
    name: "Athika Tsary Adzkiya",
    birtLocation: "Lampung",
    address:
      "Jl. Raya Kalianda No. 1 RT 01 RW 01 Kalianda lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    birthDate: new Date(),
    parentContact: "08123456789",
    parent: "Arifin",
    class: "B",
    gender: "Perempuan",
  },
  {
    id: "728ed52fv",
    nik: 320718011001,
    name: "Muhammad Asrul",
    birthDate: new Date(),
    birtLocation: "Ciamis",
    address: "Ponpes Darul Ulum",
    parent: "Anwar",
    parentContact: "08123456789",
    class: "A",
    gender: "Laki laki",
  },
];

export default function StudentsPage({}: Props) {
  return (
    <main className="bg-white px-4 pb-10 pt-[88px] md:px-10 md:pl-[86px]">
      <Header
        title="Manajemen Siswa"
        subtitle="List siswa yang terdaftar di sekolah"
        icon={<BackpackIcon size={24} color="#ffffff" />}
        color="#5D5FEF"
        classnames={{
          title: "text-2xl",
          icon: {
            icon: "p-[10px]",
          },
        }}
        extra={
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline" className="rounded-lg" size="icon">
              <Download size={16} />
            </Button>

            <Button className="rounded-lg bg-gradient-to-br from-primary to-blue-400">
              <PlusIcon size={16} />
              Tambah Siswa
            </Button>
          </div>
        }
      />

      <div className="mt-5 flex items-center gap-2 md:hidden">
        <Button className="w-full rounded-lg bg-gradient-to-br from-primary to-blue-400">
          <PlusIcon size={16} />
          Tambah Siswa
        </Button>

        <Button variant="outline" className="w-full rounded-lg" size="icon">
          <Download size={16} /> Export Data
        </Button>
      </div>

      <section className="mt-5 flex flex-col justify-between gap-2 md:mt-10 md:flex-row md:items-center">
        <Input placeholder="Cari Siswa" className="w-full md:w-[300px]" />

        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <p className="text-muted-foreground">Kelas</p>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="A">A</SelectItem>

              <SelectItem value="B">B</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <p className="text-muted-foreground">Kelas</p>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="A">A</SelectItem>

              <SelectItem value="B">B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="mt-10 w-full rounded-xl">
        <DataTable columns={columns} data={studentData} />

        <Pagination totalData={50} />
      </section>
    </main>
  );
}
