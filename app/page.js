import Image from 'next/image';
import Card from './components/Card';
import TestimonialCarousel from './components/TestimonialCarousel';
import testimonials from './testimonialData';
// import { Carousel } from 'flowbite-react';

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full mx-auto space-y-16">
      <section className='bg-hero-img bg-center bg-cover md:h-96 lg:min-h-[80vh] object-center mx-auto w-[90%]'>
        <div className='h-full w-full bg-black/60 text-white py-20 px-10 space-y-6 flex flex-col justify-center relative'>
          <h2 className='text-white text-4xl font-bold sm:w-2/3 lg:w-1/2'>
            We pour love and <br className='hidden sm:block'/> care in every Patient
          </h2>
          <p className='sm:w-2/3 lg:w-1/3 text-sm font-light text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique urna eget fermentum ornare. Aliquam rutrum aliquet quam, quis egestas diam cursus ac.
          </p>
          <div className='mt-4'>
            <button className='px-6 py-2 bg-[#008074] rounded-lg font-medium text-sm'>
              Chat Now
            </button>
          </div>

          <div className='hidden md:block absolute text-center text-sm font-medium md:right-36 lg:right-56 bottom-40 bg-[#0065B2] py-2 px-3 rounded-md'>
            <p>200+</p>
            <p>Patients Daily</p>
          </div>
        </div>
      </section>

      <section className='mx-auto w-[90%]'>
        <div>
          <div className='relative py-2 flex items-center space-x-4'>
            <hr className='w-20 border border-[#0065B2]'/>
            <p className='text-xs'>SERVICES</p>
          </div>
          <h6 className='text-xl font-semibold'>
            We Provide Quality Care
          </h6>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 grid-flow-rows gap-3 md:gap-6 my-8'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>


      {/* About Us */}
      <section className='w-full mx-auto bg-[#F5FBFF] grid md:grid-cols-2 items-center min-h-fit py-14 gap-y-10 lg:gap-y-0'>
        <div className='w-[90%] pl-8 md:pl-0 md:px-16 order-last lg:order-first md:w-[80%] flex flex-col md:justify-center md:place-self-center'>
          <div className='relative py-2 flex items-center space-x-4'>
            <hr className='w-16 border border-[#0065B2]'/>
            <p className='text-xs'>ABOUT US</p>
          </div>
          <h6 className='text-xl font-semibold'>
            We Provide Quality Care
          </h6>
          <article className='text-sm md:w-[90%] leading-loose'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique urna eget fermentum ornare. Aliquam rutrum aliquet quam, quis egestas diam cursus ac.
          <br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique urna eget fermentum ornare. Aliquam rutrum aliquet quam, quis egestas diam cursus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br/>
          <br/>
          Phasellus tristique urna eget fermentum ornare. Aliquam rutrum aliquet quam, quis egestas diam cursus ac, Phasellus tristique urna eget fermentum ornare. Aliquam rutrum aliquet quam, quis egestas diam cursus,
          </article>
        </div>

        <div className='flex w-[90%] md:w-full justify-center mx-auto'>
          <Image src={'/about.jfif'} width={1000} height={1000} className='rounded-lg md:w-[70%]'/>
        </div>
      </section>

      {/* Testimonials */}
      <section className='mx-auto w-[90%] space-y-6'>
        <div>
          <div className='relative py-2 flex items-center space-x-4'>
            <hr className='w-16 border border-[#0065B2]'/>
            <p className='text-xs'>TESTIMONIALS</p>
          </div>
          <h6 className='text-xl font-semibold'>
            We Provide Quality Care
          </h6>
        </div>

        <div className='grid grid-flow-col overflow-x-scroll gap-x-6 w-full snap-mandatory snap-x'>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="w-full grid justify-center mt-8">
          <button className="bg-[#008074] p-3 text-white text-sm rounded-md ">
            Chat Now
          </button>
        </div>
      </section>

      <section className="w-full bg-[#008074] h-56 text-white">
        <div classname="flex">
          <div>
          <p>
            200+
            <span className="block">Patients Everyday</span>
          </p>
          </div>
          <div>
          <p>
            100+
            <span className="block">Experienced Doctors</span>
          </p>
          </div>
         <div>
          <p>
            5+
            <span className="block">Years Experience</span>
          </p>
         </div>
        </div>
      </section>
    </main>
  )
}
