"use client";
type Props = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  color?: string;
  extra?: React.ReactNode;
};

export function Header({ icon, title, color, subtitle, extra }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div
          className={`p-2 rounded-lg`}
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>

        <div className="">
          <h2 className="text-lg font-semibold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>

      {extra && extra}
    </div>
  );
}
