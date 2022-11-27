import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const SocialLinks = () => {
  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-tr-md'>
                <a href="https://www.linkedin.com/in/justin-peeters/" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-white'> 
                    <>
                    LinkedIn <FaLinkedin size={30}/>
                    </> 
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a href="https://github.com/JustDevInn/" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-white'> 
                    <>
                    Github <FaGithub size={30}/>
                    </> 
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a href="mailto:peeters.justin@yahoo.com" className='flex justify-between items-center w-full text-white'> 
                    <>
                    Mail <HiOutlineMail size={30}/>
                    </> 
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md'>
                <a href="/CV - Justin Peeters copy.pdf" download className='flex justify-between items-center w-full text-white download:true'> 
                    <>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </> 
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks