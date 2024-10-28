"use client";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";
type Props = {
  placeholder: string;
  className?: string;
};

export function SearchInput({ placeholder, className }: Props) {
  const [search, setSearch] = useQueryState("search");

  return (
    <Input
      placeholder={placeholder}
      className={className}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
