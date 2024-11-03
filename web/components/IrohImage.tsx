import { Message } from "ai/react";
import Image from "next/image";

export default function IrohImage({ response }: { response?: Message }) {
  return (
    <>
    <div  className="relative h-96 w-96 mx-auto bg-[url('/uncle-iroh-avatar.webp')] bg-contain bg-no-repeat bg-center">
      <div className="absolute -right-80 w-96 bottom-1/2">
      {response?.content}
      </div>
    </div>
    </>
  );
}
