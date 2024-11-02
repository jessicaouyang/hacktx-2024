"use client";
import Image from "next/image";
import { ChatInput } from "./ui/chat/chat-input";

const IrohChat = () => {
  return (
    <div className='flex flex-col h-full p-4'>
      <Image
        alt={"Iroh"}
        height={1000}
        width={1000}
        src={"/uncle-iroh-avatar.webp"}
        className='h-96 w-96 mx-auto'
      />
      <div className='rounded-2xl mt-auto bg-[#AB7D4C] p-10 max-w-2xl mx-auto w-full'>
        <div className='flex justify-between -mt-16 mb-2'>
          <span className='block text-5xl'>🍵</span>
          <span className='block text-7xl -mt-4'>🫖</span>
          <span className='block text-5xl'>🍵</span>
        </div>
        <ChatInput
          placeholder='Type a message...'
          className='bg-[#DEC5A1] border-none rounded-lg h-32 max-h-none text-amber-950 placeholder:text-amber-950/50 font-medium'
          //   value={inputValue}
          //   onChange={(e) => setInputValue(e.target.value)}
          //   onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default IrohChat;
