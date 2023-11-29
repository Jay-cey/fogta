import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className=" sticky top-0 w-full bg-white z-20">
        <div className="md:container flex items-center justify-between mx-auto py-4">
        <div>
            <Image src={"logo.svg"} width={156} height={156} alt="" className="h-8" />
        </div>

        <div className="hidden md:flex">
            <ul className="flex space-x-5 text-sm font-medium md:pr-6">
                <li className="active:text-fogta-blue">
                    <Link href={'/'} to="/">HOME</Link>
                </li>
                <li>
                    <Link href={'#'}>SERVICES</Link>
                </li>
                <li>
                    <Link href={'#'}>ABOUT US</Link>
                </li>
                <li>
                    <Link href={'/'}>TESTIMONIALS</Link>
                </li>
                <li>
                    <Link href={'/'}>NEWS</Link>
                </li>
            </ul>

        </div>
        </div>
    </nav>
  )
}

export default Navbar