import { useEffect, useState } from "react";

export default function Hero() {
    const [nama, setNama] = useState("Tamu Undangan");

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const namaParam = params.get("nama");
        if (namaParam) {
            setNama(capitalizeWords(namaParam));
        }
    }, []);

    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-screen text-center bg-cover bg-center py-10"
            style={{ backgroundImage: "url('/img/bg-hero.webp')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative flex flex-col justify-around gap-10 items-center w-full h-full px-4">
                <img
                    src="/img/logo-spi.webp"
                    alt="SPI Logo"
                    className="w-28 md:w-40 h-auto"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                />

                <div
                    className="bg-center bg-contain bg-no-repeat w-11/12 max-w-md sm:max-w-lg md:max-w-3xl flex flex-col justify-center items-center"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                >
                    <div className="text-white">
                        <img src="/img/batik-nama1.webp" alt="" />
                        <p className="text-2xl sm:text-lg md:text-4xl mt-2">
                            Dear
                        </p>
                    </div>
                    <p className="text-yellow-500 font-semibold py-1 text-3xl sm:text-2xl md:text-7xl">
                        Bpk. {nama}
                    </p>
                    <div className="text-white">
                        <p className="font-semibold mt-1 text-xl sm:text-lg md:text-4xl mb-2">
                            you're invited
                        </p>
                        <img src="/img/batik-nama2.webp" alt="" />
                    </div>
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                >
                    <img src="/img/spi.webp" alt="" />
                </div>
            </div>
        </section>
    );
}
