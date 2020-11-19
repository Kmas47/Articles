import Link from 'next/link';
import styles from '../../styles/Home.module.scss'

export default function NavBar() {
    return(
        <div className={styles.navContainer}>
            <div className={styles.row}>
                <Link href="/"><a><h1>Explore the Articles</h1></a></Link>
            </div>
            <div className={styles.row}>
                <Link href=""><a className={styles.navContent}><h5>Primary Care</h5></a></Link>
                <Link href=""><a className={styles.navContent}><h5>Hair</h5></a></Link>
                <Link href=""><a className={styles.navContent}><h5>Sex</h5></a></Link>
                <Link href=""><a className={styles.navContent}><h5>Skin</h5></a></Link>
                <Link href=""><a className={styles.navContent}><h5>COVID-19</h5></a></Link>
                <Link href=""><a className={styles.navContent}><h5>Supplements</h5></a></Link>
            </div>
        </div>
    );
}