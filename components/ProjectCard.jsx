import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaSass, FaTwitter } from "react-icons/fa";

const ProjectCard = (props) => {
    let stack = props.stack;
  return (
    <div className='flex flex-col  gap-2 shadow-md '>
        <div className="flex-col">
        <Image
            src={props.image}
            width={500}
            height={500}
        />
        <div className="flex flex-col items-start p-3">
            <Link href={props.link}>
            <h3 className='desc'>{props.name}</h3>
            <p className='mt-3'>{props.description}</p>
            </Link>
            
        </div>
        </div>
        <div className="flex flex-col px-3 gap-4 items-end pb-5">
            
            <ul className='flex font-extralight text-sm gap-3 flex-wrap '>
            {props.stack.map((st, index) => (
                <li className='text-[12px] text-blue-950  rounded-lg ' key={index}>{st}</li>
            ))}
            </ul>
            <ul className='flex px-3 gap-6 text-sm'>
                <li>
                    <Link href={props.github}>
                    <FaGithub  size={25}/>
                    </Link>
                </li>
                <li>
                    <Link href={props.link}>
                        <FaSass size={25}/>
                    </Link>
                </li>
            </ul>

        </div>
        
    </div>
  )
}

export default ProjectCard