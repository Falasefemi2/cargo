import banner from "../assets/banner.png"
import globe from "../assets/globe.png"
import box from "../assets/box.png"

import greencar from "../assets/greencar.png"

export default function Features() {
    return (
        <section className="bg-white py-16 md:py-24 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors dark:text-white dark:border-white/30 hover:bg-[#F5F7FA] dark:hover:bg-white/10">
                        <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
                        What we do
                    </button>
                    <p className="mt-4 text-xl md:text-2xl text-[#1A1A1A] leading-8 dark:text-white/90">
                        No middlemen. No delays. We pick up directly from your supplier and deliver straight to your doorstep.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* We Build from the Ground Up */}
                    <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm dark:bg-white/5">
                        <div className="flex flex-col items-start">
                            <div className="mb-4">
                                <img src={greencar || "/placeholder.svg"} alt="Building icon" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">We Build from the Ground Up</h3>
                                <p className="mt-2 text-[#767676] dark:text-white/80">
                                    Say goodbye to delays and unnecessary middlemen. We pick up shipments directly from your supplier and deliver them straight to your doorstep ensuring a smooth and hassle-free experience.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* 100% Quality Projects */}
                    <div className="rounded-lg shadow-sm overflow-hidden">
                        <div className="relative h-full">
                            <img
                                src={banner}
                                alt="100% Quality Projects"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* We Sell Homes & Investments */}
                    <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm dark:bg-white/5">
                        <div className="flex flex-col items-start">
                            <div className="mb-4">
                                <img src={box} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">End-to-End Logistics</h3>
                                <p className="mt-2 text-[#767676] dark:text-white/80">
                                    We manage every step of the logistics process, from warehousing and customs clearance to shipping and last-mile delivery. No need to juggle multiple providers—we handle it all so you can focus on growing your business.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* We Manage Shortlets */}
                    <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm dark:bg-white/5">
                        <div className="flex flex-col items-start">
                            <div className="mb-4">
                                <img src={globe} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">Africa-to-the-World Trade Expertise</h3>
                                <p className="mt-2 text-[#767676] dark:text-white/80">
                                    Whether you're importing or exporting, our dedicated logistics operations in Africa and China ensure seamless transactions. We take care of the complexities, so your goods move efficiently across borders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

