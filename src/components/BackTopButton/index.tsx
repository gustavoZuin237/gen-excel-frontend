import * as s from "./styles";

import { ArrowUpIcon } from "@phosphor-icons/react";

type Props = {
  scrollRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
};

export function BackTopButton({ scrollRef, visible }: Props) {
  function scrollToTop() {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <s.BackTopButton $visible={visible} onClick={scrollToTop}>
      <ArrowUpIcon size={25} weight="bold" />
    </s.BackTopButton>
  );
}
