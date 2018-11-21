import React from 'react'
import styles from './book.module.scss'

import Tag from '../tag'

function Book(props) {
  let tags = (
    <p>
      {props.tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </p>
  )
  let metadata
  if (props.complete) {
    metadata = (
      <>
        <p>{'⭐️'.repeat(props.rating)}</p>
        {tags}
        <p className={styles.review}>{props.review}</p>
      </>
    )
  } else {
    metadata = (
      <>
        <progress value={props.progress} max="100" />
        {tags}
      </>
    )
  }
  return (
    <article className={styles.book}>
      <picture className={styles.picture}>
        <img src={props.imageUrl} alt={props.title} />
      </picture>
      <div className="metadata">
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        {metadata}
      </div>
    </article>
  )
}

export default Book
