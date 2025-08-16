export default function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 font-sans text-rose-900">
      {/* Romantic sticky nav */}
      <nav className="sticky top-0 left-0 z-30 w-full bg-gradient-to-r from-rose-500 via-rose-400 to-pink-500/95 text-white shadow-lg backdrop-blur supports-[backdrop-filter]:bg-rose-500/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-romantic text-3xl leading-none tracking-wide drop-shadow-sm">
            💖 CoderDate
          </span>
          <ul className="flex items-center gap-8 text-base font-medium">
            {["Home", "About", "Events", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-yellow-100/90 hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Floating soft ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-[pulse_6s_ease-in-out_infinite]">
        <div className="absolute -top-40 -left-28 h-80 w-80 rounded-full bg-rose-200 blur-3xl opacity-50" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-pink-200 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-300 blur-3xl opacity-40" />
      </div>

      {/* Heart centerpiece with animation */}
    <div className="pointer-events-none absolute left-1/2 top-[calc(50%+3.8rem)] z-0 h-[56vmin] w-[56vmin] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] animate-[heartbeat_3s_infinite]">
  {/* Square base */}
  <div className="absolute inset-0 rounded-none bg-pink-500" />
  {/* Top-left circle */}
  <div className="absolute -top-[28vmin] left-0 h-[56vmin] w-[56vmin] rounded-full bg-pink-500" />
  {/* Top-right circle */}
  <div className="absolute left-[28vmin] top-0 h-[56vmin] w-[56vmin] rounded-full bg-pink-500" />
  {/* Glow */}
  <div className="absolute inset-0 rounded-[60px] bg-white/0 shadow-[0_0_120px_40px_rgba(244,114,182,0.35)]" />
</div>


      {/* Hero Content */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl place-items-center px-6 text-center">
        <div className="max-w-2xl">
          <h1 className="font-romantic text-5xl leading-tight text-white drop-shadow-lg md:text-6xl">
            Welcome to CoderDate
          </h1>
          <p className="mt-4 text-lg text-rose-50 drop-shadow md:text-xl">
            Where code meets love ❤️
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#get-started"
              className="rounded-full bg-white px-6 py-3 font-semibold text-rose-600 shadow-lg transition-transform duration-300 hover:bg-rose-50 hover:shadow-xl hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="rounded-full border border-white/70 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-transform duration-300 hover:bg-white/20 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% { transform: translate(-50%, -50%) rotate(-45deg) scale(1); }
            14% { transform: translate(-50%, -50%) rotate(-45deg) scale(1.05); }
            28% { transform: translate(-50%, -50%) rotate(-45deg) scale(1); }
            42% { transform: translate(-50%, -50%) rotate(-45deg) scale(1.05); }
            70% { transform: translate(-50%, -50%) rotate(-45deg) scale(1); }
          }
        `}
      </style>
    </div>
  );
}
