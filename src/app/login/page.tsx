import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex h-screen w-full">
      <section className="flex h-full w-full items-center justify-center bg-white p-10 lg:w-[50%] xl:w-[40%]">
        <div className="flex w-full flex-col items-center gap-10 pt-10">
          <Image src="/sms-logo.png" width={250} height={70} alt="logo" />

          <div className="text-center">
            <h1 className="text-2xl font-semibold text-slate-700">
              Login Untuk Melanjutkan
            </h1>

            <p className="text-sm text-slate-500">
              Gunakan akun yang telah terdaftar!.
            </p>
          </div>

          <form className="flex w-full max-w-sm flex-col items-center gap-5">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>

              <Input
                type="email"
                id="email"
                placeholder="Masukan Email Anda!"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Password</Label>

              <Input
                type="email"
                id="email"
                placeholder="Masukan Password Anda!"
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>

            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />

                <Label htmlFor="remember">Ingat Saya</Label>
              </div>

              <Link href="/forgot-password" className="text-sm text-blue-500">
                Lupa Password?
              </Link>
            </div>
          </form>

          <p className="max-w-[200px] justify-self-end text-center text-xs">
            © 2024 DARULULUM Powered by Leviathan, All Rights Reserved
          </p>
        </div>
      </section>

      <section className="bg-login hidden h-full grid-rows-3 p-10 lg:grid lg:w-[50%] xl:w-[60%] xl:p-20">
        <p className="font-medium text-white">DUSMS</p>

        <div className="space-y-5 text-white">
          <h1 className="max-w-xl text-5xl font-semibold">
            Darululum School Management System
          </h1>

          <p className="text-lg font-light">
            Efisiensi, Transparansi, dan Keamanan di Ujung Jari Anda.
          </p>
        </div>

        <div className="space-y-5 place-self-end rounded-2xl bg-black/15 p-5 text-white backdrop-blur-sm">
          <p className="text-sm italic tracking-wider">
            Ilmu adalah cahaya yang menuntun manusia dari kegelapan menuju
            pemahaman. Belajarlah, karena setiap ilmu yang kau dapat adalah
            langkah menuju kebaikan.
          </p>

          <p className="text-sm">~ Imam Al-Ghazali</p>
        </div>
      </section>
    </main>
  );
}
