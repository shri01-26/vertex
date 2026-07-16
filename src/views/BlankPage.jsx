import React from "react";

export default function BlankPage({ title = "Blank Page", section = "Vertex Suite" }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/90 p-8 sm:p-12 shadow-sm">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{section}</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
          This page is ready. Add your section content here.
        </p>
      </section>
    </main>
  );
}
