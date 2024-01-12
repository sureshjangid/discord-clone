import { ChannelIdPageProps } from "@/Types";
import ChatHeader from "@/components/chat/ChatHeader";
import { ChatMessage } from "@/components/chat/ChatMessage";
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
      <ChatMessage member={member} type="channel" name={channel.name} apiUrl="/api/messages" socketUrl="/api/socket/messages" socketQuery={{
        channelId:channel.id,
        serverId:channel.serverId
      }}
      chatId={channel.id} paramKey={"channelId"} paramValue={channel.id}/>
      <ChatInput apiUrl={'/api/socket/messages'} name={channel.name} query={{
        channelId:channel.id,
        serverId:channel.serverId
      }} type="channel"/>
    </div>
  );
};

export default ChannelIdPage;
