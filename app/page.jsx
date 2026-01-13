import Image from "next/image";
import { ModeToggle } from "./toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
     <header className=" fixed top-0 w-full z-50 bg-linear-to-b from-[#0B0E14]/85 to-[#0B0E14]/65 backdrop-blur-md border-b border-white/5">
        <ModeToggle />
      </header>
    </div>
  );
}
