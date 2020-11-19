import { ApolloProvider } from '@apollo/client'
import HomePageArticles from './components/HomePageArticles'
import client from './api/graphQL/gqlConnection'
import NavBar from './components/Navbar'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <ApolloProvider client={client}>
      <title>Blog</title>
      <div className={styles.main}>
        <div className={styles.navDiv}>
            <NavBar />
        </div>
        <div className={styles.hero}>
              <HomePageArticles />  
        </div>
      </div>
    </ApolloProvider>
  );
}
