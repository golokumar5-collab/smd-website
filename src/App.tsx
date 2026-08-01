import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function App() {
  const [menuOpen, setMenuOpen] =
  useState(false);

useEffect(() => {
  window.history.replaceState(
    null,
    '',
    window.location.pathname,
  );

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
}, []);

return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
          <a
  href="#home"
  className="flex items-center"
>
  <img
    src="/images/smd-logo.png"
    alt="SMD Logo"
    className="h-12 w-auto object-contain transition-all duration-300 hover:scale-110 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
    draggable={false}
  />
</a>

          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#home"
              className="text-sm font-semibold text-white transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#products"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Products
            </a>

            <a
              href="#features"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Features
            </a>

            <a
  href="#Premium"
  className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
>
  Premium
</a>

<a
  href="#how-to-use"
  className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
>
  How To Use
</a>

            <a
              href="#contact"
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="#download"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Download App
            </a>
          </div>

          <button
            type="button"
            onClick={() =>
              setMenuOpen(current => !current)
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
            aria-label="Open navigation menu"
          >
            <span className="text-2xl">
              {menuOpen ? '×' : '☰'}
            </span>
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#020617] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Products', '#products'],
                ['Features', '#features'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="font-semibold text-slate-300 transition hover:text-cyan-400"
                >
                  {label}
                </a>
              ))}

              <a
                href="#download"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-black text-slate-950"
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </header>

      <motion.main
  id="home"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative flex min-h-screen items-center pt-28"
>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[110px]" />
          <div className="absolute right-[-8rem] top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
  className="text-center lg:text-left"
