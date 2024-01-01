import {
  Channel,
  ChannelType,
  Member,
  MemberRole,
  Profile,
  Server,
} from "@prisma/client";

export interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "messageFile" | "serverImage";
}

export interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

export interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer"
  | "deleteChannel"
  | "editChannel";

export interface ModalData {
  server?: Server;
  channelType?: ChannelType;
  channel?: Channel;
}
export interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export interface ServerSidebarProps {
  serverId: string;
}

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
export interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

export interface UserAvatarProps {
  src?: string;
  className?: string;
}

export interface ServerSearchProps {
  data: {
    label: string;
    type: "channel" | "member";
    data:
      | {
          icon: React.ReactNode;
          name: string;
          id: string;
        }[]
      | undefined;
  }[];
}

export interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

export interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}
export interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

export interface ServerIdPageProps {
  params: { serverId: string };
}

