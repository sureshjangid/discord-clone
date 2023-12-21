"use client";

import { ServerSearchProps } from "@/Types";
import { Search } from "lucide-react";

const ServerSearch = ({ data }: ServerSearchProps) => {
  return (
    <>
      <button className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zine-700/10 dark:hover:bg-zine-700/50 transition">
        <Search className="w-4 h-4 text-zine-500 dark:text-zine-400" />
        <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          {" "}
          Search
        </p>
      </button>
    </>
  );
};

export default ServerSearch;
