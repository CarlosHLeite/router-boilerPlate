import { Link, Outlet} from 'react-router-dom'
import Navbar from '../componets/Navbar'

function SharedLayout() {
  return (
    <>
        <Navbar />
        <section className='section'>
            <Outlet />
        </section>
    
    </>
  )
}

export default SharedLayout