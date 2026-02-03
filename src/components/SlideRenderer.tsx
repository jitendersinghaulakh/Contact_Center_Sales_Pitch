import type { SlideContent } from '../data/slides';
import { ArrowRight, TrendingUp, Zap, Search, Box } from 'lucide-react';

interface Props {
    slide: SlideContent;
}

const SlideRenderer: React.FC<Props> = ({ slide }) => {
    const isTitleSlide = slide.id === 1;
    const isTOC = slide.id === 2;

    return (
        <div className={`slide-wrapper ${isTitleSlide ? 'title-slide' : ''} slide-id-${slide.id}`}>
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
                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <div className="toc-grid">
                                {slide.overview.map((item, idx) => {
                                    // Split content into title and subtitle if possible, or just use generic description
                                    const title = item.includes(' - ') ? item.split(' - ')[0] : item;
                                    const description = "Strategic framework and implementation highlights.";
                                    return (
                                        <div key={idx} className="toc-card">
                                            <div className="toc-badge">0{idx + 1}</div>
                                            <div className="toc-card-title">{title}</div>
                                            <div className="toc-card-description">{description}</div>
                                        </div>
                                    );
                                })}
                                {/* Add an empty dashed card if there's space for a 6th item */}
                                {slide.overview.length === 5 && (
                                    <div className="toc-card toc-empty-card"></div>
                                )}
                            </div>
                            <div className="toc-footer-icon">
                                <Box size={32} />
                            </div>
                        </div>
                    )}

                    {slide.id === 5 && slide.points && (
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

                    {slide.id === 6 && slide.points && (
                        <div className="challenges-list">
                            {slide.points.map((point, idx) => (
                                <div key={idx} className="challenge-item">
                                    <div className="challenge-number">{idx + 1}</div>
                                    <div className="challenge-text">{point}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {slide.id === 3 && slide.points && (
                        <div className="look-of-ai-container">
                            <div className="corner-dec-tr"></div>
                            <div className="corner-dec-bl"></div>
                            <div className="look-of-ai-flow">
                                {/* Pillar 1: INGEST */}
                                <div className="look-of-ai-step">
                                    <div className="look-of-ai-icon-box">
                                        <svg width="120" height="120" viewBox="0 0 120 120">
                                            {/* Phone */}
                                            <path d="M25 40c0-5 5-10 10-10h10l5 10-5 10c-5 0-10 5-10 10v10c0 5 5 10 10 10l5 10-5 10H35c-5 0-10-5-10-10V40z" fill="#00BFB3" />
                                            {/* Chat */}
                                            <rect x="50" y="30" width="30" height="20" rx="4" fill="#00BFB3" />
                                            <circle cx="58" cy="40" r="2" fill="white" />
                                            <circle cx="65" cy="40" r="2" fill="white" />
                                            <circle cx="72" cy="40" r="2" fill="white" />
                                            {/* Network nodes */}
                                            <circle cx="95" cy="35" r="3" fill="#00BFB3" opacity="0.6" />
                                            <circle cx="85" cy="50" r="3" fill="#00BFB3" opacity="0.6" />
                                            <circle cx="105" cy="55" r="3" fill="#00BFB3" opacity="0.6" />
                                            <path d="M95 35l-10 15M95 35l10 20M85 50l20 5" stroke="#00BFB3" strokeWidth="1" opacity="0.6" />
                                            {/* Mail */}
                                            <rect x="65" y="65" width="35" height="25" fill="none" stroke="#333" strokeWidth="2" />
                                            <path d="M65 65l17.5 12.5L100 65" stroke="#333" strokeWidth="2" fill="none" />
                                        </svg>
                                        <div className="look-of-ai-arrow-spacer">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                    <div className="look-of-ai-title">INGEST</div>
                                    <div className="look-of-ai-desc">{slide.points[0]}</div>
                                </div>

                                {/* Pillar 2: ORCHESTRATION */}
                                <div className="look-of-ai-step">
                                    <div className="look-of-ai-icon-box">
                                        <svg width="120" height="120" viewBox="0 0 120 120">
                                            {/* Gears */}
                                            <circle cx="40" cy="50" r="15" fill="none" stroke="#00BFB3" strokeWidth="3" />
                                            <circle cx="40" cy="75" r="10" fill="none" stroke="#00BFB3" strokeWidth="3" />
                                            <path d="M35 35l10 10M35 65l10-10" stroke="#00BFB3" strokeWidth="2" />
                                            {/* Brain */}
                                            <path d="M70 40c-10 0-15 10-15 20s5 20 15 20h10c10 0 15-10 15-20s-5-20-15-20H70z" fill="none" stroke="#333" strokeWidth="2" />
                                            <path d="M85 40v40M75 50h20M75 70h20" stroke="#333" strokeWidth="1" />
                                        </svg>
                                        <div className="look-of-ai-arrow-spacer">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                    <div className="look-of-ai-title">ORCHESTRATION</div>
                                    <div className="look-of-ai-desc">{slide.points[1]}</div>
                                </div>

                                {/* Pillar 3: DYNAMIC LOGIC */}
                                <div className="look-of-ai-step">
                                    <div className="look-of-ai-icon-box">
                                        <svg width="120" height="120" viewBox="0 0 120 120">
                                            <circle cx="60" cy="30" r="10" fill="none" stroke="#00BFB3" strokeWidth="4" />
                                            <circle cx="30" cy="65" r="10" fill="none" stroke="#00BFB3" strokeWidth="4" />
                                            <circle cx="90" cy="65" r="10" fill="none" stroke="#00BFB3" strokeWidth="4" />
                                            <circle cx="45" cy="100" r="10" fill="none" stroke="#00BFB3" strokeWidth="4" />
                                            <circle cx="75" cy="100" r="10" fill="none" stroke="#00BFB3" strokeWidth="4" />
                                            <path d="M60 40v15M30 65h60M45 65v25M75 65v25" stroke="#00BFB3" strokeWidth="3" fill="none" />
                                        </svg>
                                        <div className="look-of-ai-arrow-spacer">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                    <div className="look-of-ai-title">DYNAMIC LOGIC</div>
                                    <div className="look-of-ai-desc">{slide.points[2]}</div>
                                </div>

                                {/* Pillar 4: VALUE OUTPUT */}
                                <div className="look-of-ai-step">
                                    <div className="look-of-ai-icon-box">
                                        <svg width="120" height="120" viewBox="0 0 120 120">
                                            <path d="M60 20a40 40 0 1 1-30 13" fill="none" stroke="#00BFB3" strokeWidth="8" strokeLinecap="round" />
                                            <path d="M20 33l15-5 5 15" fill="none" stroke="#00BFB3" strokeWidth="8" strokeLinejoin="round" />
                                            <path d="M60 100a40 40 0 1 1 30-13" fill="none" stroke="#00BFB3" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
                                        </svg>
                                    </div>
                                    <div className="look-of-ai-title">VALUE OUTPUT</div>
                                    <div className="look-of-ai-desc">{slide.points[3]}</div>
                                </div>
                            </div>
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

                    {![3, 5, 6, 15].includes(slide.id) && slide.points && (
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
