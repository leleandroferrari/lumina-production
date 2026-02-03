
import React from 'react';
import { Zap } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

const Navbar: React.FC = () => {
  const { currentTheme } = useTheme();

  // Map theme names to hex colors for landing page compatibility
  const getThemeColor = (theme: string) => {
    // Simple mapping for now, or we can use the actual CSS variables if we refactor content
    // But since landing page used specific hexes, let's keep it robust
    return '#4F46E5';
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-100"
            style={{ backgroundColor: '#4F46E5' }}
          >
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Lumina</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Product</a>
          <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/login" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-slate-900 px-4 py-2 transition-colors">
            Log in
          </a>
          <a
            href="/dashboard"
            className="text-sm font-bold text-white px-6 py-2.5 rounded-xl shadow-lg shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all"
            style={{ backgroundColor: '#4F46E5' }}
          >
            Try for free
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
