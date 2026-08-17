import Button from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="shell flex flex-col items-center py-24 text-center sm:py-32">
      <p className="eyebrow">404</p>
      <h1 className="display-2 mt-4">We couldn&apos;t find that page.</h1>
      <p className="lede mt-4 max-w-lg">
        The page may have moved. Try our communities, or get in touch and
        we&apos;ll point you in the right direction.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/communities" variant="outline" size="lg">
          Our Communities
        </Button>
      </div>
    </section>
  );
}
