import React from 'react'
import { FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { MdOutlineChangeCircle } from 'react-icons/md'

const NavBar = ( { setShow, show }) => {
    
    return (
        <nav className="mb-20 flex flex-col lg:flex-row items-center justify-between py-6">
            <div className="flex-shrink-0 items-center text-center mb-4 lg:mb-0 lg:text-left">
                <p className="max-w-xl font-light text-xs tracking-tighter">
                    Showing Portfolio for
                </p>
                <div className="flex items-center gap-2">
                    <p className="bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 bg-clip-text text-xl tracking-tight text-transparent">
                        {show}
                    </p>
                    <MdOutlineChangeCircle onClick={() => setShow(prevShow => prevShow === "Web Developer" ? "Graphic Designer" : "Web Developer")} />
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
                <a href="https://github.com/ranasamiulhaq" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ranasamiulhaq" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:rsami3638@gmail.com" target="_blank" rel="noopener noreferrer">
                    <BsEnvelope />
                </a>
                <a href="https://instagram.com/samiranaulhaq" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default NavBar