import Navbar from '../components/Navbar/Navbar'
import {Announcment} from '../components/Navbar/Announcment'
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';
import { Cart } from '../components/Cart/Cart';
export const CartPage = () => {
  return (
    <div className='container-fluid' style={{textAlign:"center"}}>
        <Announcment/>
<Navbar/>
<Cart/>
<Newsletter/>
<Footer/>
    </div>
  )
}
