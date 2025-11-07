export default function Galeria({ src, alt, desciption }) {
    return (



        <div className="bg-white p-5 rounded-3xl">
            <img src={src} alt={alt} className="h-100 w-100 rounded-xl" />
            <p className="text-xl p-2 text-center text-gray-700">{desciption}</p>
        </div>



    );
};