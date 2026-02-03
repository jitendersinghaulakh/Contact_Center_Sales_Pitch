import { useState } from 'react';
import { slides } from './data/slides';
import SlideRenderer from './components/SlideRenderer';
import { generatePPT } from './utils/generatePPT';
import { Download, ChevronRight, ChevronLeft, Presentation } from 'lucide-react';
import './styles/index.css';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo-section">
          <div className="infosys-logo">
            INFOSYS <span>Consulting</span>
          </div>
        </div>

        <div style={{ padding: '0 15px 20px' }}>
          <button
            className="download-btn"
            style={{ width: '100%', margin: '0' }}
            onClick={() => generatePPT(slides)}
          >
            <Download size={18} />
            Download PPT
          </button>
        </div>

        <div className="nav-list">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`nav-item ${currentSlideIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentSlideIndex(index)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{slide.id.toString().padStart(2, '0')}</span>
                {slide.title}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Presentation size={24} color="#007CC3" />
            <span style={{ fontWeight: 600, color: '#001F3F' }}>Executive Presentation</span>
          </div>
        </header>

        <section className="slide-wrapper">
          <SlideRenderer slide={slides[currentSlideIndex]} />
        </section>

        <footer className="footer-nav">
          <div className="nav-controls">
            <button
              className="nav-btn"
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="counter-box">
              <span className="current">Slide {currentSlideIndex + 1}</span>
              <span className="total">of {slides.length}</span>
            </div>
            <button
              className="nav-btn"
              onClick={nextSlide}
              disabled={currentSlideIndex === slides.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
