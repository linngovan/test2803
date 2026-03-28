import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Target, LayoutDashboard, Search, Smartphone,
  MapPin, Clock, CheckCircle2, AlertCircle, Languages,
  ChevronDown, ArrowRight, ShieldAlert, Sparkles, Plus
} from 'lucide-react';
import { translations } from './i18n';
import './index.css';

const ExpandableCard = ({ title, children, icon: Icon, colorClass, highlight }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="glass-panel"
      style={{ overflow: 'hidden', cursor: 'pointer', borderColor: highlight ? 'var(--brand-color)' : '' }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div className={`icon-box ${colorClass}`}>
            <Icon size={24} />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} className="text-muted" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const [lang, setLang] = useState('vi');
  const t = translations[lang];

  return (
    <div>
      {/* Header */}
      <header>
        <div className="container header-content">
          <div className="logo">
            <div className="logo-dot"></div>
            Ngo Van Lin <span className="text-muted" style={{ fontWeight: 400 }}>| {t.headerTitle}</span>
          </div>
          <div className="language-toggle" onClick={() => setLang(lang === 'en' ? 'vi' : 'en')} title="Toggle Language">
            <Languages size={16} className="text-muted" style={{ marginLeft: 8, marginRight: 8 }} />
            <div className={`language-option ${lang === 'en' ? 'active' : ''}`}>EN</div>
            <div className={`language-option ${lang === 'vi' ? 'active' : ''}`}>VN</div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero container" style={{ paddingBottom: 60 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="badge" style={{ marginBottom: 24, fontSize: '1rem', padding: '6px 16px' }}>
            <Sparkles size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: 'text-bottom' }} />
            Product Management Case Study
          </div>
          <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '24px' }}>{t.heroTitle}</h1>
          <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {t.heroSubtitle}
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            style={{ marginTop: 60, color: 'var(--brand-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
          >
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.scrollDown}</span>
            <div style={{ width: 2, height: 60, background: 'linear-gradient(to bottom, var(--brand-color), transparent)' }}></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 1: Funnel */}
      <section className="container" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 16 }}><BarChart3 className="text-brand" /> {t.section1Title}</h2>
          <p style={{ fontSize: '1.125rem' }}>{t.section1Desc}</p>

          <div className="glass-panel" style={{ marginTop: 40, background: 'rgba(30, 41, 59, 0.4)' }}>
            <div className="funnel-container">
              {t.funnelSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.12 }} viewport={{ once: true }}
                  className={`funnel-step ${step.alert ? 'alert' : ''}`}
                  style={{ height: step.alert ? 72 : 60 }}
                >
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: step.width }} transition={{ delay: 0.6 + idx * 0.1, duration: 1, ease: "easeOut" }}
                    className="funnel-bar"
                  />
                  <div className="funnel-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <span className="text-muted" style={{ width: 24, fontWeight: 700 }}>{idx + 1}</span>
                      <span style={{ fontWeight: 600, width: 200, fontSize: step.alert ? '1.1rem' : '1rem' }}>{step.name}</span>
                      <span className="funnel-metric">{step.users} <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 400 }}>users</span></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24, paddingRight: 10 }}>
                      <span className="text-muted" style={{ width: 50, fontWeight: 600 }}>{step.conv}</span>
                      {step.drop ? (
                        <div className={step.alert ? 'funnel-drop' : 'text-muted'} style={{ display: 'flex', alignItems: 'center', gap: 6, width: 280, justifyContent: 'flex-end', fontSize: '0.875rem', fontWeight: step.alert ? 600 : 400 }}>
                          {step.alert ? <AlertCircle size={16} /> : null}
                          {step.drop}
                        </div>
                      ) : <div style={{ width: 280 }}></div>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Detailed Root Causes */}
      <section className="container" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 16 }}><Search className="text-brand" /> {t.section2Title}</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 40 }}>
            {t.rcs.map((rc, idx) => (
              <ExpandableCard
                key={idx}
                title={rc.title}
                icon={idx === 0 ? AlertCircle : idx === 1 ? MapPin : Smartphone}
                colorClass={idx === 0 ? "icon-danger" : "icon-brand"}
                highlight={idx === 0}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid var(--border-glass)', paddingTop: 20 }}>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 0 }}><strong>Overview:</strong> {rc.desc}</p>
                  <div className="bento-grid" style={{ gap: 16 }}>
                    <div className="bento-col-4" style={{ background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 8 }}>
                      <div className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Data Evidence</div>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{rc.evidence}</p>
                    </div>
                    <div className="bento-col-4" style={{ background: 'rgba(255,255,255,0.03)', padding: 16, borderRadius: 8 }}>
                      <div className="text-muted" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Qualitative Signal</div>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{rc.signal}</p>
                    </div>
                    <div className="bento-col-4" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--brand-color)', padding: 16, borderRadius: 8 }}>
                      <div className="text-brand" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, fontWeight: 700 }}>Business Impact</div>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{rc.impact}</p>
                    </div>
                  </div>
                </div>
              </ExpandableCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 3: Solutions Backlog */}
      <section className="container" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 16 }}><LayoutDashboard className="text-brand" /> {t.section3Title}</h2>

          <div className="bento-grid" style={{ marginTop: 40, gap: 32 }}>
            {t.epics.map((epic, idx) => (
              <div
                key={idx}
                className={`bento-col-${idx === 0 ? '12' : '6'} glass-panel`}
                style={{ background: idx === 0 ? 'linear-gradient(145deg, var(--bg-glass), rgba(255,130,40,0.08))' : 'var(--bg-glass)', position: 'relative' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <div>
                    <div className="badge" style={{ marginBottom: 12 }}>{epic.title}</div>
                    <div className="text-muted" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 6 }}><ArrowRight size={14} /> {epic.rc}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {epic.items.map((item, idxi) => (
                    <div key={idxi} style={{ background: 'var(--bg-primary)', padding: 16, borderRadius: 12, border: '1px dashed var(--border-glass)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{item.name}</strong>
                        <span className={`badge ${item.effort === 'Quick Win' ? 'badge-success' : ''}`} style={{ fontSize: '0.75rem' }}>{item.effort}</span>
                      </div>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>

                      {idx === 0 && idxi === 0 && (
                        <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: 8, borderLeft: '2px solid var(--brand-color)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><span>Service Base</span><span>200,000đ</span></div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, color: 'var(--text-muted)' }}><span>VAT (8%)</span><span>16,000đ</span></div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}><span>Travel Surcharge</span><span><AlertCircle size={12} style={{ display: 'inline', marginRight: 4 }} /> 20,000đ</span></div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-glass)', paddingTop: 8, marginTop: 8, fontWeight: 700 }}><span>Final Total</span><span className="text-brand">236,000đ</span></div>
                        </div>
                      )}

                      {idx === 0 && idxi === 1 && (
                        <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: 8, borderLeft: '2px solid var(--success)' }}>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 4 }}>Hiển thị ngay tại bước Chọn Ngày Giờ:</div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600 }}>
                             <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={14}/> Dự kiến chi phí:</span>
                             <span className="text-success">~ 200,000đ - 236,000đ</span>
                          </div>
                        </div>
                      )}

                      {idx === 1 && idxi === 0 && (
                        <div style={{ marginTop: 16, padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: 8, border: '1px solid var(--border-glass)' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--bg-primary)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)' }}>
                              <Search size={16} className="text-muted" />
                              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>123 Nguyễn Văn Lin|</span>
                           </div>
                           <div style={{ marginTop: 8, background: 'var(--bg-primary)', borderRadius: 6, padding: 8, border: '1px solid rgba(255,255,255,0.05)' }}>
                              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '6px 0' }}>
                                 <MapPin size={14} className="text-brand" style={{ marginTop: 4 }} />
                                 <div style={{ fontSize: '0.85rem' }}>
                                   <strong style={{ display: 'block', color: 'var(--text-primary)' }}>123 Nguyễn Văn Linh</strong>
                                   <span className="text-muted">Quận 7, TP. Hồ Chí Minh</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                      )}

                      {idx === 1 && idxi === 1 && (
                        <div style={{ marginTop: 16, padding: '16px', background: 'var(--bg-secondary)', borderRadius: 12, border: '1px solid var(--border-glass)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', maxWidth: 300, margin: '16px auto 0' }}>
                           <div style={{ textAlign: 'center', marginBottom: 16 }}>
                             <MapPin size={24} className="text-brand" style={{ margin: '0 auto 8px' }} />
                             <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-primary)' }}>Cho phép dùng vị trí?</strong>
                             <span className="text-muted" style={{ fontSize: '0.8rem' }}>Để tự động điền địa chỉ dọn dẹp.</span>
                           </div>
                           <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                             <div style={{ padding: '10px', background: 'var(--brand-color)', color: 'white', textAlign: 'center', borderRadius: 8, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>Cho phép khi dùng ứng dụng</div>
                             <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', textAlign: 'center', borderRadius: 8, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>Chỉ một lần</div>
                           </div>
                        </div>
                      )}

                      {idx === 2 && idxi === 0 && (
                        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
                           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px 24px', borderRadius: 12, border: '1px solid var(--border-glass)', display: 'flex', gap: 24, alignItems: 'center' }}>
                              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                <div>Thứ 2</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-color)', borderTop: '1px solid rgba(255,130,40,0.3)', borderBottom: '1px solid rgba(255,130,40,0.3)', padding: '4px 0' }}>Thứ 3, 20/10</div>
                                <div>Thứ 4</div>
                              </div>
                              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                <div>08</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-color)', borderTop: '1px solid rgba(255,130,40,0.3)', borderBottom: '1px solid rgba(255,130,40,0.3)', padding: '4px 0', width: '40px' }}>09</div>
                                <div>10</div>
                              </div>
                              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>:</div>
                              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                <div>15</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-color)', borderTop: '1px solid rgba(255,130,40,0.3)', borderBottom: '1px solid rgba(255,130,40,0.3)', padding: '4px 0', width: '40px' }}>30</div>
                                <div>45</div>
                              </div>
                           </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 4: Execution Plan */}
      <section className="container" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 16 }}><Target className="text-brand" /> {t.section4Title}</h2>
          <div className="badge badge-warning" style={{ marginBottom: 40, border: '1px solid rgba(255,193,7, 0.4)', color: '#ffc107', background: 'rgba(255,193,7,0.1)' }}>
            <ShieldAlert size={14} />
            {t.sprintConstraint}
          </div>

          <div className="glass-panel" style={{ padding: '40px 40px' }}>
            <div className="roadmap">
              {t.sprints.map((sprint, idx) => (
                <div className="roadmap-item" key={idx} style={{ marginBottom: idx === 0 ? 48 : 0 }}>
                  <div className="roadmap-dot" style={{ borderColor: idx === 0 ? 'var(--brand-color)' : 'var(--text-muted)' }}></div>
                  <h3 className={idx === 0 ? "text-brand" : ""} style={{ fontSize: '1.5rem', marginBottom: 8 }}>{sprint.name}</h3>
                  <p className="text-muted" style={{ marginBottom: 24, fontStyle: 'italic' }}>🎯 Focus: {sprint.focus}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {sprint.tasks.map((task, idxi) => (
                      <div key={idxi} style={{ background: 'var(--bg-primary)', padding: 20, borderRadius: 12, border: '1px solid var(--border-glass)', position: 'relative', overflow: 'hidden' }}>
                        {idx === 0 && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: 'var(--success)' }}></div>}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                          {idx === 0 ? <CheckCircle2 className="text-success" size={20} /> : <Clock className="text-muted" size={20} />}
                          <strong style={{ fontSize: '1.1rem' }}>{task.name}</strong>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: 8, color: 'var(--text-secondary)' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-primary)', marginRight: 8 }}>Why do this now?</span>
                          {task.why}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer / Risks */}
      <section className="container" style={{ minHeight: 'auto', paddingTop: 80, paddingBottom: 140 }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 12 }}>
          <ShieldAlert className="text-danger" /> {t.section5Title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {t.risks.map((risk, idx) => (
            <motion.div
              key={idx}
              className="glass-panel"
              style={{ borderTop: `4px solid ${idx === 0 ? 'var(--brand-color)' : idx === 1 ? 'var(--danger)' : 'var(--success)'}`, display: 'flex', flexDirection: 'column', gap: 16 }}
              whileHover={{ y: -8 }}
            >
              <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{risk.title}</h4>
              <p style={{ fontSize: '0.9rem', margin: 0, paddingBottom: 16, borderBottom: '1px solid var(--border-glass)', flex: 1 }}>{risk.desc}</p>
              <div>
                <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Mitigation / Trade-off</strong>
                <p style={{ fontSize: '0.9rem', margin: 0, marginTop: 8, color: 'var(--text-secondary)' }}>{risk.mit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
