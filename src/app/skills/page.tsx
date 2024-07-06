import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/java-script.png'
import ts from '../../../public/typescript.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import tailwind from '../../../public/tailwindcss.png'
import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
import android from '../../../public/android.png'
import flutter from '../../../public/flutter-logo.png'
const skillPage = () => {

  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "flutter", img: flutter},
    { alt: "android", img: android}
  ]
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "scss", img: scss },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
  ]


  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <br />
        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          <b>— Front-End Development:</b> Proficient in HTML, CSS, JavaScript, and TypeScript, with extensive experience using frameworks like React, Angular, and Next.js. I excel in creating user-friendly interfaces and ensuring seamless user experiences.
          <br /><br />
          <b>— Mobile App Development:</b> Skilled in Flutter for cross-platform app development, enabling the creation of visually appealing and functionally robust mobile applications for both iOS and Android.
          <br /><br />
          <b>—Data Analysis and Visualization:</b> Competent in Python and R for data analysis and visualization, providing insightful data-driven solutions.
         
        </p>
        <br />
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
