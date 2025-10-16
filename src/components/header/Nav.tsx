import Image from "next/image";
import logo from "@/assets/images/12 1.png";
import button from "@/assets/images/button.png";

import { navLinks } from "@/data/nav";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="w-full h-[87px] flex items-center flex-row justify-center">
      <Image src={logo} width={71} height={71} alt="logo" />

      <ul className="md:flex hidden ml-10 gap-5 font-semibold text-[13.93px] text-[#555547]">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.href} className="flex items-center gap-2">
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>

      <Image src={button} width={30} height={30} alt="lupa" className="ml-20" />

      <Link
        href={"/"}
        className="px-[17px] py-[6px] border-2 border-[#009090] rounded-4xl text-[12px] text-[#009090] ml-5
        font-semibold"
      >
        Login
      </Link>
    </nav>
  );
};
