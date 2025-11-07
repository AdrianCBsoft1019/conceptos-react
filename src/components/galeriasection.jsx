export default function GaleriaSection({ title, children }) {


    return (
        <section id="galeria" className=" grid smd:grid-cols-1 md:grid-cols-3 p-6 text-green-700 ">
            <h1 className="text-2xl text-center p-2 col-span-full">{title}</h1>
            <div className="flex gap-3 justify-center col-span-full flex-wrap">{children}
            </div>
            


        </section>
    )
}