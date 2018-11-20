import React from 'react'
import styles from './book.module.scss'

import Tag from '../tag'

function Book(props) {
  let metadata
  if (props.complete) {
    metadata = (
      <>
        <p>{'⭐️'.repeat(props.rating)}</p>
        <p className={styles.review}>{props.review}</p>
      </>
    )
  } else {
    metadata = (
      <>
        <progress value={props.progress} max="100" />
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
        <p>
          {props.tags.map((tag) => (
            <Tag label={tag} />
          ))}
        </p>
      </div>
    </article>
  )
}

export default Book
