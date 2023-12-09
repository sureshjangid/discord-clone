"use client";

import { ServerHeaderProps } from "@/Types";
import { MemberRole } from "@prisma/client";
import { DropdownMenu } from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.AMDIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/100 dark:hover:bg-zinc-700/50 transition ">
            {server.name}
            <ChevronDown className="h-5 w-5 ml-auto"/>
        </button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ServerHeader;
