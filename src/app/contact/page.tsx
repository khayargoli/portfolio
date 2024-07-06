import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";;

import {
  Phone,
  Mail
} from "lucide-react";

const contactPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Phone className="h-5 w-5" />
        Contact
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>
        {/* <div className="h-auto w-full flex justify-center items-center">
        <ContactForm/>
        </div> */}
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I am available for freelance work. Connect with me via email or phone.
          <br />
          <br />
          {/* <div className="flex">
            <Phone /> <span className="ml-5 mb-2">+977 - 9860308415</span>
          </div> */}

          <div className="flex">
            <Mail /><span className="ml-5"><a href="mailto: biswash.khayargoli@gmail.com" />biswash.khayargoli@gmail.com</span>
          </div>
        </p>

      </div>
    </div>
  );
};

export default contactPage;
