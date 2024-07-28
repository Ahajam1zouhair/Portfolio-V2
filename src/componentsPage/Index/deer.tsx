import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

export default function Deer() {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <div>
      <p
        className={`text-xl w-11/12 text-center mt-10 ${
          value ? "text-black" : "text-white"
        }`}
      >
        Development Solutions Great Vision in Mobile and Web Technologies / WHY
        CHOOSE ME AS YOUR DEVELOPER As a developer, I specialize in crafting
        seamless experiences for both mobile and web platforms. My approach
        involves collaborating closely with clients to comprehend their
        objectives and gathering user feedback to pinpoint pain points and areas
        for enhancement. Utilizing robust coding practices and frameworks, I
        architect and develop scalable solutions that cater to diverse needs. My
        proficiency spans across the spectrum of front-end and back-end
        technologies, ensuring a comprehensive skill set to tackle any project.
        Let's build something remarkable together.
      </p>
    </div>
  );
}
