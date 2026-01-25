import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl h-screen flex flex-col gap-2 items-center justify-center">
      <h1>Click to navigate</h1>
      <Link href="/accordion" className="border w-l">Accordion </Link>
      <Link href="/alert" className="border w-l">Alert </Link>
      <Link href="/card" className="border w-l">Card + Toast + Tabs </Link>
      <Link href="/dialog" className="border w-l">Dialog </Link>
      <Link href="/dropdown" className="border w-l">Dropdown </Link>
      <Link href="/otp" className="border w-l">Otp </Link>
      <Link href="/pop" className="border w-l">Pop + Calender </Link>
      <Link href="/sheet" className="border w-l">Sheet </Link>
      <Link href="/sidebar" className="border w-l">Sidebar with url navigation</Link>
      <Link href="/table" className="border w-l">Table </Link>
      <Link href="/tabs" className="border w-l">Tabs </Link>
    </div>
  );
}
