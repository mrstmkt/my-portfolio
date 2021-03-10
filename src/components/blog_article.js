import React from "react"
import { Link } from "gatsby"
import styles from "./blog.module.css"

export const ArticleListItem = ({ article }) => {
  let headerImage
  if(article.headerImage.width === 1 && article.headerImage.height === 1) {
    headerImage = (
      <div>{article.title}</div>
    )
  }
  else {
    headerImage = (
      <img src={`${article.headerImage.url}?fit=crop&w=960&h=540`} alt={article.title} />
    )
  }
  let categories = (
    <div>
      {article.category.map((c) => (
        <span className={styles.blogCategory}>{c.name}</span>
      )) }
    </div>
  )
  let skills = article.skill.split(",")
  skills = skills.filter((s)=> s.trim().length > 0)
  let skill = (
    <div>
      {skills.map((s) =>(
        <span className={styles.blogSkill}>{s.trim()}</span>
      ))}
    </div>
  )

  return (
      <article
        className={styles.postListItem}
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className={styles.articleListItem}>
          <div className={styles.articleListHeaderImage}>
            {headerImage}
          </div>
          <div className={`${styles.articleListHeader} ${styles.blogPost}`}>
            <header>
              <h2>
                <Link to={`/blog/${article.articlesId}`} itemProp="url">
                  <span itemProp="headline">{article.title}</span>
                </Link>
              </h2>
              <div className={styles.blogDate}>{article.date}</div>
              {categories}
              {skill}
            </header>

          </div>

        </div>
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
