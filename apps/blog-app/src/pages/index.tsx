import { sayHello } from '@optional-package-scope/foo'
import { Message } from '@optional-package-scope/bar'
import { getPosts, Post } from '../data/blog'
import { Layout } from '@/components/layout'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

export default function Blog({ posts }: Props) {
  return (
    <Layout>
      <h3>I'm the SSG blog-app</h3>
      <ul>
        <li>{`Foo says: ${sayHello(
          'World'
        )} from @optional-package-scope/foo`}</li>
      </ul>
      <h3>Here's the blog posts</h3>
      <ul>
        {posts.map(({ title, slug }) => (
          <li key={slug}>{title}</li>
        ))}
      </ul>
      <Message message={'cool'} />
      <Image
        src={'/images/nextjs-logo.png'}
        alt={'logo'}
        width={400}
        height={240}
      />
    </Layout>
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      posts: getPosts(),
    },
  }
}
