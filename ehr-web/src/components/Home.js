import styles from "./static/css/home.module.css"
import {Link} from "react-router-dom"
function Home() {
    return (
        <>
            <div className={styles.split +" " + styles.left}>
                <div className={styles.centered}>
                    <img src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768__340.png" />
                    <br /><br /><br />
                    <Link to="doctor/login" className="btn btn-info" style={{marginLeft:"15px"}}>Doctor</Link>
                </div>
            </div>
            <div className={styles.split + " "+styles.right}>
                <div className={styles.centered}>
                    <img src="https://t3.ftcdn.net/jpg/03/10/11/70/240_F_310117075_pn44xY7Mk8y6Qn5DGEY3OD3oBG4maFzG.jpg" />
                    <br /><br /><br />
                    <Link to="patient/login" className="btn btn-info" style={{marginLeft:"15px"}}>Patient</Link>
                </div>
            </div>
        </>
    );
}

export default Home;