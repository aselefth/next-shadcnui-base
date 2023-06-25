import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { Home } from "lucide-react";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "./ui/sheet";
import { Button } from "./ui/button";
import { SearchBox } from "./ui/search-box";

const links = [
   ["Home", "/"],
   ["Documentation", "/docs"],
   ["Info", "/info"]
];

export function Navigation() {
   return (
      <header className="fixed left-0 right-0 top-0 z-40 w-full border-b bg-inherit">
         <nav className="container flex gap-4 items-center justify-between py-2">
            <div className="flex items-center space-x-4">
               <div>
                  <Link
                     href={"/"}
                     className="hidden font-semibold sm:flex sm:items-center sm:gap-2"
                  >
                     <Home />
                     <span>MySite</span>
                  </Link>
                  <div className="inline sm:hidden">
                     <Sheet>
                        <SheetTrigger asChild>
                           <Button variant="ghost">
                              <Home />
                           </Button>
                        </SheetTrigger>
                        <SheetContent side={"left"}>
                           <SheetHeader>
                              <SheetTitle>
                                 <SheetClose asChild>
                                    <Link
                                       href="/"
                                       className="flex items-center gap-2 font-semibold"
                                    >
                                       <Home />
                                       <span>MySite</span>
                                    </Link>
                                 </SheetClose>
                              </SheetTitle>
                           </SheetHeader>
                           <div className="grid gap-4 py-4">
                              {links.map((link) => (
                                 <SheetClose asChild>
                                    <Link
                                       key={link[0]}
                                       href={link[1]}
                                       className="text-ghost-foreground hover:text-primary active:text-primary"
                                    >
                                       {link[0]}
                                    </Link>
                                 </SheetClose>
                              ))}
                           </div>
                        </SheetContent>
                     </Sheet>
                  </div>
               </div>
               <div className="flex space-x-4">
                  {links.map((link) => (
                     <Link
                        key={link[0]}
                        href={link[1]}
                        className="hidden text-ghost-foreground hover:text-primary active:text-primary sm:inline"
                     >
                        {link[0]}
                     </Link>
                  ))}
               </div>
            </div>
            <SearchBox />
            <ThemeToggle />
         </nav>
      </header>
   );
}
