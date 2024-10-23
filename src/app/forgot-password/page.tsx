import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex w-full h-screen">
      <section className="h-full w-[60%] bg-login p-20 grid grid-rows-3">
        <p className="text-white font-medium">DUSMS</p>

        <div className="text-white space-y-5">
          <h1 className="text-5xl font-semibold max-w-xl">
            Darululum School Management System
          </h1>

          <p className="font-light text-lg">
            Efisiensi, Transparansi, dan Keamanan di Ujung Jari Anda.
          </p>
        </div>

        <div className="place-self-end p-5 rounded-2xl bg-black/15 text-white backdrop-blur-sm space-y-5">
          <p className="italic text-sm tracking-wider">
            Ilmu adalah cahaya yang menuntun manusia dari kegelapan menuju
            pemahaman. Belajarlah, karena setiap ilmu yang kau dapat adalah
            langkah menuju kebaikan.
          </p>

          <p className="text-sm">~ Imam Al-Ghazali</p>
        </div>
      </section>

      <section className="bg-white w-[40%] h-full p-10 flex justify-center items-center">
        <div className="flex flex-col pt-10 w-full gap-10 items-center">
          <Image src="/sms-logo.png" width={300} height={55} alt="logo" />

          <div className="text-center">
            <h1 className="text-2xl text-slate-700 font-semibold">
              Lupa Password
            </h1>

            <p className="text-sm text-slate-500">
              Masukan email anda untuk reset password
            </p>
          </div>

          <form className="flex flex-col gap-5 w-full items-center max-w-sm">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>

              <Input
                type="email"
                id="email"
                placeholder="Masukan Email Anda!"
              />
            </div>

            <Button type="submit" className="w-full">
              Kirim Email
            </Button>

            <div className="flex justify-end w-full">
              <Link href="/login" className="text-sm  text-blue-500">
                Kembali ke Login?
              </Link>
            </div>
          </form>

          <p className="text-xs justify-self-end text-center max-w-[200px]">
            © 2024 DARULULUM Powered by Leviathan, All Rights Reserved
          </p>
        </div>
      </section>
    </main>
  );
}
