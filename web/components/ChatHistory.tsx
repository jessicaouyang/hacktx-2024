import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Message } from "ai/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ChatHistory({ messages }: { messages: Message[] }) {
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
}
