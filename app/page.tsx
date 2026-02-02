"use client";
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function JarvisPro() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="relative min-h-screen bg-[#020617] text-cyan-400 font-mono overflow-hidden p-6">
      
      {/* BACKGROUND SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />

      {/* TOP HUD NAV */}
      <div className="flex justify-between items-start w-full max-w-6xl mx-auto border-b border-cyan-900/50 pb-4 mb-8">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="fill-cyan-400" size={18} /> J.A.R.V.I.S.
          </h1>
          <p className="text-[10px] text-cyan-700 uppercase">Integrated Intelligence System</p>
        </motion.div>
        
        <div className="flex gap-6 text-[10px]">
          <div className="flex flex-col items-end">
            <span className="text-cyan-700">CORE_TEMP</span>
            <span className="text-cyan-400">32°C</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-cyan-700">ENCRYPTION</span>
            <span className="text-emerald-500 flex items-center gap-1"><ShieldCheck size={10}/> AES-256</span>
          </div>
        </div>
      </div>

      {/* CENTRAL ANIMATED CORE */}
      <div className="relative flex justify-center py-10">
        {/* Pulsing Outer Ring */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 border border-dashed border-cyan-500/30 rounded-full"
        />
        
        {/* The "Thinking" Core */}
        <motion.div 
          animate={{ 
            boxShadow: ["0 0 20px rgba(6,182,212,0.3)", "0 0 60px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0.3)"] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="z-10 w-32 h-32 bg-cyan-500/10 border-2 border-cyan-400 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <Activity className="text-cyan-400 animate-pulse" size={40} />
        </motion.div>
      </div>

      {/* CHAT TERMINAL */}
      <div className="max-w-3xl mx-auto w-full flex flex-col h-[50vh]">
        <div className="flex-1 overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-cyan-900">
          <AnimatePresence mode="popLayout">
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-sm text-sm border ${
                  m.role === 'user' 
                  ? 'bg-cyan-950/20 border-cyan-800 text-cyan-200' 
                  : 'bg-black/40 border-transparent text-cyan-400'
                }`}>
                  <span className="text-[10px] block opacity-50 mb-1">
                    {m.role === 'user' ? '// AUTHORIZED USER' : '// JARVIS PROTOCOL'}
                  </span>
                  {m.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* INPUT BOX */}
        <motion.form 
          onSubmit={handleSubmit}
          className="mt-6 relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="absolute -top-4 left-0 text-[9px] text-cyan-600 flex gap-2">
            <span className="animate-pulse">●</span> INPUT_AWAITING_COMMAND
          </div>
          <input
            className="w-full bg-black/60 border-b border-cyan-500/50 py-4 px-10 text-cyan-100 placeholder:text-cyan-900 focus:outline-none focus:border-cyan-400 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            value={input}
            placeholder="Direct inquiry to system..."
            onChange={handleInputChange}
          />
          <Terminal className="absolute left-2 top-4 opacity-40 text-cyan-400" size={18} />
        </motion.form>
      </div>
    </main>
  );
}