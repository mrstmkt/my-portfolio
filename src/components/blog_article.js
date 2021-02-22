import React from "react"
import { Link } from "gatsby"
import styles from "./blog.module.css"

export const ArticleListItem = ({ article }) => {
    return (
        <article
        className={styles.postListItem}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={`/blog/${article.articlesId}`} itemProp="url">
              <span itemProp="headline">{article.title}</span>
            </Link>
          </h2>
          <small>{article.date}</small>
        </header>
      </article>
    )
}

export const Article = ({ article }) => {
    return (
        <article
        className={styles.postListItem}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={`/blog/${article.articlesId}`} itemProp="url">
              <span itemProp="headline">{article.title}</span>
            </Link>
          </h2>
          <small>{article.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: article.contents,
            }}
            itemProp="description"
          />
        </section>
      </article>
    )
}
