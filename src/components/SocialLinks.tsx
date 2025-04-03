import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Upwork from "public/upwork.png";

const SocialLinks = () => {
  const links = [
    // { name: "Linkedin", link: "https://www.linkedin.com/in/biswas-khayargoli-3311biswas", icon: <Linkedin /> },
    { name: "Upwork", link: "https://www.upwork.com/freelancers/~01459b52cca83e532c", icon: <Image src={Upwork} alt="Upwork" width={60} height={60} /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};
export default SocialLinks;
