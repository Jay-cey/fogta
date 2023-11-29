import Image from "next/image"
// import testimonials from "../testimonialData"


function Testimonial(props) {
    return(
        <div className="w-full space-y-8 snap-center">
            <figure className='w-full border border-fogta-blue min-h-fit rounded-br-lg rounded-bl-sm rounded-tr-sm rounded-tl-lg flex flex-col justify-center text-center items-center space-y-4 relative pt-6 pb-14'>
                <div>
                    <Image src={'/quote.svg'} width={64} height={64} alt="quote" className="h-5"/>
                </div>
                <q className="leading-5 text-sm">
                    {props.quote}
                </q>
                <div className="flex space-x-1 w-1/2">
                    {
                        Array.from({length: props.rate}).map((_, i) =>
                            <Image key={`${props.id}-${i}`} src={'/star.svg'} width={64} height={64} alt="quote" className="h-4"/>
                        )
                    }
                </div>
                <Image src={'avatar.svg'} width={128} height={128} alt="avatar" className="h-16 absolute -bottom-8 z-10 rounded-full" />
            </figure>
            <div className="w-full text-center">
                <p className="font-bold">
                    {props.name}
                </p>
                <p className="text-xs">
                    {props.date}
                </p>
            </div>
        </div>
    )
}

export default Testimonial