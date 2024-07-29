import logo from "../../public/pp.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <div >
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
          className="rounded-full"
        />
        </div>
    )
}
export default HeroImage