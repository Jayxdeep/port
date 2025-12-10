import { ArrowUpRight } from 'lucide-react'; // Import icon
import styles from './Header.module.css';

interface HeaderProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  resume: string; // Add type
}

export const Header = ({ name, role, bio, avatar, resume }: HeaderProps) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.role}>{role}</div>
        <p className={styles.bio}>{bio}</p>

        {/* RESUME LINK ADDED HERE */}
        <a 
          href={resume} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.resumeLink}
        >
          View Resume <ArrowUpRight size={18} />
        </a>

      </div>

      <img 
        src={avatar} 
        alt={`${name} avatar`} 
        className={styles.avatar}
      />
    </header>
  );
};