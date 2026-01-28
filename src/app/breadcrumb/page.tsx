"use client"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"


// breadcrumb>> breadcrumb list >> breadcrumb item >> breadcrumb link >> link
const BreadcrumbDemo =()=> {

      const pathname = usePathname();
      const segments = pathname.split("/").filter(Boolean)


      //if dropdown needed
      
//       const visibleCount = 2
//   const hasOverflow = segments.length > visibleCount + 1

//   const visibleStart = hasOverflow ? segments.slice(0, 1) : segments
//   const visibleEnd = hasOverflow ? segments.slice(-visibleCount) : []

//   const hidden = hasOverflow
//     ? segments.slice(1, -visibleCount)
//     : []

  return (
    <Breadcrumb>
      <BreadcrumbList>

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

 {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/")
          const isLast = index === segments.length - 1

           return (
            <span key={href} className="flex items-center">
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    {segment}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>
                      {segment}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          )
})
}
 </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbDemo