import styles from '../../../styles/Navbar.module.css'
import Link from "next/link"
const Navbar = () => {
    return ( 
        <div className={styles.Navbar_Container}>
            <div className={styles.logo}>
                <h1>Navbar</h1>
            </div>
            <ul className={styles.menuItems}>
               <li><Link href="/home">Home</Link></li>  
               <li><Link href="/about">About</Link></li>  
               <li><Link href="/contact">Contact</Link></li>  
               <li><Link href="/login">Login</Link></li>  
               <li><Link href="/register">Registration</Link></li>  
            </ul>
        </div>
        );
}
 
export default Navbar;