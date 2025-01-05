import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Olakunle OGUNSOLU Software Engineer | Project Manager | Prodcut Owner
        </title>
        <meta
          name="description"
          content="with skills in Software engineering , digital transformation,product ownership, product management, project management, and problem-solving. I have a solid background in technology and business processes and focus on delivering results. Experienced in working with teams and creating effective solutions. I am ready to use my analytical skills, creativity, and proactive attitude to support projects and help organizations grow."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Olakunle Ogunsolu
          </h1>
          <h2 className="text  p-2 tracking-tight text-zinc-800 dark:text-zinc-100">
            Software Engineer | Project Manager | Product Owner
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            with skills in Software engineering , digital transformation,
            product ownership, product management, project management and
            problem-solving. I have a solid background in technology and
            business processes and focus on delivering results. Experienced in
            working with teams and creating effective solutions. I am ready to
            use my analytical skills, creativity, and proactive attitude to
            support projects and help organizations grow.
          </p>
          <div className="mt-6 flex gap-6">
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
