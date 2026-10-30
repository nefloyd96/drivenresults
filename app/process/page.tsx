import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check, MessageSquare, Rocket, Search, SlidersHorizontal } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DRVN%20Logo-B72iPSLQHFCOwWgUrPkCGLPH5KVgiC.png'

const steps = [
  { icon: MessageSquare, number: '01', title: 'Start with a conversation', copy: 'Tell us where the business is today, what you have tried, and what you want to change. We use this conversation to understand the context before recommending a path.' },
  { icon: Search, number: '02', title: 'Find the highest-leverage opportunity', copy: 'We review the offer, audience, funnel, channels, and current data to identify the constraint that is most worth solving first.' },
  { icon: SlidersHorizontal, number: '03', title: 'Build the growth plan', copy: 'You receive a focused plan for the work, the priorities, the measurement approach, and what we should expect to learn along the way.' },
  { icon: Rocket, number: '04', title: 'Execute, learn, and improve', copy: 'We launch the agreed work, keep communication clear, and use real market feedback to refine the system instead of guessing.' },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <header className="border-b border-zinc-800/70"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/" aria-label="DRVN Results home"><Image src={logoUrl} alt="DRVN Results" width={128} height={64} className="h-14 w-auto object-contain" /></Link><nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex"><Link href="/services" className="transition hover:text-yellow-400">Services</Link><Link href="/#results" className="transition hover:text-yellow-400">Results</Link><Link href="/process" className="text-yellow-400">Process</Link><Link href="/#faq" className="transition hover:text-yellow-400">FAQ</Link></nav><Link href="/#apply" className="hidden min-h-11 items-center gap-2 rounded-full bg-yellow-400 px-5 text-sm font-bold text-black transition hover:bg-yellow-300 md:inline-flex">Book Strategy Call <ArrowUpRight className="size-4" /></Link><Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-yellow-400 md:hidden"><ArrowLeft className="size-4" /> Home</Link></div></header>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28"><p className="eyebrow">How we work</p><h1 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">A clear process for <span className="gold-text">forward motion.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">No mystery handoffs or busywork theater. You will know what happens next, what we need from you, and how we are making decisions together.</p></section>
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32"><div className="grid gap-5 md:grid-cols-2">{steps.map(({ icon: Icon, number, title, copy }) => <article key={number} className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 sm:p-9"><div className="flex items-center justify-between"><div className="flex size-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300"><Icon /></div><span className="font-mono text-sm text-zinc-600">/{number}</span></div><h2 className="mt-9 text-2xl font-bold">{title}</h2><p className="mt-4 text-sm leading-7 text-zinc-400">{copy}</p></article>)}</div></section>
      <section className="mx-auto max-w-5xl px-5 pb-24 lg:px-8"><div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/5 p-8 sm:p-12"><div className="flex items-start gap-4"><Check className="mt-1 size-5 shrink-0 text-yellow-400" /><div><h2 className="text-2xl font-black sm:text-3xl">What you can expect from us</h2><p className="mt-4 max-w-2xl leading-7 text-zinc-400">Direct communication, practical recommendations, transparent priorities, and a team that stays close to the work. We will not promise certainty where there is still something to learn.</p></div></div><Link href="/#apply" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-yellow-400 px-6 text-sm font-bold text-black transition hover:bg-yellow-300">Start the conversation <ArrowUpRight className="size-4" /></Link></div></section>
    </main>
  )
}
