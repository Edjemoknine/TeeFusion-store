"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const paths = usePathname();

  const pathnames = paths.split("/").filter((path) => path);

  return (
    <div className="bg-neutral-100">
      <Breadcrumb className="container b py-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={"/"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathnames.length > 0 && <BreadcrumbSeparator />}

          {pathnames.map((path, idx) => {
            const isLastPath = pathnames.length === idx + 1;

            return (
              <>
                <BreadcrumbItem key={path}>
                  {!isLastPath ? (
                    <BreadcrumbLink asChild>
                      <Link href={`/${path}`}>{path}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{path}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {pathnames.length !== idx + 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
