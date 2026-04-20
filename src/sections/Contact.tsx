import { useState } from 'react';


const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'typing' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative z-10 w-full min-h-[80vh] flex flex-col justify-center bg-dark/40 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        <div className="mb-16 border-b border-accent1/20 pb-4">
          <span className="font-mono text-accent1 text-sm tracking-widest uppercase mb-2 block">
            [ SECURE TRANSMISSION CHANNEL ]
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-2">
            Establish Link
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col font-mono text-sm relative">
          
          <div className="group relative">
            <label className="text-muted text-xs uppercase tracking-widest mb-1 block group-focus-within:text-accent1 transition-colors">
              // Identify Origin (Name)
            </label>
            <input 
              type="text" 
              required
              className="w-full bg-obsidian/50 border border-white/10 rounded focus:border-accent1 focus:outline-none focus:bg-accent1/5 px-4 py-3 text-white transition-all placeholder:text-white/20"
              placeholder="GUEST_USER"
            />
          </div>

          <div className="group relative">
            <label className="text-muted text-xs uppercase tracking-widest mb-1 block group-focus-within:text-accent1 transition-colors">
              // Reply Protocol (Email)
            </label>
            <input 
              type="email" 
              required
              className="w-full bg-obsidian/50 border border-white/10 rounded focus:border-accent1 focus:outline-none focus:bg-accent1/5 px-4 py-3 text-white transition-all placeholder:text-white/20"
              placeholder="NODE@NETWORK.COM"
            />
          </div>

          <div className="group relative">
            <label className="text-muted text-xs uppercase tracking-widest mb-1 block group-focus-within:text-accent1 transition-colors">
              // Payload Details (Message)
            </label>
            <textarea 
              required
              rows={5}
              className="w-full bg-obsidian/50 border border-white/10 rounded focus:border-accent1 focus:outline-none focus:bg-accent1/5 px-4 py-3 text-white transition-all placeholder:text-white/20 resize-none font-sans"
              placeholder="Input encrypted data stream..."
              onFocus={() => setStatus('typing')}
              onBlur={() => setStatus('idle')}
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="text-xs font-mono text-muted uppercase">
              {status === 'idle' && <span>SYSTEM_READY</span>}
              {status === 'typing' && <span className="text-accent1 animate-pulse">AWAITING_INPUT...</span>}
              {status === 'sending' && <span className="text-accent2 animate-pulse">TRANSMITTING_PACKETS...</span>}
              {status === 'sent' && <span className="text-emerald-400">TRANSMISSION_SUCCESSFUL</span>}
            </div>

            <button 
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="magnetic px-8 py-3 bg-white text-dark font-display font-bold uppercase tracking-widest text-sm hover:bg-accent1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status === 'sending' ? 'Transmitting' : status === 'sent' ? 'Delivered' : 'Transmit'}
            </button>
          </div>

        </form>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent1/30 -ml-4 -mt-4 opacity-50"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent1/30 -mr-4 -mt-4 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent1/30 -ml-4 -mb-4 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent1/30 -mr-4 -mb-4 opacity-50"></div>
        
      </div>
    </section>
  );
};

export default Contact;