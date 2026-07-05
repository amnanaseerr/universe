import Hero from '../components/Hero';
import Content from '../components/Content';
import CallToAction from '../components/CallToAction';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0B1E] text-white">
      <Navbar />
      <Hero />
      <Content />
      <CallToAction />
    </main>
  );
}