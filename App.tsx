import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  X, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  LayoutDashboard, 
  PlayCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperimentEngine() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#111e21] text-white overflow-hidden relative font-sans selection:bg-[#20bfdf] selection:text-black">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#20bfdf]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container Scaled to fit 600x600 */}
      <div className="relative z-10 w-[1000px] origin-center transform scale-[0.55] sm:scale-[0.55]">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-[#1a2629]/75 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#1a2629]/40 backdrop-blur-md z-20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BarChart2 className="text-[#20bfdf] w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#20bfdf]/80">Project Apex: Performance Metrics</span>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white">
                Experiment Engine <span className="text-[#20bfdf]">v2.0</span>
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Status</span>
                <span className="text-xs font-bold text-[#0bda54] flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0bda54] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0bda54]"></span>
                  </span>
                  Scaling Complete
                </span>
              </div>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid Content */}
          <div className="p-8 grid grid-cols-4 gap-6">
            
            {/* Metric Card: Growth ROI */}
            <motion.div 
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(32, 191, 223, 0.3)' }}
              className="col-span-1 bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Growth ROI</span>
                  <span className="text-3xl font-black text-white group-hover:text-[#20bfdf] transition-colors">300%</span>
                </div>
                <div className="p-2 rounded-lg bg-[#20bfdf]/10 text-[#20bfdf]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div className="h-12 w-full flex items-end gap-1 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                {[0.2, 0.35, 0.25, 0.5, 0.75, 1.0].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 100}%` }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex-1 rounded-t-sm"
                    style={{ backgroundColor: `rgba(32, 191, 223, ${0.2 + (i * 0.15)})` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Metric Card: Total Leads */}
            <motion.div 
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(32, 191, 223, 0.3)' }}
              className="col-span-1 bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Total Leads</span>
                  <span className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors">50.2k</span>
                </div>
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-purple-600 to-[#20bfdf] rounded-full"
                />
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-bold">Target: 60k</span>
                <span className="text-[10px] text-purple-400 font-bold">+12% MoM</span>
              </div>
            </motion.div>

            {/* Wide Card: Strategy */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="col-span-2 bg-white/[0.03] border border-white/5 rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-[#20bfdf] flex items-center justify-center text-[#111e21]">
                  <Trophy className="w-[18px] h-[18px]" />
                </div>
                <h4 className="text-lg font-bold text-white">Strategy: <span className="text-[#20bfdf] italic">Variant B</span></h4>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 relative z-10">
                {[
                  "Hyper-personalized landing headlines",
                  "Zero-latency API middleware",
                  "Predictive CTA intent triggers",
                  "Segmented multi-channel attribution"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#20bfdf] w-[14px] h-[14px] mt-0.5" />
                    <span className="text-xs font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Metric Card: Conversion Lift */}
            <motion.div 
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(32, 191, 223, 0.3)' }}
              className="col-span-1 bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 border-l-4 border-l-[#0bda54]"
            >
              <div>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-1">Conversion Lift</span>
                <span className="text-3xl font-black text-white">+24.8%</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 uppercase">Confidence</span>
                  <span className="text-xs font-bold text-[#20bfdf]">99.2%</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-gray-500 uppercase">Deviation</span>
                  <span className="text-xs font-bold text-gray-300">±0.4%</span>
                </div>
              </div>
            </motion.div>

            {/* Metric Card: CPL Reduction */}
            <motion.div 
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(32, 191, 223, 0.3)' }}
              className="col-span-1 bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 border-l-4 border-l-purple-500"
            >
              <div>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block mb-1">CPL Reduction</span>
                <span className="text-3xl font-black text-white">-42.0%</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-full bg-purple-500"
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400">Optimized</span>
              </div>
            </motion.div>

            {/* Wide Card: Iteration Velocity */}
            <motion.div 
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(32, 191, 223, 0.3)' }}
              className="col-span-2 bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Iteration Velocity</span>
                <div className="px-2 py-0.5 rounded bg-[#20bfdf]/10 border border-[#20bfdf]/20 text-[9px] font-bold text-[#20bfdf] uppercase">Active Cycle</div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] mb-2 font-bold uppercase text-gray-500">
                    <span>Stage</span>
                    <span>Scale</span>
                  </div>
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-[#20bfdf] rounded-full shadow-[0_0_10px_rgba(32,191,223,0.4)]"
                      animate={{ 
                        width: ["0%", "100%", "0%"],
                        x: ["-100%", "0%", "100%"]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="absolute inset-y-0 left-0 w-full bg-[#20bfdf] opacity-20 rounded-full"></div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">4.2</span>
                  <span className="text-[10px] text-gray-500 font-bold block">Exp / Week</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Footer */}
          <div className="p-8 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#1a2629] bg-gray-600"></div>
                <div className="w-8 h-8 rounded-full border-2 border-[#1a2629] bg-[#20bfdf]/20 flex items-center justify-center text-white text-[8px] font-bold">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#1a2629] bg-purple-600/20 flex items-center justify-center text-white text-[8px] font-bold">
                  +4
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">Analytics team reviewing live data</span>
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <button className="flex-1 sm:px-10 h-12 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-colors border border-white/10">
                Export Raw Data
              </button>
              <button className="flex-1 sm:px-10 h-12 rounded-lg relative overflow-hidden font-bold text-sm flex items-center justify-center gap-2 group transition-all text-white">
                <div className="absolute inset-0 bg-white/5 border border-transparent rounded-lg z-0" />
                <div className="absolute inset-[-1px] rounded-lg bg-gradient-to-r from-[#20bfdf] to-purple-600 -z-10" />
                <div className="absolute inset-[1px] rounded-lg bg-[#1a2629] -z-10 group-hover:bg-[#1a2629]/80 transition-colors" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Full Report
                  <ArrowRight className="w-[18px] group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
