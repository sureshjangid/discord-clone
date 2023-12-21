"use client";
import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/createServerModal";
import { InviteModal } from "../modals/inviteModal";
import { EditServerModal } from "../modals/editServerModal";
import { MembersModal } from "../modals/membersModal";
import { CreateChaneelModal } from "../modals/createChannelModal";
import { LeaveModal } from "../modals/leaveServer-modal";
import { DeleteServerModal } from "../modals/deleteServer-modal copy";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <CreateServerModal />
      <InviteModal/>
      <EditServerModal/>
      <MembersModal/>
      <CreateChaneelModal/>
      <LeaveModal/>
      <DeleteServerModal/>
    </>
  );
};
