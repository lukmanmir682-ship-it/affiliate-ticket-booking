import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MultiTimezoneClock from './components/MultiTimezoneClck';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-400">TicketHub</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="hidden md:flex gap-8 text-slate-300">
              <a href="#" className="hover:text-white transition">Dashboard</a>
              <a href="#" className="hover:text-white transition">Clock</a>
              <a href="#" className="hover:text-white transition">Analytics</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <MultiTimezoneClock />
    </div>
  );
}

export default App;
