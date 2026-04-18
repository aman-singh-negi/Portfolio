import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiAlertCircle, FiCheckCircle, FiMail, FiSend } from 'react-icons/fi';
import { addDoc, collection, Firestore, getDocs, limit, query, serverTimestamp } from 'firebase/firestore';
import { Analytics, logEvent } from 'firebase/analytics';
import { analytics, db } from '../firebase/config';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const reduceMotion = useReducedMotion();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [firebaseStatus, setFirebaseStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        if (!db) {
          throw new Error('Firestore database is not initialized');
        }

        const messagesQuery = query(collection(db as Firestore, 'messages'), limit(1));
        await getDocs(messagesQuery);

        if (analytics) {
          logEvent(analytics as Analytics, 'page_view', {
            page_title: 'Contact',
            page_location: window.location.href,
          });
        }

        setFirebaseStatus('connected');
      } catch (error) {
        console.error('Firebase connection error:', error);
        setFirebaseStatus('error');
      }
    };

    testFirebaseConnection();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      if (!db) {
        throw new Error('Firestore database is not initialized');
      }

      const docRef = await addDoc(collection(db as Firestore, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      if (analytics) {
        logEvent(analytics as Analytics, 'form_submit', {
          form_id: 'contact_form',
          document_id: docRef.id,
        });
      }

      setFormData({ name: '', email: '', message: '' });
      setFormStatus('success');
      window.setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      window.setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const inputClasses =
    'w-full rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-3.5 text-[color:var(--heading)] outline-none transition-colors duration-200 placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--border-strong)]';

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="display-eyebrow">Contact</p>
          <div className="section-kicker">Open for ambitious work</div>
          <h2 className="section-title">A direct, low-friction way to start a conversation.</h2>
          <p className="section-copy">
            Whether it&apos;s a project, collaboration, internship, or a strong technical conversation, I&apos;m open to hearing from you.
          </p>

          <div className="editorial-card rounded-[1.8rem] p-6">
            <p className="display-eyebrow">Direct email</p>
            <a
              href="mailto:lavishnegi7249@gmail.com"
              className="mt-4 inline-flex items-center gap-3 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--heading)]"
            >
              <FiMail />
              lavishnegi7249@gmail.com
            </a>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
              Best for hiring conversations, project discussions, or opportunities where strong engineering and strong UX both matter.
            </p>
          </div>

          {firebaseStatus === 'error' ? (
            <div className="rounded-[1.5rem] border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              Firestore looks unavailable right now. Email is the safest contact route.
            </div>
          ) : null}
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="premium-panel rounded-[2rem] p-6 sm:p-8"
        >
          <div className="relative z-10 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[color:var(--heading)]">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name"
                  disabled={formStatus === 'submitting'}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[color:var(--heading)]">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="you@example.com"
                  disabled={formStatus === 'submitting'}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-[color:var(--heading)]">
              Message
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                className={`${inputClasses} resize-none`}
                placeholder="Tell me what you're building or what kind of opportunity you have in mind."
                disabled={formStatus === 'submitting'}
              />
            </label>

            <button type="submit" disabled={formStatus === 'submitting'} className="cta-primary mt-2 w-full transition-transform duration-200 hover:-translate-y-0.5">
              <FiSend />
              {formStatus === 'submitting' ? 'Sending...' : 'Send message'}
            </button>

            {formStatus === 'success' ? (
              <div className="flex items-center gap-3 rounded-[1.2rem] border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500">
                <FiCheckCircle />
                Your message was sent successfully.
              </div>
            ) : null}

            {formStatus === 'error' ? (
              <div className="flex items-center gap-3 rounded-[1.2rem] border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                <FiAlertCircle />
                There was a problem sending your message. Please try again or email directly.
              </div>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
