import React from 'react';
import { LayoutDashboard, CheckSquare, Sparkles, Zap, Smartphone, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

const Features: React.FC = () => {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: <LayoutDashboard size={24} className="text-white" />,
      title: "Task Management",
      description: "Organize your daily tasks with priority levels and categories."
    },
    {
      icon: <CheckSquare size={24} className="text-white" />,
      title: "Notes Integration",
      description: "Keep your thoughts and to-dos in one unified workspace."
    },
    {
      icon: <Sparkles size={24} className="text-white" />,
      title: "Custom Themes",
      description: "Personalize your dashboard with 6 beautiful color themes."
    },
    {
      icon: <Zap size={24} className="text-white" />,
      title: "Productivity Focus",
      description: "Designed to minimize distractions and maximize output."
    },
    {
      icon: <Smartphone size={24} className="text-white" />,
      title: "Responsive Design",
      description: "Works perfectly on desktop, tablet, and mobile devices."
    },
    {
      icon: <CheckCircle2 size={24} className="text-white" />,
      title: "Real-time Updates",
      description: "Changes save instantly to keep your data safe."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Everything you need to succeed.</h2>
          <p className="text-slate-500 text-xl font-medium">Lumina gives you the tools to manage your work without the clutter.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 transition-transform group-hover:rotate-6"
                style={{ backgroundColor: '#4F46E5' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
