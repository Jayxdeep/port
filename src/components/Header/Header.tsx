import styles from './Header.module.css';
interface HeaderProps {
  name: string;
  role: string;
  bio: string;
  avatar: string; // Add the new prop type here
}

export const Header = ({ name, role, bio, avatar }: HeaderProps) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.role}>{role}</div>
        <p className={styles.bio}>{bio}</p>
      </div>
      <img 
        src={avatar} 
        alt={`${name} avatar`} 
        className={styles.avatar}
        width={120}
        height={120}
      />
    </header>
  );
};