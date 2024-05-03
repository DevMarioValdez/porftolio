import { BsFillMoonStarsFill } from "react-icons/bs";

interface IProps {
    handleDarkMode: () => void;
}
const Header = ({ handleDarkMode }: IProps) => {
    return (
        <nav className="py-2 mb-12 flex justify-between sticky top-0 bg-white dark:bg-gray-900 overflow-y-hidden z-10 shadow-none">
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
    );
};

export default Header;
