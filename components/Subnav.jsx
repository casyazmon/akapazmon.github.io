import Link from 'next/link'

const Subnav = () => {
  return (
    
    <nav className="flex-between w-full  px-10">
        <p className="logo_text">
            Localmancodes
        </p>
        <div className="flex gap-4 flex-center">
            <button
            type='button'
            className='black_btn'>
                <Link href="/register">
                DOWNLOAD RESUME
                </Link>
                
            </button>

        </div>


    </nav>
  )
}

export default Subnav