import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import NavigationAction from "./navigationAction";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./navigationItem";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async () => {
  const profile = await currentProfile();
  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers?.map((server) => {
          return (
            <div className="md-4" key={server.id}>
              <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl ={server.imageUrl}/>

            </div>
          );
        })}
      </ScrollArea>
      <div className="pg-3 mt-autp flex item-center flex-col gap-y-4">
        <ModeToggle/>
        <UserButton afterSignOutUrl="/" appearance={{
          elements:{
            avatarBox:"h-[48px] w-[48px]"
          }
        }}/>
      </div>
    </div>
  );
};

export default NavigationSidebar;
