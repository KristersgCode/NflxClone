import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import InfoSectionStrangerThings from "../components/InfoSectionStrangerThings";
import InfoSectionFlipped from "../components/InfoSectionFlipped";
import { objFour, objOne, objThree, objTwo } from "../components/Data/Data";
import BgImage from "../img/mainPageBg.jpeg";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Head>
        <title>Netflix clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-100vh relative w-full">
        <div className="absolute z-50 h-full w-full shadow"></div>
        <Image
          src={BgImage}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />

        <Navbar />
        <Header />
      </div>
      <InfoSection {...objOne} />
      <InfoSectionStrangerThings {...objTwo} />
      <InfoSection {...objThree} />
      <InfoSectionFlipped {...objFour} />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
