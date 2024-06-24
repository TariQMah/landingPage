"use client";

import dynamic from "next/dynamic";
import React from "react";
import videoPreview from "@/public/images/video_preview.jpg";
import styles from "./videoSection.module.css";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSection = () => {
  return (
    <div className={`container ${styles.responsivePlayer}`}>
      <ReactPlayer
        width="100%"
        height="100%"
        playIcon={
          <div className={styles.playIcon}>
            <PlayIcon fill="#8b2351" />
          </div>
        }
        loop
        light={
          <Image
            src={videoPreview}
            className={styles.videoImage}
            alt="Thumbnail"
          />
        }
        url="https://youtu.be/LXb3EKWsInQ?si=eniOZO7ViI8UglRv"
      />
    </div>
  );
};

export default VideoSection;
