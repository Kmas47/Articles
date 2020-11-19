import { useQuery } from "@apollo/client";
import { GET_ALLARTICLES } from '../api/graphQL/Queries'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

export default function Articles() {
    const { Loading, err, data } = useQuery(GET_ALLARTICLES);
    if(Loading) return(<h2 className={styles.loading}></h2>);
    if(err) return(<h2 className={styles.err}>{err.message}</h2>);
    if(data != undefined) 
    return(
        <div>   
                {data.retrievePageArticles.map(prop => (
                
                    <div className={styles.articleContainer}>
                        <div className={styles.articleColumn}>
                            <a></a>
                        </div>
                        <div className={styles.articleColumn}>
                            <a className={styles.type}>{prop.type}</a>
                            <h2>{prop.title}</h2>
                            <p className={styles.text}>{prop.text}</p>
                            <Link href={prop.url || ""}><a className={styles.readButton} target="_blank">Read this Article<span /></a></Link>
                        </div>
                    </div>   
                ))}
       
            </div> 
    );
    return(<h2 className={styles.loading}>Loading . . . </h2>);
}