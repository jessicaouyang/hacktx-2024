import IrohChat from "@/components/IrohChat";

export default function Home() {
  return (
    <div className='bg-[#FFECD1] h-screen flex flex-col gap-4'>
      <div className=' bg-[#887357] rounded-b-3xl h-24'></div>
      <div className='flex-1'>
        <IrohChat />
      </div>
      <div className=' bg-[#738857] rounded-t-3xl h-16'></div>
    </div>
  );
}
