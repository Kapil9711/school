// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{
          showSpinner: false,
          speed: 800,
          minimum: 0.6,
          easing: "ease",
        }}
        shallowRouting
      />
    </>
  );
};

export default NProgressProvider;
