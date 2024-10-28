import { ProtectedLayouts } from "@/components/layouts";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedLayouts>
      <NuqsAdapter>{children}</NuqsAdapter>
    </ProtectedLayouts>
  );
}
