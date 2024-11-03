import { Message } from "ai/react";
import Image from "next/image";

export default function IrohImage({ response }: { response?: Message }) {
  return (
    <>
      <Image
        alt={"Iroh"}
        height={1000}
        width={1000}
        src={"/uncle-iroh-avatar.webp"}
        className="h-96 w-fit mx-auto"
      />
      {response?.content}
    </>
  );
}
