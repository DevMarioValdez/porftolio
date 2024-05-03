import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import Mario from "../global/mario.png";

const ProfilePresentation = () => {
    const TextAnimated = () => {
        return (
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Developer",
                    4000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Android Developer",
                    4000,
                    "Web Developer",
                    4000,
                    "Backend Developer",
                    4000,
                    "Full Stack Developer",
                ]}
                wrapper="h3"
                speed={50}
                style={{
                    fontSize: "1em",
                    display: "inline-block",
                    color: "rgb(49 196 141)",
                }}
                repeat={Infinity}
            />
        );
    };

    return (
        <section id="profile" className="min-h-screen">
            <div className="text-center">
                <h2 className="text-5xl py-2 text-green-600 font-medium dark:text-green-400 md:text-6xl">
                    Mario Valdez
                </h2>
                <h3 className="text-6xl py-2 md:text-3xl">
                    I'm {TextAnimated()}
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200  md:text-xl max-w-lg mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, neque autem, odit consequuntur dolor, reiciendis
                    voluptate labore laudantium nemo eius excepturi nesciunt
                    sequi fugit rem iure natus. Architecto, necessitatibus
                    cumque?
                </p>
                <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <AiFillGithub />
                    <AiFillLinkedin />
                </div>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <img
                    src={Mario}
                    className="object-cover w-full h-full"
                    alt="Profile"
                />
            </div>
        </section>
    );
};

export default ProfilePresentation;
