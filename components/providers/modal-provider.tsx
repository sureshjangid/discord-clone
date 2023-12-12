"use client";
import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/createServerModal";
import { InviteModal } from "../modals/inviteModal";
import { EditServerModal } from "../modals/editServerModal";

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
    </>
  );
};
