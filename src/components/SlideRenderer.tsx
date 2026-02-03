import type { SlideContent } from '../data/slides';
import { ArrowRight, TrendingUp, Zap, Activity, Cpu, Database, Search, MessageSquare } from 'lucide-react';

interface Props {
    slide: SlideContent;
}

const SlideRenderer: React.FC<Props> = ({ slide }) => {
    const isTitleSlide = slide.id === 1;
    const isTOC = slide.id === 2;

    return (
        <div className={`slide-wrapper ${isTitleSlide ? 'title-slide' : ''}`}>
            <div className="slide-content">
                <span className="purpose-label">Slide {slide.id} — {slide.purpose}</span>

                {isTitleSlide ? (
                    <div className="hero-section">
                        <h1 className="slide-title">{slide.title}</h1>
                        <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    </div>
                ) : (
                    <h1 className="slide-title">{slide.title}</h1>
                )}

                <div className="slide-section">
                    {typeof slide.overview === 'string' && (
                        <p className="overview-text">{slide.overview}</p>
                    )}

                    {isTOC && Array.isArray(slide.overview) && (
                        <div className="toc-line">
                            {slide.overview.map((item, idx) => (
                                <div key={idx} className="toc-item">
                                    <div className="toc-dot"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.id === 4 && slide.points && (
                        <div className="dimensions-grid">
                            {slide.points.map((point, idx) => {
                                const [title, desc] = point.split(' — ');
                                return (
                                    <div key={idx} className="dimension-card">
                                        <div className="dimension-header">
                                            <div className="dot"></div>
                                            {title}
                                        </div>
                                        {desc && <p style={{ fontSize: '0.9rem', color: '#666' }}>{desc}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {slide.id === 5 && slide.points && (
                        <div className="challenges-list">
                            {slide.points.map((point, idx) => (
                                <div key={idx} className="challenge-item">
                                    <div className="challenge-number">{idx + 1}</div>
                                    <div className="challenge-text">{point}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.id === 14 && slide.points && (
                        <div className="flow-container">
                            {[
                                { icon: MessageSquare, title: "Ingest" },
                                { icon: Cpu, title: "Orchestration" },
                                { icon: Database, title: "Dynamic Logic" },
                                { icon: Activity, title: "Value Output" }
                            ].map((step, idx) => (
                                <div key={idx} className="flow-step">
                                    <div className="step-icon">
                                        <step.icon size={32} />
                                    </div>
                                    <div className="step-title">{step.title}</div>
                                    <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                                        {slide.points![idx]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.id === 15 && slide.points && (
                        <div className="grid-2">
                            {slide.points.map((point, idx) => {
                                const [title, desc] = point.split(': ');
                                return (
                                    <div key={idx} className="list-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <Search size={20} color="#007CC3" />
                                            <strong style={{ color: '#001F3F' }}>{title}</strong>
                                        </div>
                                        <span style={{ fontSize: '0.9rem', color: '#555' }}>{desc}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {![4, 5, 14, 15].includes(slide.id) && slide.points && (
                        <div className="grid-2">
                            {slide.points.map((point, idx) => (
                                <div key={idx} className="list-item">
                                    <Zap size={20} className="text-secondary" style={{ color: '#007CC3' }} />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.phases && (
                        <div className="phases-container">
                            {slide.phases.map((phase, idx) => (
                                <div key={idx} className="phase-card">
                                    <span className="phase-number">Phase 0{idx + 1}</span>
                                    <h3 className="phase-title">{phase.title}</h3>
                                    <ul style={{ listStyle: 'none' }}>
                                        {phase.items.map((item, iIdx) => (
                                            <li key={iIdx} style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                                <ArrowRight size={14} style={{ color: '#00D1FF' }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.metrics && (
                        <div className="metrics-grid">
                            {slide.metrics.map((metric, idx) => (
                                <div key={idx} className="metric-card">
                                    <TrendingUp size={24} style={{ color: '#007CC3', marginBottom: '1rem' }} />
                                    <span className="metric-value">{metric.value}</span>
                                    <span className="metric-label">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="sales-message">
                {slide.salesMessage}
            </div>
        </div>
    );
};

export default SlideRenderer;
