import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = (props) => {
  return (
    <div className='flex flex-col justify-start gap-2 shadow-md '>
        <Image
            src={props.image}
            width={500}
            height={500}
        />
        <div className="flex flex-col items-start p-3">
            <h3 className='desc'>{props.name}</h3>
            <p className='mt-3'>{props.description}
            </p>
            
            <ul className='flex gap-10 mt-3'>
                <li>
                    <Link href='github.com/casyazmon/make-it-short'>{props.github}</Link>
                </li>

                <li>
                    
                    <Link href='github.com/casyazmon/make-it-short'>{props.website}</Link>
                </li>
            </ul>
            
        </div>
        
    </div>
  )
}

export default ProjectCard