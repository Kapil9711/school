import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-orange-500">Hello from server</h1>
      <Link href={"/about"}>
        <Button>goToAbout</Button>
      </Link>
    </>
  );
}
