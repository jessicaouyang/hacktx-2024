import IrohChat from "@/components/IrohChat";
import { getMessages } from "@/lib/db/queries";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const userId = (await auth()).userId!;
  const messages = await getMessages(userId);

  return (
    <div className="bg-[#FFECD1] h-screen flex flex-col gap-4">
      <div className=" bg-[#887357] rounded-b-3xl h-24"></div>
      <div className="flex-1">
        <IrohChat
          initialMessages={messages}
          userId={userId}
        />
      </div>
      <div className=" bg-[#738857] rounded-t-3xl h-16"></div>
    </div>
  );
}
