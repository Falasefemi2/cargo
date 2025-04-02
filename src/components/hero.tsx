import hero from "../assets/hero.png";

export default function Hero() {
    return (
        <section className="relative h-[60vh] md:h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full md:h-full bg-cover bg-center bg-no-repeat">
                <img src={hero} alt="Hero" className="w-full h-full object-cover" />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-white/0 dark:bg-black/70 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4 text-center md:-translate-y-30">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-14 transition-colors duration-300">
                    <span className="block mb-2">Moving Your Goods with</span>
                    <span className="block">Care and Precision</span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-[#767676] dark:text-gray-100 max-w-2xl mx-auto transition-colors duration-300">
                    When it comes to moving cargo, we don't do guesswork, we make sure your shipments arrive on time, intact, and without unnecessary back-and-forth.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-[#335CFF] hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-[10px] rounded-[10px] text-sm font-medium w-[110px] h-11 transition-colors duration-300">
                        Contact us
                    </button>
                    <a
                        href="#"
                        className="text-sm font-medium bg-[#F5F7FA] dark:bg-white/10 p-2.5 text-[#525866] dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/20 rounded-[10px] transition-colors duration-300"
                    >
                        Partner with us
                    </a>
                </div>
            </div>
        </section>
    )
}

