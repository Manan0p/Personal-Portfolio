import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 w-full border-b z-50 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className=" font-semibold text-lg tracking-wide">
              Manan Lall
            </span>
          </div>


          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" href="/" className="text-md">
              Home
            </Button>
            <Button variant="ghost" href="/" className="text-md">
              Projects
            </Button>
            <Button variant="ghost" href="/" className="text-md">
              Blog
            </Button>
            <Button variant="ghost" href="/" className="text-md">
              About
            </Button>
            <Button variant="ghost" href="/" className="text-md">
              Contact
            </Button>
            <ModeToggle />
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div>
            Building Intelligent <br/> & Scalable Systems
          </div>
        </section>
      </main>
    </div>
  );
}
