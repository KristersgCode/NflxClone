import Image from "next/image";
import DownloadContPicture from "../img/boxshot.png";
import DownloadIcon from "../img/download-icon.gif";

function InfoSection({ description, headLine, img }) {
  return (
    <div className="bg-black-custom flex h-[60vh] min-h-[400px] w-[100%] flex-col items-center justify-center border-b-8 border-zinc-800 lg:h-[48vh] lg:flex-row-reverse">
      {/* Container for picture and text */}
      <div
        id="flexi"
        className="flex h-[80%] w-[80%] flex-col items-center gap-3 text-center lg:flex-row xl:max-w-7xl"
      >
        <div className="b flex flex-col lg:flex-col">
          <h1 className="info-section-h1">{headLine}</h1>
          <h2 className="info-section-h2">{description}</h2>
        </div>

        {/* Picture container */}
        <div className="a relative flex h-full w-full justify-center">
          {/* donwload container */}
          <div className="bg-black-custom absolute bottom-5 z-50 flex h-[80px] w-[65%] items-center rounded-xl border-2 border-zinc-600 sm:w-[35vh] lg:mt-36 lg:h-[100px] lg:max-w-[65%] xs:w-[250px]">
            <div className="flex h-[80%] w-full items-center ">
              {/* Image container */}
              <div className="relative ml-3 flex h-[100%] w-[60px] items-center justify-between">
                <Image
                  src={DownloadContPicture}
                  layout="fill"
                  objectFit="contain"
                  alt="Thumbnail DVD"
                />
              </div>
              <div className="ml-4 flex w-full items-center justify-between">
                <p>Downloading...</p>
                <div className="relative flex h-12 w-12 bg-white">
                  <Image
                    src={DownloadIcon}
                    layout="fill"
                    objectFit="contain"
                    alt="download icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <Image
            src={img}
            layout="fill"
            objectFit="contain"
            alt="stranger things image"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
