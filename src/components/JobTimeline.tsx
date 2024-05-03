import { jobs } from "src/mocks/Jobs";

const JobTimeline = () => {
    return (
        <section
            id="timeline"
            className="relative min-h-screen flex flex-col justify-center bg-slate-50 text-gray-900 dark:text-gray-400"
        >
            <div className="w-full max-w-6xl mx-auto px-2 md:px-2 mr-20 ">
                <h3 className="text-3xl py-1  ">Timeline</h3>
            </div>

            {jobs.companies.map((company, index: number) => {
                return (
                    <div
                        key={index}
                        className="w-full max-w-6xl mx-auto px-2 md:px-2"
                    >
                        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-10">
                            <div className="w-full max-w-3xl mx-auto">
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    <div className="relative">
                                        <div className="md:inline items-center mb-3">
                                            <div className="">
                                                <time className="text-sm font-medium text-green-500 md:w-28">
                                                    {company.startDate}
                                                    {" / "}
                                                    {company.endDate}
                                                </time>
                                            </div>

                                            <div className="text-slate-500">
                                                <span className="text-slate-900 font-bold">
                                                    {company.jobTitle}
                                                </span>{" "}
                                                at {company.companyName}
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 shadow-lg rounded-xl my-10 dark:bg-gray-700 dark:text-gray-100 flex-1">
                                            <ul>
                                                {company.description.map(
                                                    (
                                                        desc: string,
                                                        index: number
                                                    ) => (
                                                        <li
                                                            key={index}
                                                            className="ml-4 list-disc"
                                                        >
                                                            {desc}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <ul className="flex flex-wrap items-center justify-center mt-2">
                                                {company.skills.map(
                                                    (skill: string) => {
                                                        return (
                                                            <li>
                                                                <span className="bg-blue-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300">
                                                                    {skill}
                                                                </span>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default JobTimeline;
