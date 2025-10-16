import frame from "@/assets/images/Frame.png";
import Image from "next/image";

export const navLinks = [
  { text: "Videos", href: "/", id: 0 },
  { text: "Programme", href: "/", id: 1 },
  { text: "Live", href: "/", id: 2 },
  { text: "Lehrer:inne", href: "/", id: 3 },
  { text: "Yoga-magazin", href: "/", id: 4 },
  {
    text: (
      <>
        Academy{" "}
        <div>
          <Image src={frame} width={11} height={11} alt="" />
        </div>
      </>
    ),
    href: "/",
    id: 5,
  },
];
