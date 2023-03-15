import React, {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://34.201.2.43:1337/api/articles?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)
  const value = data.data;

  return (
    <div>
      {value.map(article => (
        <div key={article.id} className="review-card">
          <img src={"http://34.201.2.43:1337"+article.attributes.cover_image.data.attributes.url} alt="Pineapple" className='image' />
          {/*<div className="rating">{article.id}</div>*/}
          <h2>{article.attributes.article_name}</h2>
          <p>{article.attributes.article_subtitle}</p>
          <Link to={`/details/${article.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
