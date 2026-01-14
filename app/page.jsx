import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 w-full border-b z-50 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
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
