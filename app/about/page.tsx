import type { Metadata } from "next";
import { about, agencyName } from "@/app/data/content";
export const metadata: Metadata = {
  title: about.title + " — " + agencyName,
  description: about.description,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {about.title}
      </h1>

      <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        {about.description}
      </p>

      <section className="mt-12 rounded-2xl border border-gray-200 p-8 dark:border-gray-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Основатель
        </h2>
        <p className="mt-2 text-xl font-medium">{about.founder}</p>

        <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Наша миссия
        </h2>
        <p className="mt-2 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {about.mission}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Контакты</h2>
        <div className="mt-6 space-y-4">
          {about.contacts.map((contact, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-xl bg-gray-50 p-6 dark:bg-gray-900 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {contact.email}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {contact.phone}
              </span>

              <a href={contact.telegram} className="text-blue-600">
                Telegram
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
