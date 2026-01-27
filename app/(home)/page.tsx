import { Card } from 'components/card'
import { HeroElement } from 'components/hero-element'

export default function Home() {
  return (
    <div className="w-full grow">
      <div className="relative overflow-hidden pt-10 pb-8 md:pb-12">
        <div className="relative mx-auto flex max-w-(--fd-layout-width) items-center">
          <div className="w-full px-8 py-6 md:py-10">
            <p className="mb-2 text-xs tracking-widest text-zinc-500 uppercase dark:text-white/50">Documentation</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-5xl dark:text-white">
              Welcome to Blutui
            </h1>
            <p className="mt-2 mb-4 text-base text-zinc-700/80 md:text-lg lg:text-xl dark:text-white/70">
              Explore our guides and documentation on using Blutui.
            </p>
            <div className="flex flex-row items-center gap-4"></div>
          </div>
          <HeroElement />
        </div>
      </div>

      <div className="mx-auto mt-0 grid max-w-(--fd-layout-width) gap-6 px-8 lg:grid-cols-6">
        <div className="md:col-span-3">
          <Card title="Read the docs" href="/docs/getting-started/create-a-project">
            Learn how to get set up and start building your first project.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="Guides" href="/guides/introduction">
            Find a guide on how to develop with Blutui.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="What's new in Blutui" href="/changelog">
            {`See what's been added, changed, fixed or removed.`}
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="YouTube tutorials" href="https://www.youtube.com/@useBlutui">
            Watch developer tutorials on our YouTube channel.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="Discord" href="https://discord.gg/4H8dZW6Fva">
            Join the community of Blutui developers on Discord.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="Blutui on X" href="https://x.com/blutui">
            Follow us for product updates, tips and more.
          </Card>
        </div>
      </div>
    </div>
  )
}