>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
              Smart Digital Solutions
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.34em] text-cyan-400 sm:text-base">
              Software Management Desk
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Build Better.
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Work Smarter.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              SMD creates powerful mobile apps, desktop
              software, websites and smart business tools
              designed to save time, reduce manual work and
              improve accuracy.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#download"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-center font-black text-slate-950 shadow-[0_16px_50px_rgba(34,211,238,0.22)] transition hover:-translate-y-1"
              >
                Download SMD PRO
              </a>

              <a
                href="#products"
                className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
              >
                Explore Products
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl sm:gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 backdrop-blur-xl">
                <p className="text-xl font-black text-white sm:text-2xl">
                  100%
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Accuracy
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 backdrop-blur-xl">
                <p className="text-xl font-black text-white sm:text-2xl">
                  24×7
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Support
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 backdrop-blur-xl">
                <p className="text-xl font-black text-white sm:text-2xl">
                  Fast
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Performance
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut',
            }}
            className="relative mx-auto flex w-full max-w-xl items-center justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />

            <div className="relative w-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-6">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#07111f] p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                      Featured Product
                    </p>

                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                      SMD PRO
                    </h2>
                  </div>

                  <div className="rounded-xl bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-300">
                    MOBILE APP
                  </div>
                </div>

                <div className="relative mx-auto w-[15rem] rounded-[2.2rem] border-[8px] border-slate-900 bg-slate-950 p-2 shadow-2xl sm:w-[17rem]">
                  <div className="mx-auto mb-2 h-5 w-20 rounded-full bg-slate-900" />

                  <div className="min-h-[25rem] rounded-[1.55rem] bg-gradient-to-b from-[#0b1c2c] to-[#020617] p-4">
                    <div className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 p-4 text-slate-950">
                      <p className="text-xs font-bold">
                        Welcome to
                      </p>
                      <p className="mt-1 text-2xl font-black">
                        SMD PRO
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        'Entry',
                        'Hisab',
                        'Jantri',
                        'Customers',
                        'Markets',
                        'History',
                      ].map(item => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-sm font-bold text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                      <p className="text-xs text-cyan-300">
                        Automatic WhatsApp Entry
                      </p>
                      <p className="mt-1 text-lg font-black">
                        Fast • Accurate • Easy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-sm font-black text-cyan-300">
                      Auto
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Paste
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-sm font-black text-cyan-300">
                      Smart
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Hisab
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-sm font-black text-cyan-300">
                      Secure
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* TRUSTED STATS SECTION */}
      <section className="relative border-y border-white/10 bg-[#030a16] px-5 py-20 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Trusted Digital Solutions
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Built for Speed, Accuracy
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                and Reliable Performance
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Smart software solutions designed to simplify
              work, improve productivity and support modern
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                value: '2012',
                label: 'Experience Since',
                icon: '◆',
              },
              {
                value: '24×7',
                label: 'Customer Support',
                icon: '◉',
              },
              {
                value: '100%',
                label: 'Entry Accuracy',
                icon: '✓',
              },
              {
                value: 'Fast',
                label: 'Performance',
                icon: '⚡',
              },
            ].map(item => (
              <div
                key={item.label}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] sm:p-7"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-black text-cyan-300 transition group-hover:scale-110">
                  {item.icon}
                </div>

                <p className="mt-5 text-2xl font-black text-white sm:text-4xl">
                  {item.value}
                </p>

                <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400 sm:w-28" />

            <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-300 sm:text-base sm:tracking-[0.3em]">
              Building Smart Software for Modern Businesses
            </p>

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400 sm:w-28" />
          </div>
        </div>
      </section>

      {/* ABOUT SMD SECTION */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#020617] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-36 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute -right-36 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              About SMD
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Technology That Makes
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Work Simple.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">
              SMD stands for Software Management Desk. We
              develop practical and powerful digital solutions
              that help businesses manage their daily work
              faster, smarter and more accurately.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              From mobile applications and desktop software to
              professional websites and technical services,
              every SMD product is focused on ease of use,
              reliability and real business requirements.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400">
                  Our Mission
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Reduce manual work through fast, accurate and
                  easy-to-use software.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">
                  Our Vision
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Make professional digital tools accessible to
                  every growing business.
                </p>
              </div>
            </div>
          </div>

          <div
            id="products"
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                number: '01',
                title: 'Mobile Applications',
                description:
                  'Fast and responsive Android applications designed for real business workflows.',
                label: 'ANDROID',
              },
              {
                number: '02',
                title: 'Desktop Software',
                description:
                  'Powerful desktop tools for management, automation and accurate daily operations.',
                label: 'WINDOWS',
              },
              {
                number: '03',
                title: 'Website Development',
                description:
                  'Modern, responsive and professional websites that represent your business online.',
                label: 'WEB',
              },
              {
                number: '04',
                title: 'Technical Solutions',
                description:
                  'Reliable PCB repair and practical technical support for electronic systems.',
                label: 'SERVICE',
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 ${
                  index === 1 || index === 3
                    ? 'sm:translate-y-8 sm:hover:translate-y-6'
                    : ''
                }`}
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-black text-white/10 transition group-hover:text-cyan-400/20">
                      {item.number}
                    </span>

                    <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black tracking-[0.18em] text-cyan-300">
                      {item.label}
                    </span>
                  </div>

                  <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                    SMD
                  </div>

                  <h3 className="mt-5 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-cyan-300">
                    Explore Solution
                    <span className="transition group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
          {/* ============================= */}
      {/* SMD PRO SHOWCASE */}
      {/* ============================= */}

      <section
        id="features"
        className="relative overflow-hidden bg-[#010816] px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Flagship Product
            </div>

            <h2 className="mt-6 text-5xl font-black sm:text-6xl">
              <span className="text-white">
                SMD
              </span>{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                PRO
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Powerful business management application
              built for speed, automation, customer
              management, WhatsApp entry, Jantri,
              Hisab and much more.
            </p>

          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] shadow-[0_35px_120px_rgba(0,0,0,.55)] backdrop-blur-2xl">

            <div className="relative overflow-hidden rounded-[36px] bg-[#07111f]">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />

  <img
    src="/images/smd-pro-showcase.png"
    alt="SMD PRO Showcase"
    loading="lazy"
    draggable={false}
    className="relative w-full select-none transition duration-700 hover:scale-[1.02]"
  />

</div>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Automatic WhatsApp Entry
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Customer Management
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Smart Hisab
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Jantri
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Market Management
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Fast Performance
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ Secure Login
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300">
              ✓ One Device Protection
            </span>

          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <a
  href="/download/SMD_PRO.apk"
  download="SMD_PRO_v1.0.0.apk"
  className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 text-lg font-black text-slate-950 transition hover:scale-105"
>
  Download SMD PRO
</a>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-10 py-5 text-lg font-bold transition hover:border-cyan-400 hover:bg-white/10">
              Watch Demo
            </button>

          </div>

        </div>
      </section>


      {/* SUBSCRIPTION PLANS */}
      <section
        id="Premium"
        className="relative overflow-hidden border-t border-white/10 bg-[#020617] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              Simple Premium
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Choose Your
              <span className="ml-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                SMD PRO Plan
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Get complete access to SMD PRO with every plan. Choose the duration that fits your work and continue with full features, updates and support.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { name: 'Starter', duration: '1 Month', price: '799', badge: '', featured: false, description: 'Perfect for starting with SMD PRO.' },
              { name: 'Popular', duration: '3 Months', price: '2,199', badge: 'MOST POPULAR', featured: true, description: 'A balanced plan for regular users.' },
              { name: 'Professional', duration: '6 Months', price: '4,499', badge: '', featured: false, description: 'Long-term access for growing work.' },
              { name: 'Annual', duration: '12 Months', price: '8,999', badge: 'BEST VALUE', featured: false, description: 'Complete access for one full year.' },
            ].map((plan, index) => (
              <motion.article
                key={plan.duration}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -10 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 transition duration-300 sm:p-7 ${plan.featured ? 'border-cyan-400/50 bg-gradient-to-b from-cyan-400/[0.13] to-white/[0.04] shadow-[0_25px_90px_rgba(34,211,238,0.18)]' : 'border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.28)] hover:border-cyan-400/35 hover:bg-white/[0.06]'}`}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                {plan.badge && (
                  <div className={`absolute right-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-black tracking-[0.16em] ${plan.featured ? 'bg-cyan-400 text-slate-950' : 'border border-cyan-400/25 bg-cyan-400/10 text-cyan-300'}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">SMD</div>
                  <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-cyan-400">{plan.name}</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{plan.duration}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{plan.description}</p>
                  <div className="mt-7 flex items-end gap-1">
                    <span className="pb-2 text-2xl font-black text-cyan-300">₹</span>
                    <span className="text-5xl font-black tracking-tight text-white">{plan.price}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-500">One-time subscription payment</p>
                </div>

                <div className="relative my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <ul className="relative flex-1 space-y-4 text-sm text-slate-300">
                  {['Full SMD PRO access','Automatic WhatsApp entry','Smart Hisab and Jantri','Customer and market management','Regular application updates','24×7 customer support'].map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-black text-cyan-300">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`relative mt-8 rounded-2xl px-5 py-4 text-center text-sm font-black transition duration-300 ${plan.featured ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_14px_45px_rgba(34,211,238,0.2)] hover:scale-[1.03]' : 'border border-white/15 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200'}`}
                >
                  Choose {plan.duration}
                </a>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-6 text-center backdrop-blur-xl sm:px-8 lg:flex-row lg:text-left">
            <div>
              <p className="text-lg font-black text-white">Need help choosing a plan?</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">Contact the SMD support team for plan guidance and activation assistance.</p>
            </div>
            <a href="#contact" className="shrink-0 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3.5 text-sm font-black text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/20">
              Contact Support
            </a>
          </div>
        </div>
      </section>
      {/* ================= HOW TO USE ================= */}

<section
  id="how-to-use"
  className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
>
  <div className="max-w-7xl mx-auto text-center">

    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold">
      OFFICIAL TUTORIAL
    </span>

    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
      How To Use <span className="text-cyan-400">SMD PRO</span>
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-slate-300 text-lg leading-8">
      Learn every feature of SMD PRO with our official YouTube tutorials.
      From WhatsApp Entry to Hisab, Customer Jantri, Overall Jantri,
      Market Management and Subscription — everything is explained step by step.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mt-14 text-left">

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

        <h3 className="text-2xl font-bold text-white mb-6">
          📚 What You'll Learn
        </h3>

        <div className="space-y-4 text-slate-300">

          <p>✅ Dashboard Overview</p>
          <p>✅ Market Management</p>
          <p>✅ Customer Management</p>
          <p>✅ Automatic WhatsApp Entry</p>
          <p>✅ Smart Hisab</p>
          <p>✅ Customer Jantri</p>
          <p>✅ Overall Jantri</p>
          <p>✅ Result Master</p>
          <p>✅ Recharge & Subscription</p>

        </div>

      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-600 to-blue-700 p-8 flex flex-col justify-center items-center">

        <div className="text-7xl mb-6">
          ▶️
        </div>

        <h3 className="text-3xl font-bold text-white">
          Official YouTube Guide
        </h3>

        <p className="text-white/80 mt-4 text-center">
          Click below to watch the latest tutorials on our official YouTube channel.
        </p>

        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition text-white font-bold"
        >
          ▶ WATCH ON YOUTUBE
        </a>

        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition text-white font-semibold"
        >
          🔔 SUBSCRIBE CHANNEL
        </a>

      </div>

    </div>

  </div>
</section>
{/* ================= DOWNLOAD APK ================= */}

<section
  id="download"
  className="relative py-24 px-6 bg-slate-950"
>
  <div className="max-w-7xl mx-auto">

    <div className="rounded-[35px] border border-cyan-500/20 bg-gradient-to-br from-cyan-600/10 via-slate-900 to-blue-700/10 backdrop-blur-xl p-10 md:p-16">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold">
            DOWNLOAD APP
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
            Download
            <span className="text-cyan-400"> SMD PRO</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Download the latest version of SMD PRO and enjoy
            Automatic WhatsApp Entry, Smart Hisab,
            Customer Jantri, Overall Jantri,
            Market Management and many more premium features.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <p className="text-slate-400 text-sm">Latest Version</p>
              <h3 className="text-white text-2xl font-bold mt-2">
                v1.0.0
              </h3>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <p className="text-slate-400 text-sm">Platform</p>
              <h3 className="text-white text-2xl font-bold mt-2">
                Android
              </h3>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <p className="text-slate-400 text-sm">Compatibility</p>
              <h3 className="text-white text-xl font-bold mt-2">
                Android 8+
              </h3>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <p className="text-slate-400 text-sm">Status</p>
              <h3 className="text-green-400 text-xl font-bold mt-2">
                Available
              </h3>
            </div>

          </div>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/download/SMD_PRO.apk"
download
              className="px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-bold text-slate-950"
            >
              ⬇ DOWNLOAD APK
            </a>

            <a
              href="#contact"
              className="px-10 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 transition font-bold"
            >
              CONTACT SUPPORT
            </a>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="rounded-[35px] border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10 w-full max-w-md">

            <div className="text-center">

              <div className="text-8xl mb-6">
                📱
              </div>

              <h3 className="text-3xl font-bold text-white">
                SMD PRO
              </h3>

              <p className="text-slate-400 mt-3">
                Fast • Secure • Professional
              </p>

              <div className="mt-10 space-y-4 text-left">

                <p className="text-slate-300">
                  ✔ Automatic WhatsApp Entry
                </p>

                <p className="text-slate-300">
                  ✔ Smart Hisab
                </p>

                <p className="text-slate-300">
                  ✔ Customer Jantri
                </p>

                <p className="text-slate-300">
                  ✔ Overall Jantri
                </p>

                <p className="text-slate-300">
                  ✔ Market Management
                </p>

                <p className="text-slate-300">
                  ✔ Lifetime Updates
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* ================= CONTACT US ================= */}

<section
  id="contact"
  className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24"
>
  <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl">

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
        CONTACT & SUPPORT
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        Need Help With
        <span className="text-cyan-400"> SMD PRO?</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        Our support team is available to help you with installation,
        subscription, recharge, app usage and technical assistance.
      </p>

    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* LEFT CONTACT CARDS */}

      <div className="grid gap-5 sm:grid-cols-2">

        <a
          href="https://wa.me/918448665366"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-500/10"
        >
          <div className="text-4xl">💬</div>

          <h3 className="mt-5 text-xl font-bold text-white">
            WhatsApp Support
          </h3>

          <p className="mt-2 text-slate-400">
            Chat directly with our support team.
          </p>

          <p className="mt-5 font-semibold text-green-400">
            +91 84486 65366
          </p>
        </a>

        <a
          href="tel:+918448665366"
          className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-500/10"
        >
          <div className="text-4xl">📞</div>

          <h3 className="mt-5 text-xl font-bold text-white">
            Call Support
          </h3>

          <p className="mt-2 text-slate-400">
            Speak with our support executive.
          </p>

          <p className="mt-5 font-semibold text-cyan-400">
            +91 84486 65366
          </p>
        </a>

        <a
          href="mailto:smdsupport01@gmail.com"
          className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
        >
          <div className="text-4xl">✉️</div>

          <h3 className="mt-5 text-xl font-bold text-white">
            Email Support
          </h3>

          <p className="mt-2 text-slate-400">
            Send us your query anytime.
          </p>

          <p className="mt-5 break-all font-semibold text-blue-400">
            smdsupport01@gmail.com
          </p>
        </a>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="text-4xl">🕒</div>

          <h3 className="mt-5 text-xl font-bold text-white">
            Support Hours
          </h3>

          <p className="mt-2 text-slate-400">
            Assistance for all SMD PRO users.
          </p>

          <p className="mt-5 font-semibold text-amber-400">
            24×7 Support
          </p>
        </div>

      </div>

      {/* RIGHT SUPPORT CARD */}

      <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-600/10 via-white/5 to-blue-600/10 p-8 backdrop-blur-xl md:p-10">

        <h3 className="text-3xl font-bold text-white">
          Quick Support
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          Facing any problem while installing or using SMD PRO?
          Contact our team and get quick assistance.
        </p>

        <div className="mt-8 space-y-4">

          {[
            'APK Installation Support',
            'Login & OTP Assistance',
            'Recharge & Subscription Help',
            'App Feature Guidance',
            'Technical Issue Resolution',
            'General Account Support',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
                ✓
              </span>

              <span className="text-slate-200">
                {item}
              </span>
            </div>
          ))}

        </div>

        <a
          href="https://wa.me/918448665366?text=Hello%20SMD%20Support%2C%20I%20need%20help%20with%20SMD%20PRO."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center rounded-xl bg-green-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-green-400"
        >
          💬 CHAT ON WHATSAPP
        </a>

      </div>

    </div>

  </div>
</section>
{/* ================= FOOTER ================= */}

<footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 pt-16 pb-8">

  <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">

    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}

      <div>

        <h2 className="text-3xl font-black tracking-wide text-white">
          SMD
        </h2>

        <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-cyan-400">
          SOFTWARE MANAGEMENT DESK
        </p>

        <p className="mt-5 max-w-sm leading-7 text-slate-400">
          SMD PRO is a fast, secure and professional business management
          application designed to simplify daily entry, hisab, jantri,
          customer and market management.
        </p>

        <div className="mt-6 flex gap-3">

          <a
            href="https://wa.me/918448665366"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:border-green-400/50 hover:bg-green-500/10"
          >
            💬
          </a>

          <a
            href="mailto:smdsupport01@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
          >
            ✉️
          </a>

          <a
            href="tel:+918448665366"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:border-blue-400/50 hover:bg-blue-500/10"
          >
            📞
          </a>

        </div>

      </div>

      {/* QUICK LINKS */}

      <div>

        <h3 className="text-lg font-bold text-white">
          Quick Links
        </h3>

        <div className="mt-5 space-y-3">

          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Features', '#features'],
            ['Premium', '#Premium'],
            ['How To Use', '#how-to-use'],
            ['Download', '#download'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="block text-slate-400 transition hover:text-cyan-400"
            >
              {label}
            </a>
          ))}

        </div>

      </div>

      {/* FEATURES */}

      <div>

        <h3 className="text-lg font-bold text-white">
          SMD PRO Features
        </h3>

        <div className="mt-5 space-y-3 text-slate-400">

          <p>Automatic WhatsApp Entry</p>
          <p>Smart Hisab</p>
          <p>Customer Jantri</p>
          <p>Overall Jantri</p>
          <p>Customer Management</p>
          <p>Market Management</p>

        </div>

      </div>

      {/* SUPPORT */}

      <div>

        <h3 className="text-lg font-bold text-white">
          Support
        </h3>

        <div className="mt-5 space-y-4 text-slate-400">

          <p>
            📱 +91 84486 65366
          </p>

          <p className="break-all">
            ✉️ smdsupport01@gmail.com
          </p>

          <p>
            🕒 24×7 Support
          </p>

          <a
            href="#contact"
            className="inline-block rounded-xl border border-cyan-400/40 px-5 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
          >
            CONTACT SUPPORT
          </a>

        </div>

      </div>

    </div>

    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">

      <p>
        © {new Date().getFullYear()} SMD — Software Management Desk. All Rights Reserved.
      </p>

      <div className="flex justify-center gap-6 md:justify-end">

        <a
          href="#"
          className="transition hover:text-cyan-400"
        >
          Privacy Policy
        </a>

        <a
          href="#"
          className="transition hover:text-cyan-400"
        >
          Terms & Conditions
        </a>

      </div>

    </div>

  </div>
</footer>
    </div>
  );
}

export default App;