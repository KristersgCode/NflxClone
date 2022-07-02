import Image from "next/image";

function InfoSection({ description, headLine, img }) {
  return (
    <div className="bg-black-custom flex h-[60vh] min-h-[400px] w-[100%] flex-col items-center justify-center border-b-8 border-zinc-800 lg:h-[48vh]">
      <div className="flex h-[80%] w-[80%] flex-col items-center gap-3 text-center lg:flex-row xl:max-w-7xl">
        <div className="flex flex-col lg:flex-col">
          <h1 className="info-section-h1">{headLine}</h1>
          <h2 className="info-section-h2">{description}</h2>
        </div>

        <div className="relative flex h-[90%] w-[100%]">
          <Image
            src={img}
            layout="fill"
            objectFit="contain"
            className="relative z-50"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
