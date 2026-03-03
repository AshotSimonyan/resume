import Navbar from './components/AppShell/Navbar';
import CursorFollower from './components/common/CursorFollower';
import AboutSection from './components/sections/AboutSection';
import ConnectSection from './components/sections/ConnectSection';
import HomeSection from './components/sections/HomeSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import { cvData } from './data/cvData';

function App() {
  return (
    <div className="app min-h-screen px-5 md:px-10 lg:px-0 text-white">
      <CursorFollower />
      <Navbar logoSrc={cvData.assets.logo} navLinks={cvData.navLinks} />

      <main>
        <HomeSection data={cvData} />
        <AboutSection data={cvData} />
        <ProjectsSection data={cvData} />
        <SkillsSection data={cvData} />
        <ConnectSection data={cvData} />
      </main>
    </div>
  );
}

export default App;
