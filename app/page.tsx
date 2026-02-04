import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-emerald-600 mb-4">Welcome to Mint Glow Salon</h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-8">
            Discover a new level of relaxation and beauty at Mint Glow Salon. Our talented team provides top-notch hair, skin, and spa services in a tranquil, modern environment. Treat yourself to the ultimate rejuvenation experience.
          </p>
          <a
            href="/services"
            className="inline-block rounded bg-emerald-600 text-white px-6 py-3 font-semibold shadow hover:bg-emerald-700 transition"
          >
            View Services
          </a>
        </section>
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-2 text-emerald-500">Hair Care</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Expert haircuts, color, and treatments to revitalize your style.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-2 text-emerald-500">Skin Spa</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Facials, peels, and skincare to give you a healthy, radiant glow.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-2 text-emerald-500">Relaxation</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Luxurious massages and treatments for ultimate relaxation and renewal.
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full border-t mt-12 py-6 bg-white dark:bg-zinc-950/70 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Mint Glow Salon. All rights reserved.
      </footer>
    </>
  );
}