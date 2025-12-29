import { GitHubCalendar } from 'react-github-calendar';
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
        resume={portfolioData.resume}
      />
      <main>
        <div style={{ marginBottom: '4rem', marginTop: '1rem' }}>
           <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
             Coding Activity
           </h2>
           <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
             <GitHubCalendar 
               username={portfolioData.githubUsername}
               colorScheme="dark"
               blockSize={13}
               blockMargin={4}
               fontSize={12}
               theme={{
                 dark: [
                   '#161b22',
                   '#0e4429', 
                   '#006d32', 
                   '#26a641',
                   '#39d353', 
                 ],
               }}
             />
           </div>
        </div>
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