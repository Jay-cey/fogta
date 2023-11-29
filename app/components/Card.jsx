import Link from 'next/link';
import Image from 'next/image';

function Card() {
  return (
    <div className='min-h-44 w-full bg-[#0076D1] text-white place-self-center p-6 rounded-xl space-y-4'>
        <heading className="flex justify-between items-center">
            <h6 className='font-medium'>
                Optometry
            </h6>
            <Image src={'heart.svg'} alt={'heart icon'} width={100} height={100} className='w-8' />
        </heading>

        <article className='text-sm text-[#f2f2f2]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur.
        </article>

        <div>
            <Link href={"#"} className='text-sm font-medium'>
                Read More
                <hr className='w-14 border border-white/60 hover:w-20' />
            </Link>
        </div>
    </div>
  )
}

export default Card