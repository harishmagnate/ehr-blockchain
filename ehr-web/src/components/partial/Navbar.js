import styles from "../static/css/home.module.css"
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
             <div>
                <ul className={styles.topnav}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="about">ABOUT</Link></li>
                    <li><Link to="why healthcare">WHY HEALTHCARE</Link></li>

                </ul>
            </div>
        </>
     );
}

export default Navbar;