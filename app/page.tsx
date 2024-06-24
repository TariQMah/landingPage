import HeroSection from "./_components/HeroSlider";
import AboutSection from "./_components/AboutSection";
import styles from "./page.module.css";
import VideoSection from "./_components/VideoSection";
import KeyPointsSection from "./_components/KeyPointSection";
import ServiceSection from "./_components/ServiceSection";
import ContactSection from "./_components/ContactSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <KeyPointsSection />
      <ServiceSection />
      <ContactSection />

      <Toaster />
    </main>
  );
}
