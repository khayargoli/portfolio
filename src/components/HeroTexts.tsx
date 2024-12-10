import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h2 className="font-poppins text-6xl max-sm:text-xl  max-sm:text-3xl" >Hello!</h2>
      <h3 className="font-poppins text-2xl max-sm:text-xl" >My name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
       Biswas Khayargoli<br />
      </h1>
        <TextRotator/>
     
    </>
  );
};
export default HeroTexts
