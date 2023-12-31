import Link from 'next/link'
import Image from 'next/image'

export const Header = () => (
    <header>
      <div>
        <div className='topNav'>
          <Image alt="logo" src={"/images/logo_colored.png"} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href='/' passHref>Home</Link>
              </li>
              <li>
                <Link href='/events' passHref>Events</Link>
              </li>
              <li>
                <Link href='/about-us' passHref>About Us</Link>
              </li>
            </ul>
            <img />
          </nav>
        </div>
        <p className='title'>At vero eos et accusamus et iusto</p>
      </div>
    </header>
)