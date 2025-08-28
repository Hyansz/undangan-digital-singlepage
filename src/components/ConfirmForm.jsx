export default function ConfirmForm() {
    return (
        <section className="text-center py-12 w-11/12 mx-auto">
            <p className="mb-4 text-gray-300">
                Isi formulir berikut untuk konfirmasi kedatangan Anda!
            </p>
            <form className="max-w-md mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full p-3 rounded-md text-black"
                />
                <input
                    type="text"
                    placeholder="Nomor WhatsApp"
                    className="w-full p-3 rounded-md text-black"
                />
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
                >
                    Konfirmasi Kehadiran
                </button>
            </form>
        </section>
    );
}
