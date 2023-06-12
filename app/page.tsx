import Hero from "./components/Hero";
import Creation from "./components/Creation";

export default function Home() {
  return (
    <main className="flex flex-col sm:py-10 sm:px-16 px-10">
      <Hero />
      <Creation />
    </main>
  );
}
