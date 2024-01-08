import { ChannelIdPageProps } from "@/Types";
import ChatHeader from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/chatInput";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  });
  if (!channel || !member) return redirect("/");
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        type="channel"
        name={channel?.name}
        serverId={channel.serverId}
      />
      <div className="flex-1">Fiture Messte</div>
      <ChatInput apiUrl={'/api/socket/message'} name={channel.name} query={{
        channelId:channel.id,
        server:channel.serverId
      }} type="channel"/>
    </div>
  );
};

export default ChannelIdPage;
