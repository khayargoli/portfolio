import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import Link from "next/link";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Video Game" },
    { hobby: "Chess" },
    { hobby: "Yoga | Fitness" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Seasoned Web and<br /> Mobile Developer
        </Heading>

        ➡️💻 Front-end Development: Next.js, React, HTML/CSS, Tailwind, Zustand, Angular, TypeScript <br />
        ➡️📱 Flutter, Dart, Bloc, Android (Java) <br />
        ➡️ Over 8+ Years of Experience <br />
        ➡️ Committed Full-Time Freelancer, Available Over 40 Hours Per Week <br />
        ➡️ Passionate Problem Solver and Innovative Thinker <br />
        <br />
        <p className=" font-poppins text-xl w-full md:w-[80%] text-primary max-sm:text-lg text-justify">

          👋 Hey, there!
          <br />
          <br />
          As a seasoned software engineer with a passion for developing both web and mobile applications, I bring to the table 8+ years of rich, hands-on experience in this dynamic field. <br /><br />My expertise is particularly strong in React, Next.js, Angular, Tailwind CSS, TypeScript / JavaScript, and Flutter, skills that I have honed through extensive practice and continuous learning.
          I have collaborated on various projects with clients globally, including <Link href="https://www.woerk.app/"><b>WÖrk</b></Link> (Germany), <Link href="https://baako.com/en/"><b>BAAKO GmbH</b></Link> (Germany), <b>Houm Technology</b> (India), <Link href="https://blueskysoftware.co.uk/"><b>BlueSkySoftwares</b></Link> (UK), <b>LAF® Space</b> (UK) and <Link href="https://www.keybalance.dk/"><b>KeyBalance</b></Link> (Denmark).
          <br />
          <br />
          It is important to me to build long term relationships with clients. I am flexible with my working hours, and I am happy to work closely with any existing freelancers you work with.


          <br /> <br />


        </p>
      </div>
      <br />
      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
      {/* <div className="block">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default page;
