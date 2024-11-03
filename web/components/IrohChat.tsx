"use client";

import { ChatInput } from "./ui/chat/chat-input";
import { useEffect, useState } from "react";
import { Message, useChat } from "ai/react";
import ChatHistory from "@/components/ChatHistory";
import IrohImage from "@/components/IrohImage";
import { motion } from "framer-motion";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { addMessage } from "@/lib/db/queries";
import { nanoid } from "ai";

const IrohChat = ({
  initialMessages,
  userId,
}: {
  initialMessages: Message[];
  userId: string;
}) => {
  const [animate, setAnimate] = useState(false);

  const { messages, input,setInput, handleInputChange, handleSubmit } = useChat({
    initialMessages,
    onFinish(message) {
      addMessage(message, userId).then((res) => {}).catch((err) => {});
    },
  });

  const response = messages
    .filter((message) => message.role === "assistant")
    .at(-1);
  const sentMessage = messages
    .filter((message) => message.role === "user")
    .at(-1);

  return (
    <SignedIn>
      <UserButton />
      <div className="flex flex-col h-full gap-10 p-4">
        <IrohImage response={response} />
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
              <motion.div
                animate={{
                  x: animate ? 0 : -50,
                  y: animate ? 0 : -25,
                  rotate: animate ? 0 : -20,
                }}
                transition={{ ease: "easeOut", duration: 3 }}
              >
                <span className="block text-5xl">🍵</span>
              </motion.div>
              <span className="block text-7xl -mt-4">🫖</span>
              <motion.div
                animate={{
                  x: animate ? 50 : 0,
                  y: animate ? -25 : 0,
                  rotate: animate ? 20 : 0,
                }}
                transition={{ ease: "easeOut", duration: 3 }}
              >
                <span className="block text-5xl">🍵</span>
              </motion.div>
            </div>
            <ChatInput
              placeholder="Share your troubles, young one. What weighs upon your heart?..."
              className="bg-[#DEC5A1] border-none rounded-lg h-32 max-h-none text-amber-950 focus-visible:ring-0 placeholder:text-amber-950/50 font-medium mb-4"
              value={input}
              onChange={(e) => handleInputChange(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !!input) {
                  handleSubmit(e);
                  setInput("")
                  setAnimate((prev) => !prev);
                  addMessage({
                    id: nanoid(),
                    role: "user",
                    content: input,
                    createdAt: new Date(),
                  }, userId).then((res) => {}).catch((err) => {});
                }
              }}
            />
            <ChatHistory messages={messages} />
          </div>
        </div>
      </div>
    </SignedIn>
  );
};

export default IrohChat;
