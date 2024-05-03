import Header from "./Header";
import JobTimeline from "./JobTimeline";
import Portfolio from "./Portfolio";
import ProfilePresentation from "./ProfilePresentation";

interface IProps {
    handleDarkMode: () => void;
}
const Main = ({ handleDarkMode }: IProps) => {
    return (
        <main className=" bg-white dark:bg-gray-900 dark:text-gray-100 px-10 md:px-20 lg:px-40">
            <Header handleDarkMode={handleDarkMode} />
            <ProfilePresentation />
            <JobTimeline />
            <Portfolio />
        </main>
    );
};

export default Main;
