import styles from '../../../styles/Navbar.module.css'
const Navbar = () => {
    return ( 
        <div classname={styles.Navbar_Container}>
            <div className={styles.logo}>
                <h3>Navbar</h3>
            </div>
            <ul className={styles.menuItems}>
               <li>Home</li>  
               <li>About</li>  
               <li>Contact</li>  
               <li>Login</li>  
               <li>Registration</li>  
            </ul>
        </div>
        );
}
 
export default Navbar;