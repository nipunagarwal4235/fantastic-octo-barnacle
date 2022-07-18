import Head from 'next/head'

import NavBar from "../Components/NavBar.jsx/NavBar";
import Announcement from "../Components/Announcement";
import AmongUs from "../Components/AmongUs";
import AboutUs from "../Components/AboutUs";
import Games from "../Components/Games";
import VideoGallery from "../Components/VideoGallery";
import ContactUs from "../Components/ContactUs";
import SocialMedia from '../Components/SocialMedia'


export default function Home() {
  return (
    <>
          <Head>
        <title>Sierra 1UP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar></NavBar>
      <Announcement></Announcement>
      <AmongUs />
      <AboutUs/>
      <Games />
      <VideoGallery/>
      <ContactUs/>
      <SocialMedia/>
    </>
  );
}
