"use client";

import { ChatMessageProps } from "@/Types";
import { ChatWelcome } from "./ChatWelcome";

export const ChatMessage = ({apiUrl,chatId,member,name,paramKey,paramValue,socketQuery,socketUrl,type}:ChatMessageProps)=>{
    return <>
    <div className="flex-1 flex flex-col py-4 overflow-y-auto">
        <div className="flex-1">
            <ChatWelcome type={type} name={name}/></div></div></>
}