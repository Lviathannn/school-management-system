"use client";

import { cn } from "@/lib/utils";

type Props = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  color?: string;
  extra?: React.ReactNode;
  classnames?: {
    container?: string;
    icon?: {
      container?: string;
      icon?: string;
    };
    title?: string;
    subtitle?: string;
  };
  extraPosition?: "top" | "bottom";
};

export function Header({
  icon,
  title,
  color,
  subtitle,
  extra,
  extraPosition = "bottom",
  classnames,
}: Props) {
  return (
    <div
      className={cn(
        `flex w-full items-center justify-between ${classnames?.container}`,
      )}
    >
      <div
        className={cn(`flex items-center gap-5 ${classnames?.icon?.container}`)}
      >
        <div
          className={cn(`rounded-lg p-2 ${classnames?.icon?.icon}`)}
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>

        <div className="">
          {subtitle && extraPosition === "top" && (
            <p className={cn(`text-sm text-slate-500 ${classnames?.subtitle}`)}>
              {subtitle}
            </p>
          )}

          <h2 className={cn(`text-lg font-semibold ${classnames?.title}`)}>
            {title}
          </h2>

          {subtitle && extraPosition === "bottom" && (
            <p className={cn(`text-sm text-slate-500 ${classnames?.subtitle}`)}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {extra && extra}
    </div>
  );
}
