import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'

export default function Articles() {
    const GET_ARTICLES = gql 
    `
    query {
        firstPageArticles {
          id
          author
          createdAt
          score
          updatedAt
          title
          text
          type
          url
        }
      }
    `;
    
    function FirstPage() {
        const { Loading, err, data } = useQuery(GET_ARTICLES);
        if(Loading) return (<h2>Loadinng</h2>);
        if(err) return (<h2>Error !... {err}</h2>);
        if(data != undefined) 
        return(        
                <div>
                    {data.firstPageArticles.map(prop => (
                        <div className="">
                            <p>{prop.type}</p>
                            <h2>{prop.title}</h2>
                            <p>{prop.text}</p>
                            <Link href={prop.url}><a>Read this Article</a></Link>
                        </div>
                    ))}
                </div>
            ); 
        return(<h2>Loading. . . </h2>);
    }
    return FirstPage();
}