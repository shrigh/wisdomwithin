
import { useState } from "react";
import { Loader } from "lucide-react";

export default function WisdomWithinWireframe() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    if (!question) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setResponse("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 bg-white shadow flex items-center justify-between p-4 z-50">
        <div className="font-bold text-xl">WisdomWithin</div>
        <nav className="space-x-4 hidden md:block">
          <a href="#how" className="hover:underline">How It Works</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">Log In / Sign Up</button>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center p-8 md:p-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <img src="/lotus-placeholder.png" alt="Lotus" className="w-24 h-24 mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Overcome Life’s Obstacles with Timeless Hindu Wisdom</h1>
        <p className="mb-6 max-w-xl">Get personalized answers rooted in the Vedas, Upanishads, Gita, Puranas and more.</p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">Ask Your First Question</button>
      </section>

      <section id="how" className="p-8 md:p-20 text-center">
        <h2 className="text-2xl font-bold mb-8">How WisdomWithin Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-xl">Ask your real-life question</div>
          <div className="p-4 border rounded-xl">We personalize your answer based on your preferences</div>
          <div className="p-4 border rounded-xl">Receive tailored wisdom: stories, mantras, daily practices</div>
        </div>
      </section>

      <section id="features" className="p-8 md:p-20">
        <h2 className="text-2xl font-bold mb-4">Your Journey, Your Way</h2>
        <p className="mb-6">Select all that apply to personalize your experience.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Preferred Practice Formats</h3>
            <ul className="space-y-2">
              <li><input type="checkbox" className="mr-2" /> Meditation</li>
              <li><input type="checkbox" className="mr-2" /> Listening to Talks</li>
              <li><input type="checkbox" className="mr-2" /> Watching Videos</li>
              <li><input type="checkbox" className="mr-2" /> Mantra Chanting</li>
              <li><input type="checkbox" className="mr-2" /> Breathwork</li>
              <li><input type="checkbox" className="mr-2" /> Journaling</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Energies You Resonate With</h3>
            <ul className="space-y-2">
              <li><input type="checkbox" className="mr-2" /> Ganesha (New Beginnings)</li>
              <li><input type="checkbox" className="mr-2" /> Hanuman (Strength & Devotion)</li>
              <li><input type="checkbox" className="mr-2" /> Krishna (Strategy & Love)</li>
              <li><input type="checkbox" className="mr-2" /> Durga (Protection & Power)</li>
              <li><input type="checkbox" className="mr-2" /> Shiva (Inner Stillness)</li>
              <li><input type="checkbox" className="mr-2" /> Lakshmi (Prosperity & Grace)</li>
              <li><input type="checkbox" className="mr-2" /> Saraswati (Wisdom & Speech)</li>
              <li><input type="text" placeholder="Your Guru or Other Energy" className="border p-2 rounded w-full" /></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="p-8 md:p-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Choose Your Path</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
          <div className="border p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Pay Per Question</h3>
            <p>₹ 299 per question</p>
          </div>
          <div className="border p-4 rounded-xl">
            <h3 className="font-semibold mb-2">PowerWithin Premium (₹ 2,999/year)</h3>
            <ul className="list-disc list-inside text-left">
              <li>Unlimited questions</li>
              <li>Deeper personalization</li>
              <li>Mantras & stories for you</li>
            </ul>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-xl">Upgrade Now</button>
          </div>
        </div>
      </section>

      <section className="p-8 md:p-20 text-center">
        <h3 className="text-xl font-semibold mb-4">Ask Your Question</h3>
        <input
          type="text"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2 rounded w-full max-w-lg mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin inline-block w-5 h-5" /> : "Submit"}
        </button>
        {response && <p className="mt-4 p-4 border rounded-xl bg-white max-w-xl mx-auto">{response}</p>}
      </section>

      <footer className="bg-white p-4 text-center text-sm">
        <p>© 2025 PowerWithin. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
