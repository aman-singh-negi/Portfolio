import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import blockchainCertificate from '../assets/Blockchain Fundamentals.png';
import flipkartCertificate from '../assets/Flipkart Grid6.0.png';
import mlCertificate from '../assets/Machine Learning by Andrew NG.png';
import sihCertificate from '../assets/SIH Certificate.png';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
};

const certificates: Certificate[] = [
  {
    title: 'Smart India Hackathon Finalist',
    issuer: 'Ministry of Education, Government of India',
    date: '2024',
    description: 'Finalist recognition for an AI-driven institutional inspection system.',
    image: sihCertificate,
    link: 'https://drive.google.com/open?id=1QmfF8yLnm3gQ_Ep3vLWdrmIri9lKww7m&usp=drive_fs',
  },
  {
    title: 'Flipkart Grid 6.0',
    issuer: 'Unstop',
    date: '2024',
    description: 'Placed in the top 10% of the Flipkart GRID 6.0 Tech Quiz.',
    image: flipkartCertificate,
    link: 'https://drive.google.com/open?id=1N3Qq1nuYx9d62wqTjcSX8qNI60B-gDR1&usp=drive_fs',
  },
  {
    title: 'Machine Learning by Andrew Ng',
    issuer: 'Coursera',
    date: '2023',
    description: 'Covered supervised learning foundations including regression and classification.',
    image: mlCertificate,
    link: 'https://coursera.org/share/fef50358f2e642a45db3ec05676a81d8',
  },
  {
    title: 'Blockchain Fundamentals',
    issuer: 'Chainlink',
    date: '2024',
    description: 'Completed a fundamentals course focused on blockchain concepts and applications.',
    image: blockchainCertificate,
    link: 'https://drive.google.com/open?id=1jhrWRohikaWw_rV5WSnfYtuB3rU1TeOu&usp=drive_fs',
  },
];

interface CertificatesProps {
  fullPage?: boolean;
  onBackToHome?: () => void;
}

const Certificates = ({ fullPage = false, onBackToHome }: CertificatesProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="certificates" className={fullPage ? 'pb-24' : 'section-shell'}>
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <p className="display-eyebrow">Certificates</p>
          <div className="section-kicker">Recognition and continued learning</div>
          <h2 className="section-title">
            {fullPage ? 'A fuller view of certifications and recognition.' : 'Credentials that support the broader engineering story.'}
          </h2>
          <p className="section-copy">
            A mix of competition-based recognition and self-driven learning that reinforces the broader product and engineering narrative.
          </p>
        </div>
        {fullPage && onBackToHome ? (
          <button onClick={onBackToHome} className="btn-secondary self-start lg:self-auto">
            <FiArrowLeft />
            Back to home
          </button>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="premium-panel overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={certificate.image} alt={certificate.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,8,16,0.55))]" />
            </div>
            <div className="relative z-10 flex h-[calc(100%-14rem)] flex-col p-6">
              <p className="display-eyebrow">{certificate.issuer} / {certificate.date}</p>
              <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--heading)]">
                {certificate.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--text-muted)]">{certificate.description}</p>
              {certificate.link ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--heading)]"
                >
                  View credential
                  <FiArrowUpRight />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
