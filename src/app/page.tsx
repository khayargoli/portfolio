

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
//import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";

export const siteConfig = {
  name: "Biswas Khayargoli",
  description: "I am a Passionate Software Developer",
  ogImage: "",
  url: "",
}
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-auto flex flex-col justify-start gap-4">
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
       {/* <DownLoadResumeBtn/> */}
      </div>
      {/* RIGHT SIDE image  */}
      <div className="h-full w-[37%] relative block max-lg:hidden">
       
      {/* IMAGE  */}
        <HeroImage />
      </div>
     
      {/* GITHUB BUTTON  <GithubBtn/>  */}
    
      </>
  );
}
