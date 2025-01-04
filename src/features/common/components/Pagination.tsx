"use client";
import {
  Pagination as _Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TProps = {
  classname?: string;
  totalData: number;
};

export function Pagination({ classname, totalData }: TProps) {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limitParams, setLimitParams] = useQueryState(
    "limit",
    parseAsInteger.withDefault(5),
  );

  const totalPages = Math.ceil(totalData / limitParams);

  const renderPages = () => {
    const pages = [];

    if (totalPages > 5) {
      if (page === 1) {
        // Condition: Active page at 1, display < 1 2 3 4 ... 10 >
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href="#" isActive onClick={() => setPage(1)}>
              1
            </PaginationLink>
          </PaginationItem>,
        );
        for (let i = 2; i <= 4; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink href="#" onClick={() => setPage(i)}>
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
        pages.push(<PaginationEllipsis key="ellipsis-end" />);
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink href="#" onClick={() => setPage(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (page === 2) {
        // Condition: Active page at 2, display < 1 2 3 4 ... 10 >
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href="#" onClick={() => setPage(1)}>
              1
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={2}>
            <PaginationLink href="#" isActive onClick={() => setPage(2)}>
              2
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={3}>
            <PaginationLink href="#" onClick={() => setPage(3)}>
              3
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(
          <PaginationItem key={4}>
            <PaginationLink href="#" onClick={() => setPage(4)}>
              4
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(<PaginationEllipsis key="ellipsis-end" />);
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink href="#" onClick={() => setPage(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (page >= 3 && page <= totalPages - 3) {
        // Condition: Active page in the middle (e.g., 3), display < 1 ... 3 4 5 ... 10 >
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href="#" onClick={() => setPage(1)}>
              1
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(<PaginationEllipsis key="ellipsis-start" />);
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === page}
                onClick={() => setPage(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
        pages.push(<PaginationEllipsis key="ellipsis-end" />);
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink href="#" onClick={() => setPage(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (page > totalPages - 3) {
        // Condition: Active page close to last page, display < 1 ... 7 8 9 10 >
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href="#" onClick={() => setPage(1)}>
              1
            </PaginationLink>
          </PaginationItem>,
        );
        pages.push(<PaginationEllipsis key="ellipsis-start" />);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === page}
                onClick={() => setPage(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
      }
    } else {
      // Condition: totalPages <= 5, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === page}
              onClick={() => setPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    }

    return pages;
  };

  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-5 p-3 sm:flex-row">
      <_Pagination className={classname}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setPage(page > 1 ? page - 1 : 1)}
            />
          </PaginationItem>
          {renderPages()}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
            />
          </PaginationItem>
        </PaginationContent>
      </_Pagination>

      <Select
        onValueChange={(value) => {
          setLimitParams(parseInt(value));
          setPage(1);
        }}
      >
        <SelectTrigger className="w-[100px] self-end sm:w-[70px]">
          <SelectValue placeholder={limitParams.toString()} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
