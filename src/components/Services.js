import ServiceCards from "./Useable/ServiceCards";

export default function Services() {
    return (
        <div className="h-auto  py-32 bg-primary-0 text-optional-0">
            <div className="w-full mx-auto flex gap-y-3 flex-col justify-center pb-12 items-center">
                <h1 className="text-xl">
                    Our Classes
                </h1>
                <p className="lg:text-[3vw] md:text-[5vw] text-[7vw] md:w-[30%] text-center leading-none">
                    FEATURED CLASSES SERVICE
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid md:max-w-[95rem] px-10 justify-center items-center mx-auto gap-16  md:grid-cols-2 lg:grid-cols-4">
                    <ServiceCards />
                    <ServiceCards />
                    <ServiceCards />
                    <ServiceCards />
                </div>
            </div>

        </div>
    )
}