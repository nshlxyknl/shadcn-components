
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl h-screen flex flex-col gap-2 justify-center items-center">
      <h1>Click to navigate</h1>
      <Link href="/accordion" className="border w-l">Accordion </Link>
      <Link href="/alert" className="border w-l">Alert </Link>
      <Link href="/card" className="border w-l">Card + Toast + Tabs + Badge+ Spinner </Link>
      <Link href="/dialog" className="border w-l">Dialog </Link>
      <Link href="/dropdown" className="border w-l">Dropdown </Link>
      <Link href="/otp" className="border w-l">Otp + AlertDialog </Link>
      <Link href="/pop" className="border w-l">Pop + Calender </Link>
      <Link href="/sheet" className="border w-l">Sheet </Link>
      <Link href="/sidebar" className="border w-l">Sidebar with url navigation</Link>
      <Link href="/table" className="border w-l">Table </Link>
      <Link href="/tabs" className="border w-l">Tabs </Link>
      <Link href="/avatar" className="border w-l">Avatar </Link>
      <Link href="/carousel" className="border w-l">Carousel </Link>
      <Link href="/chart" className="border w-l">Chart </Link>
      <Link href="/collapsible" className="border w-l">Collapsible + Label </Link>
      <Link href="/command" className="border w-l">Command </Link>
      <Link href="/data-table" className="border w-l">Data-table</Link>
      <Link href="/empty" className="border w-l">Empty</Link>
      <Link href="/hover-card" className="border w-l">Hover Card</Link>
      <Link href="/menubar" className="border w-l">Menubar</Link>
      <Link href="/progress" className="border w-l">Progress</Link>
    </div>
  );
}
