import styles from './ProjectCard.module.css';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const ProjectCard = ({ title, description, tech, link }: ProjectProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {/* Optional: Add an arrow icon here if you want */}
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {tech.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
};