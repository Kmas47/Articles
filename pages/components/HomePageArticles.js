import { useQuery } from '@apollo/client'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import { GET_ARTICLES } from '../api/graphQL/Queries'
import Articles from './Articles';


export default function HomePageArticles() {
    
    const { Loading, err, data } = useQuery(GET_ARTICLES);
    if(Loading) return (<h2 className={styles.loading}>Loadinng</h2>);
    if(err) return (<h2>Error !... {err}</h2>);
    if(data != undefined) 
    return( 
            <div>   
                {data.firstPageArticles.map(prop => (
                    <div className={styles.articleContainer}>
                        <div className={styles.articleColumn}>
                            <a></a>
                        </div>
                        <div className={styles.articleColumn}>
                            <a className={styles.type}>{prop.type}</a>
                            <h2>{prop.title}</h2>
                            <p className={styles.text}>{prop.text}</p>
                            <Link href={prop.url}><a className={styles.readButton} target="_blank">Read this Article<span /></a></Link>
                        </div>
                    </div>   
                ))}
                <Articles />
            </div> 
        ); 
    return(<h2 className={styles.loading}>Loading. . . </h2>);
}
