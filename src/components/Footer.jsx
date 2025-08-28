import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <section
            className="relative text-center py-12 px-6 bg-no-repeat bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/bg-footer.png')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="mb-10 space-y-4">
                    <p>
                        Kehadiran Bapak/Ibu/Saudara/i merupakan sebuah
                        kehormatan dan kebahagiaan bagi kami, serta akan
                        menambah semarak dan keberkahan dalam acara ini.
                    </p>
                    <p>
                        Demikian undangan ini kami sampaikan. Atas perhatiannya
                        dan kehadiran Bapak/Ibu/Saudara/i, kami ucapkan terima
                        kasih.
                    </p>
                </div>

                <p className="mt-12 mb-4 font-semibold">Hormat Kami,</p>
                <img
                    src="/logo-spi.png"
                    alt="SPI Logo"
                    className="w-28 mx-auto mb-4"
                />
                <p className="text-sm opacity-80">
                    Manajemen Sekolah Pengusaha Indonesia
                </p>

                <div className="flex justify-center space-x-6 mt-6 text-2xl">
                    <a
                        href="https://web.facebook.com/sekolahpengusaha.ind/?_rdc=1&_rdr#"
                        aria-label="Facebook"
                        className="text-yellow-600 transition-transform duration-300 transform hover:scale-125 hover:text-blue-500 hover:drop-shadow-[0_0_8px_#3b82f6]"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/sekolahpengusaha.idn"
                        aria-label="Instagram"
                        className="text-yellow-600 transition-transform duration-300 transform hover:scale-125 hover:text-pink-500 hover:drop-shadow-[0_0_8px_#ec4899]"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </section>
    );
}
