import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Navlink } from "../elements/navlink";

const ANGEBOTE = "/angebote";

const REFERENZEN = "/referenzen";
const FAQ = "/faq";
const KONTAKT = "/kontakt";

export const Header = () => {
  const router = useRouter();

  const isActive = (route: string) => router.pathname === route;

  return (
    <div className="w-full flex justify-between bg-darkblue py-6 px-8">
      <Link href="/">
        <a>
          <span className="text-5xl font-black text-gold transition-opacity hover:opacity-80">
            NSW
          </span>
        </a>
      </Link>
      <nav className="flex items-center gap-8">
        <Navlink active={isActive(ANGEBOTE)} href={ANGEBOTE}>
          Angebote
        </Navlink>
        <Navlink active={isActive(REFERENZEN)} href={REFERENZEN}>
          Referenzen
        </Navlink>
        <Navlink active={isActive(FAQ)} href={FAQ}>
          FAQ
        </Navlink>
        <Navlink active={isActive(KONTAKT)} href={KONTAKT}>
          Kontakt
        </Navlink>
      </nav>
    </div>
  );
};
