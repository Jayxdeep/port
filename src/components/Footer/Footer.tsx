import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Footer.module.css';

interface FooterProps {
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
}

export const Footer = ({ socials }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {/* GitHub Icon */}
        <a 
          href={socials.github} 
          target="_blank" 
          rel="noreferrer" 
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        {/* LinkedIn Icon */}
        <a 
          href={socials.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className={styles.iconLink}
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>

        {/* Twitter Icon (Optional - only shows if you have a link) */}
        {socials.twitter && (
          <a 
            href={socials.twitter} 
            target="_blank" 
            rel="noreferrer" 
            className={styles.iconLink}
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        )}

        {/* Email Icon */}
        <a 
          href={socials.email} 
          className={styles.iconLink}
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
      
      <div className={styles.copy}>
        © {new Date().getFullYear()} • Jaydeep Mukherjee
      </div>
    </footer>
  );
};