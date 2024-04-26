export const InfoNotFound = ({p1, p2, imgUrl}) => {
  return (
    <div className="p-5 flex flex-col justify-center items-center text-center">
      <p className="font-bold text-[6vmin] lg:text-[2rem] md:text-[2rem] sm:text-[2rem]">{p1}</p>
      <p className="text-[4vmin] lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.5rem]">{p2}</p>
      <img className="mt-[5rem] w-[55%] lg:w-[15rem] md:w-[15rem] sm:w-[15rem]" src={imgUrl} />
    </div>
  );
}
