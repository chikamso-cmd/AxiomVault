import React from "react";

export default function Onboarding() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeKJC59rOQzt9Za3hpYg6KYqV2nfgRoeB8s1aKd7IO88s_gDw/viewform?usp=publish-editor";
  const introText =
    "Welcome! To help us persornalise your experience, please complete this quick onboarding questionaire";

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Onboarding Questionaire
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">{introText}</p>
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white rounded bg-axiom-red hover:bg-[#A6470F] transition px-8 py-3 rounded-lg font-medium text-white"
      >
        Open Onboarding Form
      </a>
    </div>
  );
}
