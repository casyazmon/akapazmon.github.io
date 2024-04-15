import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
    title : "Promptopia",
    description : "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html  lang='en' className='scroll-smooth'>
        <body>
            <div className="main">
                <div className="gradient">

                </div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            <Footer/>
        </body>

    </html>
  )
}

export default RootLayout