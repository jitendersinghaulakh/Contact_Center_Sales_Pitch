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
        <div className="logo">
          INFOSYS <span style={{ fontWeight: 300 }}>Consulting</span>
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

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <button
            className="btn-download"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => generatePPT(slides)}
          >
            <Download size={18} />
            Download PPT
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Presentation size={24} color="#007CC3" />
            <span style={{ fontWeight: 600, color: '#001F3F' }}>Executive Presentation</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              className="nav-btn"
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              style={{ background: 'none', border: '1px solid #ddd', borderRadius: '50%', padding: '10px', cursor: 'pointer', opacity: currentSlideIndex === 0 ? 0.3 : 1 }}
            >
              <ChevronLeft size={24} />
            </button>
            <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
              Slide {currentSlideIndex + 1} of {slides.length}
            </span>
            <button
              className="nav-btn"
              onClick={nextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              style={{ background: 'none', border: '1px solid #ddd', borderRadius: '50%', padding: '10px', cursor: 'pointer', opacity: currentSlideIndex === slides.length - 1 ? 0.3 : 1 }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </header>

        <section className="slide-container">
          <SlideRenderer slide={slides[currentSlideIndex]} />
        </section>
      </main>
    </div>
  );
}

export default App;
