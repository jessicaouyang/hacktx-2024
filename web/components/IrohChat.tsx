"use client";
import Image from "next/image";
import { ChatInput } from "./ui/chat/chat-input";
import { useState, useEffect } from "react";
import { useChat } from "ai/react";
import { motion } from "framer-motion"

const IrohChat = () => {
  // const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  
  const [animate, setAnimate] = useState(false);

  const { messages, input, handleInputChange, handleSubmit} = useChat();

  const handleSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!input.trim()) return;
      handleSubmit()
      setAnimate((prev) => !prev)
    }
  };

  return (
    <div className='flex flex-col h-full p-4'>
      <Image
        alt={"Iroh"}
        height={1000}
        width={1000}
        src={"/uncle-iroh-avatar.webp"}
        className='h-40 w-40 mx-auto'
      />

      {/* Messages area - using flex-1 to take remaining space */}
      <div className='flex-1 max-h-64 overflow-y-auto my-4 space-y-4'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.role === "assistant" && (
              <Image
                alt={"Iroh"}
                height={1000}
                width={1000}
                src={"/uncle-iroh-avatar.webp"}
                className='h-12 w-12 rounded-full mr-2'
              />
            )}
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
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

      <div className='rounded-2xl bg-[#AB7D4C] p-10 max-w-2xl mx-auto w-full mt-auto'>
        <div className='flex justify-between -mt-16 mb-2'>
          <motion.div
            animate={{ x: animate ? 0 : -50, y: animate ? 0 : -25}}
            transition ={{ease :"easeOut", duration: 2}}
          >
          <span className='block text-5xl'>🍵</span>
          </motion.div>
          <span className='block text-7xl -mt-4'>🫖</span>
          <motion.div
            animate={{ x: animate ? 50 : 0, y: animate ? -25 : 0}}
            transition ={{ease :"easeOut", duration: 2}}
          >
          <span className='block text-5xl'>🍵</span>
          </motion.div>
          
        </div>
        <ChatInput
          placeholder='Type a message...'
          className='bg-[#DEC5A1] border-none rounded-lg h-32 max-h-none text-amber-950 placeholder:text-amber-950/50 font-medium'
          value={input}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default IrohChat;
