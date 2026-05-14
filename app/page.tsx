export default function Home() {
  const faqs = [
    {
      q: 'How does the AI detect missed time tracking?',
      a: 'TimeBill AI monitors screen activity patterns — active windows, typing bursts, and app usage — to infer when you were working. It then compares that against your timer logs and flags gaps where billable work likely occurred.'
    },
    {
      q: 'Does it record my screen or send data to the cloud?',
      a: 'No screen recordings are ever made. Only anonymized activity signals (app names, active/idle state) are processed locally. AI suggestions are generated on-device, keeping your client work private.'
    },
    {
      q: 'Can I adjust the suggestions before invoicing?',
      a: 'Yes. Every AI-suggested correction appears in your dashboard for review. You approve, edit, or dismiss each one before any hours are added to an invoice.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Time Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Losing Billable Hours<br />
          <span className="text-[#58a6ff]">to Forgotten Timers</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TimeBill AI watches your screen activity and uses AI to detect when you forgot to start or stop tracking — then suggests precise billing corrections before you invoice.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $8/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['98%', 'Timer accuracy'], ['~2.4 hrs', 'Recovered weekly'], ['5 min', 'Setup time']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$8<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, no tiers</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'AI-powered missed timer detection',
              'Dashboard to review & approve corrections',
              'One-click invoice-ready hour export',
              'Unlimited clients & projects',
              'Local processing — your data stays private',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#484f58] mt-12">
          © {new Date().getFullYear()} TimeBill AI. Built for freelancers who value every minute.
        </p>
      </section>
    </main>
  )
}
