import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://34.201.2.43:1337/api/articles/'+ id +'?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)
  const article = data.data;

  return (
    <div className="review-card">
        <div>
            <img src={"http://34.201.2.43:1337"+article.attributes.cover_image.data.attributes.url} alt="Pineapple" className='single_article_image' />
        </div>
      {/*<div className="rating">{data.rating}</div>*/}
        <div className='single_article_body'>
            <h2>{article.attributes.article_name}</h2>
            <p>{article.attributes.article_subtitle}</p>
        </div>
    </div>
  )
}
