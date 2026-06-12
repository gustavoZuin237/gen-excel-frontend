import { useEffect, useRef, useState } from "react";

import { Outlet } from "react-router-dom";

import * as s from "./styles";

import { Navbar } from "@components/Navbar";
import { BackTopButton } from "@components/BackTopButton";

export function RootLayout() {
  const [visible, setVisible] = useState(false);

  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (!element) return;

    const handleScroll = () => {
      setVisible(element.scrollTop > 800);
    };

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [contentRef]);

  return (
    <s.LayoutContainer>
      <Navbar />

      <s.Content ref={contentRef}>
        <Outlet />
      </s.Content>

      <BackTopButton visible={visible} scrollRef={contentRef} />
    </s.LayoutContainer>
  );
}
