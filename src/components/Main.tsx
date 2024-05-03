import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Mario from "../global/mario.png";

interface IProps {
    handleDarkMode: () => void;
}
const Main = ({ handleDarkMode }: IProps) => {
    return (
        <main className=" bg-white dark:bg-gray-900 dark:text-gray-100 px-10 md:px-20 lg:px-40">
            <section className="min-h-screen">
                <nav className="py-10 mb-12 flex justify-between">
                    <h1 className="text-2xl font-bold">developedby mariodev</h1>
                    <ul className="flex items-center">
                        <li>
                            <BsFillMoonStarsFill
                                className="cursor-pointer text-2xl"
                                onClick={handleDarkMode}
                            />
                        </li>
                        <li>
                            <a
                                href="/"
                                className="bg-gradient-to-r from-green-600 to-green-400 bg-green-400 text-white px-4 py-2 rounded-md ml-8"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="text-center">
                    <h2 className="text-5xl py-2 text-green-600 font-medium dark:text-green-400 md:text-6xl">
                        Mario Valdez
                    </h2>
                    <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>
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
            <section>
                <div>
                    <h3 className="text-3xl py-1">Projects</h3>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti, nulla tempore magnam itaque vitae hic
                        necessitatibus velit, minus modi nostrum nobis maxime.
                        Quae asperiores reiciendis nobis sapiente ratione velit
                        similique!
                    </p>
                </div>
                <div className="lg:flex gap-10">
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-700 text-gray-100 dark:bg-white dark:text-gray-700 flex-1">
                        <img src={Mario} alt="" width={100} height={100} />
                        <h3 className="text-2xl font-light pt-8 pb-2">
                            Mario Valdez
                        </h3>
                        <p className="py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti, nulla tempore magnam itaque vitae
                            hic necessitatibus velit, minus modi nostrum nobis
                            maxime. Quae asperiores reiciendis nobis sapiente
                            ratione velit similique!
                        </p>
                        <h4 className="py-4 dark:text-teal-600  text-green-400 text-xl">
                            Technologies
                        </h4>
                        <p className="dark:text-gray-800 text-gray-100 py-1">
                            HTML
                        </p>
                        <p className="dark:text-gray-800  text-gray-100 py-1">
                            CSS
                        </p>
                        <p className="dark:text-gray-800 text-gray-100 py-1">
                            JavaScript
                        </p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-700 text-gray-100 dark:bg-white dark:text-gray-700 flex-1">
                        <img src={Mario} alt="" width={100} height={100} />
                        <h3 className="text-2xl font-light pt-8 pb-2">
                            Mario Valdez
                        </h3>
                        <p className="py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti, nulla tempore magnam itaque vitae
                            hic necessitatibus velit, minus modi nostrum nobis
                            maxime. Quae asperiores reiciendis nobis sapiente
                            ratione velit similique!
                        </p>
                        <h4 className="py-4 dark:text-teal-600  text-green-400 text-xl">
                            Technologies
                        </h4>
                        <p className="dark:text-gray-800 text-gray-100 py-1">
                            HTML
                        </p>
                        <p className="dark:text-gray-800  text-gray-100 py-1">
                            CSS
                        </p>
                        <p className="dark:text-gray-800 text-gray-100 py-1">
                            JavaScript
                        </p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-700 text-gray-100 dark:bg-white dark:text-gray-700 flex-1">
                        <img src={Mario} alt="" width={100} height={100} />
                        <h3 className="text-2xl font-light pt-8 pb-2">
                            Mario Valdez
                        </h3>
                        <p className="py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti, nulla tempore magnam itaque vitae
                            hic necessitatibus velit, minus modi nostrum nobis
                            maxime. Quae asperiores reiciendis nobis sapiente
                            ratione velit similique!
                        </p>
                        <h4 className="py-4 dark:text-teal-600  text-green-400 text-xl">
                            Technologies
                        </h4>
                        <p className="dark:text-gray-800 text-gray-100 py-1">
                            HTML
                        </p>
                        <p className="dark:text-gray-800  text-gray-100 py-1">
                            CSS
                        </p>
                        <p className="dark:text-gray-800 text-gray-100 py-1">
                            JavaScript
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h3 className="text-3xl py-1 dark:text-white ">
                        Portofolio
                    </h3>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        Since the beginning of my journey as a freelance
                        designer and developer, I've done remote work for
                        <span className="text-teal-500"> agencies </span>
                        consulted for{" "}
                        <span className="text-teal-500">startups </span>
                        and collaborated with talanted people to create digital
                        products for both business and consumer use.
                    </p>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        I offer from a wide range of services, including brand
                        design, programming and teaching.
                    </p>
                </div>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                    <div className="basis-1/3 flex-1 ">
                        <img
                            className="rounded-lg object-cover layout-responsive"
                            width={"100%"}
                            height={"100%"}
                            src={Mario}
                        />
                    </div>
                    <div className="basis-1/3 flex-1 ">
                        <img
                            className="rounded-lg object-cover layout-responsive"
                            width={"100%"}
                            height={"100%"}
                            src={Mario}
                        />
                    </div>
                    <div className="basis-1/3 flex-1 ">
                        <img
                            className="rounded-lg object-cover layout-responsive"
                            width={"100%"}
                            height={"100%"}
                            src={Mario}
                        />
                    </div>
                    <div className="basis-1/3 flex-1 ">
                        <img
                            className="rounded-lg object-cover layout-responsive"
                            width={"100%"}
                            height={"100%"}
                            src={Mario}
                        />
                    </div>
                    <div className="basis-1/3 flex-1 ">
                        <img
                            className="rounded-lg object-cover layout-responsive"
                            width={"100%"}
                            height={"100%"}
                            src={Mario}
                        />
                    </div>
                    <div className="basis-1/3 flex-1 ">
                        <img
                            className="rounded-lg object-cover layout-responsive"
                            width={"100%"}
                            height={"100%"}
                            src={Mario}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
