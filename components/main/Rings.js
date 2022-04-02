function Rings() {
  return (
    <div className="opacity-25 flex absolute top-0 items-center h-screen animate-pulse">
      <div className="scale-125 fixed -right-[16rem] h-[32rem] w-[32rem] border-2 border-white rounded-full "></div>
      <div className="scale-125 fixed -right-[20rem] h-[40rem] w-[40rem] border-2 border-white rounded-full "></div>
      <div className="scale-125 fixed -right-[24rem] h-[48rem] w-[48rem] border-2 border-white rounded-full "></div>
      <div className="scale-125 fixed -right-[28rem] h-[56rem] w-[56rem] border-2 border-white rounded-full animate-ping"></div>
    </div>
  );
}

export default Rings;
