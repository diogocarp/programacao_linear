import  { useState } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import PageInicio from './content/PageInicio';
import PageDispersao from './content/PageDispersao';
import PageSobre from './content/PageSobre';
import PageDistribuicoes from './content/PageDistribuicoes';
import PageVideoAula from './content/PageVideoAula';
import PageExercicios from './content/PageExercios';
import PageBibliografia from './content/PageBibliografia';
import PageBlog from './content/PageBlog';

const AppContent = () => {
  const [currentSection, setCurrentSection] = useState('inicio');

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return <PageInicio/>
      case 'sobre-estatistica':
        return <PageSobre/>
      case 'medidas-dispersao':
        return <PageDispersao/>
      case 'distribuicoes-probabilidade':
        return <PageDistribuicoes/>;
      case 'video-aulas':
        return <PageVideoAula/>
      case 'exercicios':
        return <PageExercicios/>
      case 'bibliografia':
        return <PageBibliografia/>
      case 'sobre-o-blog':
        return <PageBlog/>;
      default:
        return <PageInicio/>
    }
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <AppHeader onNavClick={handleNavClick} />
        {renderSection()}
      <AppFooter/>
    </div>
  );
};

export default AppContent;
