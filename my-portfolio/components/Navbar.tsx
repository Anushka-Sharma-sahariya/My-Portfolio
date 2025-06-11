import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className="bg-white shadow p-4 sticky top-0 z-50">
            <ul className="flex gap-6 justify-center text-gray-800 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/art">Art</Link></li>
            <li><Link href="/speaking">Speaking</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}