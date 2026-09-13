import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [myStack, setMyStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load JSON Data with Loading State
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading tech data:", err);
        setLoading(false);
      });
  }, []);

  // Add to stack handler
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = myStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already added to your stack!`);
      return;
    }
    setMyStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  // Single remove handler
  const handleRemoveItem = (techId, techName) => {
    setMyStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`${techName} removed from stack.`);
  };

  // Remove all handler
  const handleRemoveAll = () => {
    if (myStack.length === 0) return;
    setMyStack([]);
    toast.error("All technologies removed from stack!");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Mobile: Left Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <img src="/hamburger.png" alt="Menu" className="w-6 h-6 object-contain" />
            </button>
          </div>

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2">
            <img src="/logo-text.png" alt="Dev Stack" className="h-8 object-contain" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" className="text-pink-600 hover:text-pink-700 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          {/* Sign In & Sign Up buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-1.5 transition">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-brand-gradient hover:opacity-95 px-5 py-1.5 rounded-full shadow-sm transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="block text-sm font-medium text-pink-600">Home</a>
            <a href="#technologies" className="block text-sm font-medium text-slate-600">Technologies</a>
            <a href="#projects" className="block text-sm font-medium text-slate-600">Projects</a>
            <a href="#about" className="block text-sm font-medium text-slate-600">About</a>
            <a href="#contact" className="block text-sm font-medium text-slate-600">Contact</a>
          </div>
        )}
      </header>

      {/* Hero / Banner Section */}
      <section id="home" className="pt-12 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build Your Ideal <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-md text-white font-semibold text-sm bg-brand-gradient hover:opacity-95 shadow-md transition"
              >
                Explore Technologies
              </a>
              <button className="px-6 py-3 rounded-md text-slate-700 font-semibold text-sm bg-white border border-slate-300 hover:bg-slate-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/banner-stack.png"
              alt="Development Stack Illustration"
              className="w-full max-w-md object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main id="technologies" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Explore the <span className="bg-brand-gradient bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 text-sm font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* 3-Column Technology Grid (Responsive: 1 mobile, 2 tablet, 3 desktop) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isSelected = myStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
                        <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                          {tech.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                        {tech.description}
                      </p>

                      {/* Details row */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                        <span className="font-medium bg-slate-100 px-2 py-0.5 rounded">
                          {tech.category}
                        </span>
                        <span>{tech.difficulty}</span>
                        <span className="flex items-center gap-1 font-semibold text-amber-500">
                          ★ <span className="text-slate-700">{tech.rating}</span>
                        </span>
                      </div>
                    </div>

                    {/* Add Button */}
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isSelected}
                      className={`mt-5 w-full py-2.5 rounded-lg text-xs font-semibold tracking-wide transition ${
                        isSelected
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                          : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                      }`}
                    >
                      {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Your Stack Sidebar */}
            <aside className="lg:col-span-1 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-20">
              <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {myStack.length > 0
                  ? `${myStack.length} Technology Selected`
                  : "No technologies selected yet."}
              </p>

              {/* Conditional Rendering */}
              {myStack.length === 0 ? (
                <div className="mt-6 border-2 border-dashed border-slate-200 rounded-xl py-10 px-4 text-center">
                  <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {myStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                        <div>
                          <p className="text-xs font-bold text-slate-800">{item.name}</p>
                          <span className="text-[10px] text-slate-500">{item.category}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-slate-400 hover:text-red-500 text-sm font-semibold p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={handleRemoveAll}
                    className="mt-4 w-full py-2.5 rounded-lg text-xs font-semibold border border-red-200 text-red-600 hover:bg-red-50 transition"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </aside>

          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-3">
            <img src="/logo-text.png" alt="Dev Stack" className="h-7 object-contain" />
            <p className="max-w-xs text-slate-500 leading-relaxed">
              Curated tools, technologies, and resources to develop and build modern software.
            </p>
            <div className="flex space-x-4 pt-1 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-700">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-700">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-700">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 tracking-wider uppercase mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-slate-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 tracking-wider uppercase mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 tracking-wider uppercase mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#privacy" className="hover:text-slate-600">Privacy</a>
              <a href="#terms" className="hover:text-slate-600">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}