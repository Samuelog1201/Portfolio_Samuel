import { Navbar, Footer } from './components'
import {
  HeroSection,
  VideoSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ProcessSection,
  ExperienceSection,
  EducationSection,
  ContactSection
} from './sections'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
