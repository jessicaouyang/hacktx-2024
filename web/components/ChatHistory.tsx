import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Message } from "ai/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ChatHistory({ messages }: { messages: Message[] }) {
  const renderedMessages = [
    {
      id: "first_question",
      role: "assistant",
      content:
        "How is your spirit today? Perhaps a listening ear can help calm the waters of your mind.",
    } satisfies Message,
    ...messages,
  ];

  return (
    <Sheet>
      <SheetTrigger
        asChild
        disabled={messages.length === 0}
        className="mx-auto block"
      >
        <Button disabled={messages.length === 0}>History</Button>
      </SheetTrigger>
      <SheetContent className="rounded-r-xl overflow-y-auto" side={"left"}>
        <SheetHeader>
          <SheetTitle>History</SheetTitle>
          <SheetDescription>
            Reflection reveals wisdom in the ripples of our past conversations.
          </SheetDescription>
        </SheetHeader>
        <div className=" overflow-y-auto my-4 space-y-4">
          {renderedMessages.map((message) => (
            <div
              key={message.id}
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
      </SheetContent>
    </Sheet>
  );
}
