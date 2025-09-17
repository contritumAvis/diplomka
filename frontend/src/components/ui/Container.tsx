// frontend/src/components/ui/Container.tsx
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <section className={`px-4 md:px-24 lg:px-28`}>
      <div className={`max-w-[1440px] mx-auto ${className}`}>
        {children}
      </div>
    </section>
  );
}
