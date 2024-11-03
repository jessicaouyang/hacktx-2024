"use client";

import Image from "next/image";
import { ChatInput } from "./ui/chat/chat-input";
import { useCallback } from "react";
import { Message, useChat } from "ai/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const ChatHistory = ({ messages }: { messages: Message[] }) => {
  return (
    <Popover>
      <PopoverTrigger asChild disabled={messages.length === 0}>
        <Button disabled={messages.length === 0}>History</Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-2xl">
        <div className=" overflow-y-auto my-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <Image
                  alt={"Iroh"}
                  height={1000}
                  width={1000}
                  src={"/uncle-iroh-avatar.webp"}
                  className="h-12 w-12 rounded-full mr-2"
                />
              )}
              <div
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  message.role === "user"
                    ? "bg-[#AB7D4C] text-white ml-4"
                    : "bg-[#DEC5A1] text-amber-950"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const IrohChat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleSendMessage = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      handleSubmit(e);
      input.trim();
    },
    [input, handleSubmit]
  );

  const response = messages
    .filter((message) => message.role === "assistant")
    .at(-1);
  const sentMessage = messages
    .filter((message) => message.role === "user")
    .at(-1);

  return (
    <div className="flex flex-col h-full gap-10 p-4">
      <Image
        alt={"Iroh"}
        height={1000}
        width={1000}
        src={"/uncle-iroh-avatar.webp"}
        className="h-96 w-fit mx-auto"
      />
      {/* {response?.content} */}
      <div className="max-w-2xl mx-auto w-full mt-auto">
        <div
          className={`rounded-lg p-3 mb-12 mx-10 text-sm bg-[#DEC5A1] border-[1.5px] border-[#AB7D4C] text-amber-950 ${
            sentMessage ? "visible" : "invisible"
          }`}
        >
          {sentMessage?.content ?? "oops"}
        </div>
        <div className="rounded-2xl bg-[#AB7D4C] p-10 ">
          <div className="flex justify-between -mt-16 mb-2">
            <span className="block text-5xl">🍵</span>
            <span className="block text-7xl -mt-4">🫖</span>
            <span className="block text-5xl">🍵</span>
          </div>
          <ChatInput
            placeholder="Type a message..."
            className="bg-[#DEC5A1] border-none rounded-lg h-32 max-h-none text-amber-950 placeholder:text-amber-950/50 font-medium mb-4"
            value={input}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !!input) {
                handleSendMessage(e);
              }
            }}
          />
          <ChatHistory messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default IrohChat;
