import { GitHubCalendar } from 'react-github-calendar';
import { portfolioData } from './data/content';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      {/* 1. Header Section */}
      <Header 
        name={portfolioData.name} 
        role={portfolioData.role} 
        bio={portfolioData.bio} 
        avatar={portfolioData.avatar}
        resume={portfolioData.resume}
      />

      <main>
        {/* 2. New Section: Coding Activity (The Graph) */}
        <div style={{ marginBottom: '4rem', marginTop: '1rem' }}>
           <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
             Coding Activity
           </h2>
           
           {/* We wrap it in a div to handle responsiveness cleanly */}
           <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
             <GitHubCalendar 
               username={portfolioData.githubUsername}
               colorScheme="dark"
               blockSize={13}
               blockMargin={4}
               fontSize={12}
               /* This theme matches the GitHub Dark Mode green aesthetic */
               theme={{
                 dark: [
                   '#161b22', // Empty block (dark grey)
                   '#0e4429', // Level 1 (dim green)
                   '#006d32', // Level 2
                   '#26a641', // Level 3
                   '#39d353', // Level 4 (bright neon green)
                 ],
               }}
             />
           </div>
        </div>

        {/* 3. Projects Section */}
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

      {/* 4. Footer Section */}
      <Footer socials={portfolioData.socials} />
    </div>
  )
}

export default App;