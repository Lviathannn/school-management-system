import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { PlusIcon, UserIcon } from "lucide-react";

type Props = {};

export default function UsersPage({}: Props) {
  return (
    <main className="min-h-screen bg-gray-50 px-4 pb-10 pt-[88px] md:px-10 md:pl-[86px]">
      <Header
        title="Manajemen User"
        subtitle="List User yang terdaftar di sistem"
        icon={<UserIcon size={24} color="#ffffff" />}
        color="#10b981"
        classnames={{
          title: "text-2xl",
          icon: {
            icon: "p-[10px]",
          },
        }}
        extra={
          <div className="flex items-center gap-2">
            <Button className="rounded-lg bg-gradient-to-br from-primary to-blue-400">
              <PlusIcon size={16} />
              Tambah User
            </Button>
          </div>
        }
      />

      <section className="mt-10 flex items-center justify-between">
        <Input placeholder="Cari User" className="w-[300px]" />

        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <p className="text-muted-foreground">Role</p>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Perempuan">Kepala Sekolah</SelectItem>

              <SelectItem value="Laki Laki">Guru</SelectItem>

              <SelectItem value="Laki Laki">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="mt-10 h-screen w-full rounded-xl border-2 bg-gray-100"></section>
    </main>
  );
}
