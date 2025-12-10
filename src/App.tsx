import { portfolioData } from './data/content';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header 
        name={portfolioData.name} 
        role={portfolioData.role} 
        bio={portfolioData.bio} 
        avatar={portfolioData.avatar}
      />

      <main>
        <h2 className={styles.sectionTitle}>Proof of Work</h2>
        <div className={styles.projectList}>
          {portfolioData.projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </main>
      <Footer socials={portfolioData.socials} />
    </div>
  )
}
export default App;