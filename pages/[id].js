/* eslint-disable react/no-unescaped-entities */
import { getArticle, loadData, urlFor } from './api/article'
//Style
import { motion } from 'framer-motion'
import { pageAnimation } from '../styles/animations'
import { PortableText } from '@portabletext/react'
import {
  ContentWrapper,
  Content,
  Title,
  Subtitle,
} from '../styles/articleStyles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Article({
  title,
  author,
  createdDate,
  description,
  image,
  content,
}) {
  return (
      <ContentWrapper
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show">
        <img className="imgArt" src={urlFor(image).url()} alt="image-article" />
        <Content>
          <Title>
            <h2>{title}</h2>
          </Title>
          <Subtitle>
            <h3>{author}</h3>
            <p>{createdDate}</p>
          </Subtitle>
          <PortableText value={description} />
        </Content>
      </ContentWrapper>
  )
}

export async function getStaticPaths() {
  let { articles } = await loadData()

  let paths = articles.map((article) => ({
    params: { id: article._id },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  let article = await getArticle(params.id)
  return {
    props: article,
  }
}
