"use client";

import dynamic from "next/dynamic";
import React from "react";
import videoPreview from "@/public/images/video_preview.jpg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoSection = () => {
  return (
    <div className={"container videoPlayer"}>
      <ReactPlayer
        width={"100%"}
        height={545}
        loop
        light={<img src={videoPreview.src} alt="Thumbnail" />}
        url="https://youtu.be/LXb3EKWsInQ?si=eniOZO7ViI8UglRv"
      />
    </div>
  );
};

export default VideoSection;
