"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function RavdanBanner() {
  return (
    <section className="w-full flex justify-center bg-primary">
      <Container>
        <Link href="/product/5" className="block">
          <Image
            src="/ravdan.svg"
            alt="Ravdan Banner"
            width={1480}
            height={424}
            priority
            className="mx-auto cursor-pointer transition duration-300 hover:drop-shadow-lg"
          />
        </Link>
      </Container>
    </section>
  );
}
