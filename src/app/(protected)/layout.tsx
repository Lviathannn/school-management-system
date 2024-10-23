import { ProtectedLayouts } from "@/components/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedLayouts>{children}</ProtectedLayouts>;
}
