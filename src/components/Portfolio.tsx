import Fintech from "../global/fintech.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="w-full max-w-6xl mx-auto px-2 md:px-2 mr-20 ">
                <h3 className="text-3xl py-1  ">Projects</h3>
            </div>
            <div className="w-full max-w-4xl mx-auto px-2 md:px-2">
                <div className="lg:flex gap-10">
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-gray-100 flex-1">
                        <div className="flex justify-center">
                            <img
                                src={Fintech}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                        <h3 className="text-2xl font-light pt-8 pb-2">
                            PrimeTime MX
                        </h3>
                        <p className="py-2">
                            This is a Fintech App. We create this application
                            for the Fintech users, to be used for transferring
                            money and create transactions.
                        </p>
                        <h4 className="py-4 text-green-400 text-xl">
                            Technologies
                        </h4>
                        <p className=" dark:text-gray-100 py-1">Android</p>
                        <p className=" dark:text-gray-100 py-1">Kotlin</p>
                        <p className=" dark:text-gray-100 py-1">MVVM</p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-gray-100 flex-1">
                        <div className="flex justify-center">
                            <img
                                src={Fintech}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                        <h3 className="text-2xl font-light pt-8 pb-2">
                            PrimeTime MX
                        </h3>
                        <p className="py-2">
                            This is a Fintech App. We create this application
                            for the Fintech users, to be used for transferring
                            money and create transactions.
                        </p>
                        <h4 className="py-4 text-green-400 text-xl">
                            Technologies
                        </h4>
                        <p className=" dark:text-gray-100 py-1">Android</p>
                        <p className=" dark:text-gray-100 py-1">Kotlin</p>
                        <p className=" dark:text-gray-100 py-1">MVVM</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
