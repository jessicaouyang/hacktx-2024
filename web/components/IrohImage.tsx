import { Message } from "ai/react";
import Image from "next/image";

export default function IrohImage({ response }: { response?: Message }) {
  return (
    <div className="relative h-96 w-96 mx-auto bg-[url('/uncle-iroh-avatar.webp')] bg-contain bg-no-repeat bg-center">
      <div className="absolute -right-80 w-96 bottom-1/2 bg-white border-[1.5px] border-[#AB7D4C] rounded-3xl rounded-bl-sm p-3 max-h-64 overflow-y-scroll">
        {response?.content ??
          "How is your spirit today? Perhaps a listening ear can help calm the waters of your mind."}
      </div>
    </div>
  );
}
