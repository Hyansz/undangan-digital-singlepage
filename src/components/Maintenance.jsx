export default function Maintenance() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-gradient-to-br from-pink-100 to-blue-100">
            {/* Globe Animasi */}
            <div className="relative mb-6">
                {/* Globe (diam) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>

                {/* Garis lintang & bujur (berputar) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 h-24 w-24 text-blue-400 animate-spin-slow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
            </div>

            {/* Judul */}
            <h1 className="text-3xl md:text-5xl font-bold text-pink-700 mb-4">
                Website sedang dalam tahap maintenance
            </h1>

            {/* Subjudul */}
            <p className="text-base md:text-lg text-gray-700">
                Kami akan segera kembali, mohon ditunggu ya 🙏
            </p>
        </div>
    );
}
