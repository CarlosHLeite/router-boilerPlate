import { Link, Outlet} from 'react-router-dom'
import Navbar from '../componets/Navbar'
import StyledNavbar from '../componets/StyledNavbar'

function SharedLayout() {
  return (
    <>
        <StyledNavbar />
        <section className='section'>
            <Outlet />
        </section>
    
    </>
  )
}

export default SharedLayout