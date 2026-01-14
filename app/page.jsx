import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 w-full border-b z-50 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-linear-to-tr from-pink-500 to-purple-500" />
            <span className="font-inter text-sm font-medium tracking-tight text-white">
              Manan Lall
            </span>
          </div>


          <div>
            <Button href="/" className="text-lg font-bold">
              Home
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
