import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {' '}
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Olakunle OGUNSOLU, Software Engineer</title>
        <meta
          name="description"
          content="I am a software engineer based in Paris, France, with expertise in frontend and full-stack development. With 2 years plus of experience in the industry, I honed my skills in various programming languages and frameworks, including JavaScript, React, Angular, Typescript, Python, Django and Node.js. I am passionate about building user-friendly and scalable web applications, utilizing the latest technologies and best practices."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Olakunle OGUNSOLU
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Software engineer based in Paris, France, with expertise in frontend
            and full-stack development. With 2 years plus of experience in the
            industry, I honed my skills in various programming languages and
            frameworks, including JavaScript, React, Angular, Typescript,
            Python, Django and Node.js. I am passionate about building
            user-friendly and scalable web applications, utilizing the latest
            technologies and best practices.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/olakunle_exxdee"
              aria-label="Follow on Twitter"
              target="_blank"
              icon={TwitterIcon}
            />

            <SocialLink
              href="https://github.com/olakunle-exxdee"
              aria-label="Follow on GitHub"
              target="_blank"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ogunsoluolakunle/"
              aria-label="Follow on LinkedIn"
              target="_blank"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16"></div>
          <div className="space-y-10 lg:pl-16 xl:pl-24"></div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
