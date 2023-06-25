"use client";

import { Button } from "./button";
import { Input } from "./input";
import { Search } from "lucide-react";

export function SearchBox() {
   return (
      <form className="relative flex w-full min-w-[200px] max-w-[500px] items-center">
         <Input type="text" className="w-full pr-14" />
         <Button variant="ghost" className="absolute right-0 cursor-pointer w-12" type="submit">
            <Search className="w-full h-full"/>
         </Button>
      </form>
   );
}
