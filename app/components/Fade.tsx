import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

interface FadeProps {
  children: ReactNode;
  showAlert: boolean;
}

export default function Fade({ children, showAlert = false }: FadeProps) {
  return (
    <Transition
      show={showAlert}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
