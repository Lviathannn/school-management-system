import {
  Breadcrumb as _Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type TProps = {
  currentPath: string;
  parentPath: string;
  parentHref: string;
};

export function Breadcrumb({ currentPath, parentPath, parentHref }: TProps) {
  return (
    <_Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={parentHref}>{parentPath}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>{currentPath}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </_Breadcrumb>
  );
}
