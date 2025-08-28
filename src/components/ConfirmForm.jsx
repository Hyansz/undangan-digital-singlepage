export default function ConfirmForm() {
    return (
        <section className="text-center py-12 w-11/12 mx-auto">
            <p className="mb-6 text-white text-lg font-semibold">
                Isi formulir berikut untuk konfirmasi kedatangan Anda!
            </p>

            <div className="w-full max-w-2xl mx-auto bg-white rounded-xl">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfp5Ucc2ZPNywYMSl1A8BsTQ81DZilbisHAu8Y6ss66cJvHjw/viewform?embedded=true"
                    width="100%"
                    height="600"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading...
                </iframe>
            </div>
        </section>
    );
}
