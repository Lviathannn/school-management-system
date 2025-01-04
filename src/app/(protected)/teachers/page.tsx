import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Download, GraduationCapIcon, PlusIcon } from "lucide-react";

type Props = {};

export default function TeachersPage({}: Props) {
  return (
    <main className="min-h-screen bg-gray-50 px-4 pb-10 pt-[88px] md:px-10 md:pl-[86px]">
      <Header
        title="Manajemen Guru"
        subtitle="List Guru yang mengajar di sekolah"
        icon={<GraduationCapIcon size={24} color="#ffffff" />}
        color="#2563EB"
        classnames={{
          title: "text-2xl",
          icon: {
            icon: "p-[10px]",
          },
        }}
        extra={
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-lg" size="icon">
              <Download size={16} />
            </Button>

            <Button className="rounded-lg bg-gradient-to-br from-primary to-blue-400">
              <PlusIcon size={16} />
              Tambah Guru
            </Button>
          </div>
        }
      />

      <section className="mt-10 flex items-center justify-between">
        <Input placeholder="Cari Guru" className="w-[300px]" />

        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <p className="text-muted-foreground">Jenis Kelamin</p>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Perempuan">Perempuan</SelectItem>

              <SelectItem value="Laki Laki">Laki Laki</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="mt-10 h-screen w-full rounded-xl border-2 bg-gray-100"></section>
    </main>
  );
}
