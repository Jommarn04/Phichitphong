import Link from "next/link"
import { Button } from "./ui/button"



/////components
import Navbar from "./Navbar"
import MobileNav from "./MobileNav"


export default function Header() {
    return <header className="py-8 px-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/* logo */}
            <Link href={'/'}>
                <h1 className="text-3xl font-semibold"> Film <span className="text-accent">.</span></h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href={'/contact'}>
                    <Button>Hire me</Button>
                </Link>
            </div>

            {/* mobile nav  */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
}