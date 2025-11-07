export default function Footer({ano, title, enlaceFacebook, enlaceInstragram }) {

    return (
        <footer className="w-full bg-emerald-950 p-4 text-center text-white mt-auto">
            <p>
                &copy; <span>{ano}</span> <span>{title}</span>.
            </p>
            <div className="flex justify-center gap-6 text-2xl p-4 ">
                <a href={enlaceFacebook}  >
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href={enlaceInstragram} >
                    <i className="fa-brands fa-instagram"></i>
                </a>

            </div>

        </footer>
    );
};