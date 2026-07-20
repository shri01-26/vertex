const highlights = [
  "Unified communication",
  "Workflow automation",
  "Real-time analytics",
];

const capabilities = [
  {
    title: "Reach every customer",
    text: "Run WhatsApp, SMS, RCS, email, and voice communication from one connected system.",
  },
  {
    title: "Automate every repeat task",
    text: "Build journeys for alerts, updates, lead capture, support, and follow-ups without manual effort.",
  },
  {
    title: "Measure every result",
    text: "Track delivery, engagement, conversations, and outcomes with clear operational visibility.",
  },
];

export const metadata = {
  title: "Landing | Vertex Suite",
  description: "A standalone Vertex Suite landing page.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071B4D]">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#F6FAFF_48%,#EAF2FF_100%)] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#DDEBFF] blur-[130px]" />
        <div className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-[#E7F7FF] blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-[1480px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-[#CFE0FA] bg-white/80 px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#1468F2] shadow-sm">
              VERTEX SUITE LANDING
            </div>

            <h1 className="max-w-[720px] text-[42px] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#071B4D] sm:text-[56px] lg:text-[70px]">
              Build connected customer journeys from one platform.
            </h1>

            <p className="mt-6 max-w-[620px] text-[16px] font-medium leading-8 text-[#4F5F7C] sm:text-[18px]">
              Vertex Suite brings channels, automation, analytics, and team
              workflows together so businesses can communicate faster and
              operate with more clarity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact-sales"
                className="inline-flex h-[54px] items-center justify-center rounded-[12px] bg-[#1468F2] px-7 text-[14px] font-extrabold text-white no-underline shadow-[0_18px_38px_rgba(20,104,242,0.24)] transition hover:-translate-y-1 hover:text-white"
              >
                Talk to sales
              </a>
              <a
                href="/products"
                className="inline-flex h-[54px] items-center justify-center rounded-[12px] border border-[#BFD4FA] bg-white px-7 text-[14px] font-extrabold text-[#1468F2] no-underline shadow-[0_12px_28px_rgba(7,27,77,0.06)] transition hover:-translate-y-1"
              >
                Explore products
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8E4FA] bg-white/86 px-4 py-2 text-[12px] font-extrabold text-[#52627F] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_34px_90px_rgba(7,27,77,0.14)]">
              <img
                src="/assets/marketing-images/hero-campaign-dashboard.png"
                alt="Vertex Suite campaign dashboard"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 grid gap-3 rounded-[20px] border border-[#D7E4FB] bg-white/92 p-4 shadow-[0_18px_48px_rgba(7,27,77,0.12)] backdrop-blur sm:grid-cols-3">
              {["99%+", "24/7", "1 view"].map((metric, index) => (
                <div key={metric} className="text-center">
                  <p className="text-[22px] font-extrabold tracking-[-0.03em] text-[#1468F2]">
                    {metric}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7890]">
                    {["Delivery focus", "Automation", "Unified data"][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1468F2]">
              What this page does
            </p>
            <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#071B4D] sm:text-[44px]">
              A simple standalone page, ready to customize.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[18px] border border-[#DDE8FA] bg-white p-6 shadow-[0_16px_36px_rgba(7,27,77,0.06)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#EAF2FF] text-[15px] font-extrabold text-[#1468F2]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-[20px] font-extrabold text-[#071B4D]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-7 text-[#5A6983]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
