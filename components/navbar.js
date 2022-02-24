import Image from "next/image";
import Link from "next/link";


function Navbar(){
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <Image src="/agro.jpg" alt="Agro Sena" width={100} height={50} />
            </a>
            <Link href="/sobre">Sobre</Link>
            </div>
        </nav>
    )
}

export default Navbar;