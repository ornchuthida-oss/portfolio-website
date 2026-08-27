import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Education } from '@/pages/Education';
import { SkillsProjects } from '@/pages/SkillsProjects';
import { Contact } from '@/pages/Contact';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Sync with URL hash for shareable links & back-button support
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const valid: Page[] = ['home', 'about', 'education', 'skills', 'contact'];
    if (hash && valid.includes(hash as Page)) {
      setPage(hash as Page);
    }
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (valid.includes(h as Page)) setPage(h as Page);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Update hash on navigation
  useEffect(() => {
    if (window.location.hash !== `#${page}`) {
      window.history.replaceState(null, '', `#${page}`);
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar current={page} onNavigate={navigate} />
      <main>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About onNavigate={navigate} />}
        {page === 'education' && <Education onNavigate={navigate} />}
        {page === 'skills' && <SkillsProjects onNavigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
