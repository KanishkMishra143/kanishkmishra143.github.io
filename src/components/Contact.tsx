
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">Contact Me</h2>
      <div className="bg-slate-800/50 p-6 rounded-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-400 mb-2">Name</label>
            <input type="text" id="name" className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300/50" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-400 mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300/50" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-slate-400 mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-300/50"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 hover:bg-teal-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/50">
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
