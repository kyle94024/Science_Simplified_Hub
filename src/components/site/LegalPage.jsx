export default function LegalPage({ title, updated, children }) {
  return (
    <article className="shell max-w-3xl py-14 sm:py-20">
      <h1 className="display-2">{title}</h1>
      {updated ? (
        <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
      ) : null}

      <div className="mt-10 space-y-5 leading-relaxed text-body [&_a]:font-semibold [&_a]:text-navy-800 [&_a]:underline [&_a]:decoration-navy-300 [&_a]:underline-offset-4 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </article>
  );
}
