import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export function ProtectedLayouts({ children }: Props) {
  return (
    <main className="bg-[#FAFBFC]">
      <Navbar />
      <Sidebar />
      {children}
    </main>
  );
}
