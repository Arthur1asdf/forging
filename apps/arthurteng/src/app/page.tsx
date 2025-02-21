"use client";

import React from "react";

export default function Home() {
  // Function to play audio with explicit typing
  const playSound = () => {
    const audio = new Audio("/audio/im-jaking-it-made-with-Voicemod.mp3");
    audio.loop = true;
    void audio.play();
  };

  return (
    <div>
      <h1>Hello, World from Arthur's App!</h1>
      <p>Welcome to my custom Next.js page inside the monorepo!</p>
      <button onClick={playSound} style={{ padding: "10px", fontSize: "16px" }}>
        Play Sound
      </button>
    </div>
  );
}
