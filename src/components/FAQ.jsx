const faqs = [
  {
    q: "Is there a free trial available?",
    a: "Yes. You can start with the Starter plan and explore the core product experience before upgrading.",
  },
  {
    q: "Can I use FlowTrack with my whole team?",
    a: "Absolutely. The Pro and Team plans are designed for collaboration, visibility, and shared delivery workflows.",
  },
  {
    q: "Does it support automation and reporting?",
    a: "Yes. Advanced plans include workflow automation, performance insights, and custom reporting tools.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts, and you can change or cancel your plan whenever you need.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50/70">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Common questions, answered clearly
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{item.q}</h3>
              <p className="mt-3 leading-8 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
