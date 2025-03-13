

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/5b77/92f1/15d66b0c03d35bc3cffd852533a6a6ab?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EWbo6nM2jF0vr4Watuinmt~OBNSlyOxIhSmV~GoULozMEaXLgO~fRaoRYyJPGWe2cs8euGnlN9bJDeDY8O7JCMU6iPDpf6VKY2pWgjH0x5SjGRTY~D5eBTW47Oe~4TTIwPKA0kotpoS4EQAlawV1dJxcuDFxuWIFenJP5YLQUat4yAZH6e80EJWOPhNiQ8vyeD90P9ZCwN3VlWmYaEBy2sKsLk6MgnvoPWGgWFzCWACPQDnlBHiWMwxXnKm6YcHffi94CC-FADNvpmte10P6cwH4ojOcamM6Miv-mIPJe2A5WmQYMicdDCcUKm0v-QTYwuCUA18x5WyPUfbbsTs3gQ__")',
                    pointerEvents: 'none',
                }}
            >
                {/* Dark overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4 text-center -translate-y-30">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-14">
                    <span className="block mb-2">Moving Your Goods with</span>
                    <span className="block">Care and Precision</span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-[#767676] max-w-2xl mx-auto">
                    When it comes to moving cargo, we don’t do guesswork, we make sure your shipments arrive on time, intact, and without unnecessary back-and-forth.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-[#335CFF] hover:bg-blue-700 text-white p-[10px] rounded-[10px] text-sm font-medium w-[110px] h-11">
                        Contact us
                    </button>
                    <a href="#" className="text-sm font-medium bg-[#F5F7FA] p-2.5 text-[#525866]">
                        Partner with us
                    </a>
                </div>
            </div>
        </section>
    )
}

