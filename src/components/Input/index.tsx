import type { InputHTMLAttributes, KeyboardEvent } from "react";

import * as s from "./styles";

type InputVariant = "default" | "filled" | "ghost";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

function handleEnterNavigation(event: KeyboardEvent<HTMLElement>) {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();

  const form = event.currentTarget.closest("form");

  if (!form) {
    return;
  }

  const focusableElements = Array.from(
    form.querySelectorAll<HTMLElement>("input, select, textarea, button")
  ).filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1
  );

  const currentIndex = focusableElements.indexOf(event.target as HTMLElement);

  const nextElement = focusableElements[currentIndex + 1];

  if (!nextElement) {
    form.requestSubmit();
  } else {
    nextElement?.focus();
  }
}

export function Input({ variant = "default", ...props }: InputProps) {
  return (
    <s.InputContainer
      $variant={variant}
      onKeyDown={handleEnterNavigation}
      {...props}
    />
  );
}
