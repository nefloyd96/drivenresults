import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Bot, Globe2, PenTool, Target } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DRVN%20Logo-B72iPSLQHFCOwWgUrPkCGLPH5KVgiC.png'

const details = [
  { id: '01', icon: Target, title: 'Paid Media & Ad Scaling', intro: 'Turn paid acquisition into a controlled growth channel.', body: 'We build and manage the strategy behind your Meta, Google, and TikTok campaigns—from account structure and audience research to creative testing, budget allocation, and ongoing optimization. The goal is not more spend. It is a clearer path from attention to profitable action.' },
  { id: '02', icon: Globe2, title: 'Funnels & Web Design', intro: 'Give every click a better place to land.', body: 'We design focused digital experiences that make the next step obvious. That includes landing pages, offer positioning, conversion paths, and the measurement layer needed to understand where prospects move forward—or drop off.' },
  { id: '03', icon: Bot, title: 'AI & CRM Automation', intro: 'Make follow-up consistent without making it impersonal.', body: 'We connect the systems that help your team respond, qualify, nurture, and learn faster. From lead routing and CRM workflows to practical AI assistants, we remove repetitive work while keeping the customer experience thoughtful.' },
  { id: '04', icon: PenTool, title: 'Creative & Copywriting', intro: 'Say the right thing to the right person.', body: 'We develop performance-minded creative and copy around your audience, offer, and point of difference. Every concept is built to be understood quickly, tested honestly, and improved with real feedback from the market.' },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <header className="border-b border-zinc-800/70">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" aria-label="DRVN Results home"><Image src={logoUrl} alt="DRVN Results" width={128} height={64} className="h-14 w-auto object-contain" /></Link>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex"><Link href="/services" className="text-yellow-400">Services</Link><Link href="/#results" className="transition hover:text-yellow-400">Results</Link><Link href="/process" className="transition hover:text-yellow-400">Process</Link><Link href="/#faq" className="transition hover:text-yellow-400">FAQ</Link></nav>
          <Link href="/#apply" className="hidden min-h-11 items-center gap-2 rounded-full bg-yellow-400 px-5 text-sm font-bold text-black transition hover:bg-yellow-300 md:inline-flex">Book Strategy Call <ArrowUpRight className="size-4" /></Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-yellow-400 md:hidden"><ArrowLeft className="size-4" /> Home</Link>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <p className="eyebrow">The DRVN playbook</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">Services built for <span className="gold-text">real momentum.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">Every engagement starts with the constraint in front of you. Then we build the strategy, execution, and feedback loop to move through it.</p>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="grid gap-5 md:grid-cols-2">{details.map(({ id, icon: Icon, title, intro, body }) => <article id={id} key={id} className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 sm:p-9"><div className="flex items-center justify-between"><div className="flex size-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300"><Icon /></div><span className="font-mono text-sm text-zinc-600">/{id}</span></div><h2 className="mt-9 text-2xl font-bold">{title}</h2><p className="mt-4 text-lg font-semibold leading-7 text-yellow-300">{intro}</p><p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p><Link href="/#apply" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-yellow-400">Talk about this service <ArrowUpRight className="size-4" /></Link></article>)}</div>
      </section>
      <section className="mx-auto max-w-5xl px-5 pb-24 text-center lg:px-8"><div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/5 p-8 sm:p-12"><p className="eyebrow">Not sure where to start?</p><h2 className="mt-4 text-3xl font-black sm:text-5xl">Start with the constraint.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">We will help you identify the highest-leverage next move before recommending a service.</p><Link href="/#apply" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-yellow-400 px-6 text-sm font-bold text-black transition hover:bg-yellow-300">Request a growth audit <ArrowUpRight className="size-4" /></Link></div></section>
    </main>
  )
}
