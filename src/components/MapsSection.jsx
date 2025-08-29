import { FaLocationDot } from "react-icons/fa6";

export default function MapsSection() {
    return (
        <section className="text-center py-12 w-10/12 mx-auto">
            <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.381476570191!2d110.84501619999999!3d-7.533305999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x455c20dcd7090f6f%3A0x14c4abc01c48063a!2sKampus%20SPI%20(%20Sekolah%20Pengusaha%20Indonesia)!5e0!3m2!1sen!2sid!4v1756364876347!5m2!1sen!2sid"
                className="w-full max-w-lg h-64 mx-auto rounded-lg"
                allowFullScreen=""
                loading="lazy"
                data-aos="zoom-in"
                data-aos-duration="1200"
            />
            <a
                href="https://maps.app.goo.gl/JAcmmWJdqy4znBy8A"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex justify-center items-center bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition w-fit text-center mx-auto"
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                <FaLocationDot />
                <p>Google Maps</p>
            </a>
        </section>
    );
}
