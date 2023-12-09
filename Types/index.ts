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

export type ModalType = "createServer";
export interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export interface ServerSidebarProps {
  serverId: string;
}
