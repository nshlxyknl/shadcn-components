
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Dropdown = () => {
  return (

    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Group 1</DropdownMenuLabel>
      <DropdownMenuItem>A</DropdownMenuItem>
      <DropdownMenuItem>B</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuSeparator />
            <DropdownMenuLabel>Group 2</DropdownMenuLabel>
      <DropdownMenuItem>C</DropdownMenuItem>
      <DropdownMenuItem>D</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default Dropdown