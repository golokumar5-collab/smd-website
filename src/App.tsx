import { useEffect, useState, type ReactNode } from 'react';

const ANDROID_DOWNLOAD = '/download/SMD-PRO-v1.0.8.apk';
const WINDOWS_DOWNLOAD = '/download/SMD-Laptop-Setup-v1.0.17.exe';
const DEMO_VIDEO = 'https://youtu.be/Q2ssUnAWsr8';

function Icon({ children, size = 20 }: { children: ReactNode; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

function DownloadIcon() {
  return <Icon><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></Icon>;
}

function ArrowIcon() {
  return <Icon size={18}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>;
}

function CheckIcon() {
  return <Icon size={18}><path d="m5 12 4 4L19 6" /></Icon>;
}

function PlayIcon() {
  return <Icon size={18}><path d="m8 5 11 7-11 7V5Z" /></Icon>;
}

function AndroidMark() {
  return (
    <Icon size={30}>
      <path d="M7 8h10" /><path d="M8 8 6.5 5.5" /><path d="M16 8l1.5-2.5" />
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M8 18v3M16 18v3M3 11v5M21 11v5" />
    </Icon>
  );
}

function WindowsMark() {
  return (
    <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 4.7 11 3.6v7.7H3V4.7Zm9.2-1.3L21 2.2v9.1h-8.8V3.4ZM3 12.6h8v7.8l-8-1.1v-6.7Zm9.2 0H21v9.2l-8.8-1.2v-8Z" />
    </svg>
  );
}

const features = [
  { number: '01', title: 'WhatsApp Entry', text: 'Paste complete WhatsApp messages and convert supported lines into clear entries with the built-in cleaner and smart parser.' },
  { number: '02', title: 'Smart Hisab', text: 'Track daily accounts, customer balances, and totals from one accurate, easy-to-read workspace.' },
  { number: '03', title: 'Jantri Views', text: 'Review customer, overall, and live Jantri data in a clear 10×10 number-and-amount layout.' },
  { number: '04', title: 'Market Management', text: 'Set the active market once and continue daily operations without repeatedly selecting it.' },
  { number: '05', title: 'Entry History', text: 'See exactly what was entered, the source format, and the time in a focused activity history.' },
  { number: '06', title: 'Secure Access', text: 'Protect important business data with verified sign-in and controlled access.' },
];

type LaptopPlanType = 'single' | 'multi';
type PricingProduct = 'android' | 'laptop';

type LaptopPlan = {
  duration: string;
  price: string;
  badge?: string;
  featured?: boolean;
};

const laptopPlans: Record<LaptopPlanType, LaptopPlan[]> = {
  single: [
    { duration: '1 Month', price: '₹1,099' },
    { duration: '3 Months', price: '₹2,999' },
    { duration: '6 Months', price: '₹5,499', badge: 'POPULAR' },
    { duration: '1 Year', price: '₹9,999', badge: 'BEST VALUE', featured: true },
  ],
  multi: [
    { duration: '1 Month', price: '₹1,299' },
    { duration: '3 Months', price: '₹3,599' },
    { duration: '6 Months', price: '₹6,699', badge: 'POPULAR' },
    { duration: '1 Year', price: '₹11,999', badge: 'BEST VALUE', featured: true },
  ],
};

const androidPlans: LaptopPlan[] = [
  { duration: '1 Month', price: '₹799' },
  { duration: '3 Months', price: '₹2,199', badge: 'MOST POPULAR' },
  { duration: '6 Months', price: '₹4,499', badge: 'BEST VALUE' },
  { duration: '1 Year', price: '₹8,999', badge: 'FULL PREMIUM', featured: true },
];

const androidPlanDetails = {
  label: 'SMD PRO Android',
  description: 'Premium mobile access for individual SMD PRO users.',
  note: 'SMD PRO mobile subscription',
  features: ['Complete SMD PRO access', 'Android mobile application', 'Updates and customer support'],
};

const laptopPlanDetails: Record<LaptopPlanType, {
  label: string;
  description: string;
  note: string;
  features: string[];
}> = {
  single: {
    label: 'Single User',
    description: 'For an owner working independently on one Windows laptop.',
    note: 'Single-user Windows subscription',
    features: ['One verified user', 'Complete SMD Laptop access', 'Updates & installation support'],
  },
  multi: {
    label: 'Multi User',
    description: 'For a boss managing employees through mobile and Windows access.',
    note: 'Boss and employee subscription',
    features: ['Boss and employee access', 'Members status and team control', 'Updates & installation support'],
  },
};

const steps = [
  { number: '1', title: 'Choose your platform', text: 'Download the Android APK for mobile or the SMD Laptop installer for your Windows computer.' },
  { number: '2', title: 'Install and sign in', text: 'Sign in with your verified account, then select the market or customer for the current session.' },
  { number: '3', title: 'Start working', text: 'Manage entries, Jantri, history, and accounts through one clean and familiar workflow.' },
];

type LaptopPreviewView = 'dashboard' | 'jantri';

const laptopMenuItems = [
  ['⌂', 'Dashboard'],
  ['✎', 'Entry'],
  ['♙', 'Customers'],
  ['◈', 'Markets'],
  ['▦', 'Customer Jantri'],
  ['⌁', 'Overall Jantri'],
  ['✓', 'Result Master'],
  ['₹', 'Hisab'],
  ['●', 'Members Status'],
];

const laptopDashboardCards = [
  ['Entry', 'F1', 'Fast realtime entry'],
  ['Customers', 'F2', 'Customer management'],
  ['Markets', 'F3', 'Market and live status'],
  ['Customer Jantri', 'F4', 'Customer-wise totals'],
  ['Overall Jantri', 'F5', 'Complete market view'],
  ['Result Master', 'F6', 'Save market results'],
  ['Hisab', 'F7', 'Result-based accounts'],
  ['Members Status', 'F8', 'Online team activity'],
];

const jantriAmounts = Array.from({ length: 100 }, (_, index) => {
  if ((index + 1) % 11 === 0) return 0;
  return 100 + (((index + 1) * 37) % 11) * 50;
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [laptopView, setLaptopView] = useState<LaptopPreviewView>('jantri');
  const [pricingProduct, setPricingProduct] = useState<PricingProduct>('android');
  const [pricingMode, setPricingMode] = useState<LaptopPlanType>('single');

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showingAndroidPlans = pricingProduct === 'android';
  const activePlans = showingAndroidPlans ? androidPlans : laptopPlans[pricingMode];
  const activePlanLabel = showingAndroidPlans
    ? androidPlanDetails.label
    : `SMD Laptop ${laptopPlanDetails[pricingMode].label}`;
  const activePlanNote = showingAndroidPlans
    ? androidPlanDetails.note
    : laptopPlanDetails[pricingMode].note;
  const activePlanFeatures = showingAndroidPlans
    ? androidPlanDetails.features
    : laptopPlanDetails[pricingMode].features;

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="SMD home">
            <span className="brand-mark">SMD</span>
            <span className="brand-copy">
              <strong>SMD PRO</strong>
              <small>Software Management Desk</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#products">Products</a><a href="#laptop-pricing">Pricing</a><a href="#laptop-preview">Laptop Preview</a><a href="#features">Features</a>
            <a href={DEMO_VIDEO} target="_blank" rel="noreferrer">Demo Video</a>
            <a href="#how-it-works">How it works</a><a href="#contact">Support</a>
          </nav>

          <a className="button button-small nav-download" href="#download">Download <ArrowIcon /></a>

          <button className="menu-button" type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#laptop-pricing" onClick={closeMenu}>Pricing</a>
            <a href="#laptop-preview" onClick={closeMenu}>Laptop Preview</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href={DEMO_VIDEO} target="_blank" rel="noreferrer" onClick={closeMenu}>Demo Video</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#contact" onClick={closeMenu}>Support</a>
            <a className="button" href="#download" onClick={closeMenu}>Download</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" />Android + Windows software</div>
              <h1>Daily business management,<span>made simple.</span></h1>
              <p className="hero-text">
                SMD PRO and SMD Laptop bring entries, Jantri, accounts, customers, and markets
                together in one fast, clear, and organised workspace.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#download"><DownloadIcon />Download SMD Software</a>
                <a className="button button-secondary button-demo" href={DEMO_VIDEO} target="_blank" rel="noreferrer">
                  <PlayIcon /> Watch Demo Video
                </a>
              </div>
              <div className="hero-points" aria-label="Product highlights">
                <span><CheckIcon /> Fast entry</span><span><CheckIcon /> Clear Jantri</span>
                <span><CheckIcon /> 24×7 support</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="SMD PRO application preview">
              <div className="visual-label"><span>Official SMD software</span><strong>Mobile + Laptop</strong></div>
              <img src="/images/smd-pro-showcase.png"
                alt="SMD PRO dashboard, WhatsApp entry, Hisab and Jantri screens"
                width="1536" height="1024" fetchPriority="high" />
              <div className="floating-pill pill-left"><span>100%</span>Entry clarity</div>
              <div className="floating-pill pill-right"><span>24×7</span>Support</div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="SMD highlights">
          <div className="container trust-grid">
            <div><strong>2012</strong><span>Experience since</span></div>
            <div><strong>2 Platforms</strong><span>Android & Windows</span></div>
            <div><strong>Fast</strong><span>Daily workflow</span></div>
            <div><strong>24×7</strong><span>Customer support</span></div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="kicker">Our products</p><h2>Work wherever you are.<br />SMD is ready.</h2></div>
              <p>Use the mobile app for quick access or the Windows software for a complete desktop
                workspace. Both products provide a familiar, clean, and efficient experience.</p>
            </div>

            <div className="product-grid">
              <article className="product-card product-android">
                <div className="product-topline">
                  <span className="platform-icon"><AndroidMark /></span>
                  <span className="version-chip"><span className="version-chip">Version 1.0.2</span></span>
                </div>
                <p className="product-label">FOR ANDROID</p><h3>SMD PRO</h3>
                <p>A complete Android application for managing entries, accounts, customers, and Jantri from your phone.</p>
                <ul>
                  <li><CheckIcon /> Direct APK installation</li>
                  <li><CheckIcon /> Mobile-friendly workflow</li>
                  <li><CheckIcon /> Latest official public build</li>
                </ul>
                <a className="download-link" href={ANDROID_DOWNLOAD} download="SMD-PRO-v1.0.8.apk">
                  <span><DownloadIcon /> Android APK download</span><small>APK • 68.6 MB</small>
                </a>
              </article>

              <article className="product-card product-windows">
                <div className="product-topline">
                  <span className="platform-icon"><WindowsMark /></span>
                  <span className="version-chip">Version 1.0.17</span>
                </div>
                <p className="product-label">FOR WINDOWS</p><h3>SMD Laptop</h3>
                <p>A complete desktop workspace with a full entry panel, 10×10 Jantri, and focused activity history.</p>
                <ul>
                  <li><CheckIcon /> Windows installer included</li>
                  <li><CheckIcon /> Responsive 13–50 inch layout</li>
                  <li><CheckIcon /> Boss & employee login support</li>
                </ul>
                <a className="download-link" href={WINDOWS_DOWNLOAD} download="SMD-Laptop-Setup-v1.0.17.exe">
                  <span><DownloadIcon /> Windows setup download</span><small>EXE • 95.6 MB</small>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section laptop-pricing-section" id="laptop-pricing">
          <div className="container">
            <div className="section-heading centered-heading laptop-pricing-heading">
              <p className="kicker">SMD subscriptions</p>
              <h2>Android and Windows plans,<br />clearly separated.</h2>
              <p>
                Choose SMD PRO for Android mobile access or SMD Laptop for Windows.
                Each product has its own clear subscription listing.
              </p>
            </div>

            <div className="pricing-product-switch" aria-label="Choose SMD subscription product">
              <button
                type="button"
                className={pricingProduct === 'android' ? 'active android' : ''}
                aria-pressed={pricingProduct === 'android'}
                onClick={() => setPricingProduct('android')}
              >
                <span className="pricing-switch-icon"><AndroidMark /></span>
                <span className="pricing-switch-copy">
                  <strong>SMD PRO</strong><small>Android mobile subscription</small>
                </span>
              </button>
              <button
                type="button"
                className={pricingProduct === 'laptop' ? 'active laptop' : ''}
                aria-pressed={pricingProduct === 'laptop'}
                onClick={() => setPricingProduct('laptop')}
              >
                <span className="pricing-switch-icon"><WindowsMark /></span>
                <span className="pricing-switch-copy">
                  <strong>SMD Laptop</strong><small>Windows computer subscription</small>
                </span>
              </button>
            </div>

            {!showingAndroidPlans && (
              <div className="laptop-pricing-switch" aria-label="Choose SMD Laptop user type">
                {(['single', 'multi'] as LaptopPlanType[]).map((type) => (
                  <button
                    type="button"
                    className={pricingMode === type ? 'active' : ''}
                    aria-pressed={pricingMode === type}
                    onClick={() => setPricingMode(type)}
                    key={type}
                  >
                    <strong>{laptopPlanDetails[type].label}</strong>
                    <span>{laptopPlanDetails[type].description}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="laptop-plan-grid" key={`${pricingProduct}-${pricingMode}`}>
              {activePlans.map((plan) => (
                <article
                  className={`laptop-plan-card${plan.featured ? ' featured' : ''}${showingAndroidPlans ? ' android-plan' : ''}`}
                  key={plan.duration}
                >
                  <div className="laptop-plan-topline">
                    <span className="laptop-plan-icon">
                      {showingAndroidPlans ? <AndroidMark /> : <WindowsMark />}
                    </span>
                    {plan.badge && <span className="laptop-plan-badge">{plan.badge}</span>}
                  </div>
                  <p className="laptop-plan-product">{activePlanLabel.toUpperCase()}</p>
                  <h3>{plan.duration}</h3>
                  <div className="laptop-plan-price">{plan.price}</div>
                  <p className="laptop-plan-note">{activePlanNote}</p>
                  <ul>
                    {activePlanFeatures.map((feature) => (
                      <li key={feature}><CheckIcon /> {feature}</li>
                    ))}
                  </ul>
                  <a
                    className="laptop-plan-action"
                    href={`https://wa.me/918448665366?text=${encodeURIComponent(`Hello SMD Support, I want the ${activePlanLabel} ${plan.duration} plan for ${plan.price}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Choose plan <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>

            <p className="laptop-pricing-footnote">
              Android and Windows subscriptions are separate. Select the correct product before choosing your plan.
            </p>
          </div>
        </section>

        <section className="section laptop-preview-section" id="laptop-preview">
          <div className="container">
            <div className="laptop-preview-heading">
              <div>
                <p className="kicker">SMD Laptop experience</p>
                <h2>See your complete workspace<br />before you download.</h2>
              </div>
              <div className="preview-intro">
                <p>
                  Explore the clean dashboard and the complete entry workspace with its compact
                  10×10 Jantri, entry controls, and live history.
                  Entry Jantri opens first, and you can select either screen at any time.
                </p>
                <div className="preview-tabs" aria-label="Choose laptop preview screen">
                  <button type="button" className={laptopView === 'dashboard' ? 'active' : ''}
                    aria-pressed={laptopView === 'dashboard'} onClick={() => {
                      setLaptopView('dashboard');
                    }}>
                    Dashboard
                  </button>
                  <button type="button" className={laptopView === 'jantri' ? 'active' : ''}
                    aria-pressed={laptopView === 'jantri'} onClick={() => {
                      setLaptopView('jantri');
                    }}>
                    Entry Jantri
                  </button>
                </div>
              </div>
            </div>

            <div className="laptop-stage">
              <div className="laptop-device">
                <div className="laptop-camera"><span /></div>
                <div className="laptop-screen">
                  <aside className="demo-sidebar">
                    <div className="demo-brand"><strong>SMD</strong><span>SOFTWARE MANAGEMENT DESK</span></div>
                    <div className="demo-menu">
                      {laptopMenuItems.map(([icon, label], index) => (
                        <div className={
                          (laptopView === 'dashboard' && index === 0) ||
                          (laptopView === 'jantri' && index === 1)
                            ? 'demo-menu-item active'
                            : 'demo-menu-item'
                        } key={label}>
                          <span>{icon}</span><em>{label}</em><b>{index === 0 ? 'Home' : `F${index}`}</b>
                        </div>
                      ))}
                    </div>
                    <div className="demo-quick-title">QUICK ACTIONS</div>
                    <div className="demo-quick-menu">
                      <div><span>⌕</span><em>Search Customer</em><b>Ctrl + K</b></div>
                      <div><span>⇄</span><em>Switch Market</em><b>Ctrl + M</b></div>
                      <div><span>↻</span><em>Refresh</em><b>Ctrl + R</b></div>
                    </div>
                    <div className="demo-version">SMD Laptop v1.0.17</div>
                  </aside>

                  <div className="demo-main">
                    {laptopView === 'dashboard' ? (
                      <div className="demo-topbar">
                        <div><strong>SMD LAPTOP</strong><span>Software Management Desk</span></div>
                        <div className="demo-topbar-right">
                          <span className="demo-online"><i />ONLINE</span>
                          <span className="demo-avatar">EM</span>
                        </div>
                      </div>
                    ) : (
                      <div className="demo-topbar demo-entry-topbar">
                        <div className="demo-active-market">
                          <i>◇</i><span><small>ACTIVE MARKET</small><strong>fd</strong></span>
                        </div>
                        <div className="demo-sync-status">
                          <strong><i /> LIVE SYNCED</strong><small>Last Sync: 04:32 pm</small>
                        </div>
                        <div className="demo-session-meta">
                          <span className="demo-avatar">JK</span>
                          <span><strong>Jk</strong><small><i /> Online</small></span>
                          <span className="demo-date"><strong>23 Aug 2026</strong><small>Sunday</small></span>
                          <span className="demo-time"><strong>04:32 pm</strong><small>LIVE</small></span>
                        </div>
                      </div>
                    )}

                    {laptopView === 'dashboard' ? (
                      <div className="demo-screen-view demo-dashboard" key="dashboard">
                        <div className="demo-dashboard-hero">
                          <div><span>EMPLOYEE WORKSPACE</span><strong>Welcome, Employee</strong><small>Fast Entry • Live Jantri • Realtime Sync</small></div>
                          <button type="button">LOGOUT</button>
                        </div>
                        <div className="demo-dashboard-grid">
                          {laptopDashboardCards.map(([title, shortcut, description], index) => (
                            <div className="demo-dashboard-card" key={title}>
                              <i className={`accent accent-${(index % 4) + 1}`} />
                              <span>{shortcut}</span><strong>{title}</strong><small>{description}</small>
                            </div>
                          ))}
                        </div>
                        <div className="demo-dashboard-bottom">
                          <div><span>ACTIVE MARKET</span><strong>Main Market</strong></div>
                          <div><span>SESSION STATUS</span><strong className="status-value">ONLINE</strong></div>
                          <div><span>QUICK ACCESS</span><strong>F1 — F8</strong></div>
                        </div>
                      </div>
                    ) : (
                      <div className="demo-screen-view demo-jantri" key="jantri">
                        <div className="demo-entry-controls">
                          <button type="button">← BACK</button>
                          <div className="demo-control-select">Select Customer <b>⌄</b></div>
                          <div className="demo-control-select">fd <b>⌄</b></div>
                          <div className="demo-set-market">SET ✓</div>
                          <div className="demo-control-date">23-08-2026 <b>□</b></div>
                          {[
                            ['JODI TOTAL', '₹0'], ['HARUP ANDAR', '₹0'],
                            ['HARUP BAHAR', '₹0'], ['HARUP TOTAL', '₹0'], ['GRAND TOTAL', '₹0'],
                          ].map(([label, value], index) => (
                            <div className={`demo-control-total total-${index + 1}`} key={label}>
                              <span>{label}</span><strong>{value}</strong>
                            </div>
                          ))}
                        </div>

                        <div className="demo-entry-workspace">
                          <section className="demo-live-jantri">
                            <div className="demo-live-heading">
                              <div><span>REALTIME MARKET VIEW</span><strong>LIVE ENTRY JANTRI</strong></div>
                              <b>0 ENTRIES</b>
                            </div>
                            <div className="demo-number-grid">
                              {jantriAmounts.map((_, index) => {
                                const displayNumber = index === 99 ? '100' : String(index + 1).padStart(2, '0');
                                return (
                                  <div className="jantri-cell" key={displayNumber}>
                                    <span>{displayNumber}</span>
                                    <strong>0</strong>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="demo-harup-area">
                              <span>HARUP ANDAR</span>
                              <div>{Array.from({ length: 10 }, (_, index) => <b key={index}>{index}<small>0</small></b>)}</div>
                              <span>HARUP BAHAR</span>
                              <div>{Array.from({ length: 10 }, (_, index) => <b key={index}>{index}<small>0</small></b>)}</div>
                            </div>
                            <div className="demo-entry-totals">
                              {['JODI TOTAL', 'HARUP ANDAR', 'HARUP BAHAR', 'HARUP TOTAL', 'GRAND TOTAL'].map((label, index) => (
                                <div key={label}><span>{label}</span><strong className={`entry-total-${index + 1}`}>₹0</strong></div>
                              ))}
                            </div>
                          </section>

                          <aside className="demo-entry-side">
                            <div className="demo-entry-box">
                              <div className="demo-entry-box-title">
                                <strong>Jodi / Harup Entry</strong>
                                <span>WHATSAPP PASTE</span><span className="crossing">SPACE = CROSSING</span>
                              </div>
                              <div className="demo-entry-fields">
                                <label><span>JODI / HARUP</span><b>jodi</b></label>
                                <label className="amount"><span>AMOUNT</span><b>rupee</b></label>
                              </div>
                            </div>
                            <div className="demo-history-box">
                              <strong>Live History</strong>
                              <span>No entry history</span>
                            </div>
                          </aside>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="laptop-hinge" />
              <div className="laptop-base"><span /></div>
            </div>

            <div className="laptop-preview-notes">
              <span><CheckIcon /> Complete desktop dashboard</span>
              <span><CheckIcon /> Compact 10×10 Entry Jantri</span>
              <span><CheckIcon /> Designed for 13–50 inch displays</span>
            </div>
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="kicker">Everything in one place</p>
              <h2>Essential tools for daily operations,<br />without the clutter.</h2>
              <p>Every screen is designed for clarity, so numbers, amounts, and activity remain easy to review.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-item" key={feature.number}>
                  <span>{feature.number}</span>
                  <div><h3>{feature.title}</h3><p>{feature.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="how-it-works">
          <div className="container workflow-wrap">
            <div className="workflow-copy">
              <p className="kicker">Simple setup</p><h2>From download to daily operations in three simple steps.</h2>
              <p>Choose the right platform, complete the installation, and sign in with your verified account to begin.</p>
              <a className="text-link" href="#download">View Official Downloads <ArrowIcon /></a>
            </div>
            <div className="step-list">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section download-section" id="download">
          <div className="container download-panel">
            <div className="download-copy">
              <p className="kicker">Official downloads</p><h2>Choose the right SMD software for your device.</h2>
              <p>Download either official release directly from this page. Our support team is available if you need installation assistance.</p>
              <div className="secure-note"><CheckIcon /> Verified SMD release files</div>
            </div>
            <div className="download-options">
              <a className="download-option" href={ANDROID_DOWNLOAD} download="SMD-PRO-v1.0.8.apk">
                <span className="download-platform"><AndroidMark /></span>
                <span className="download-details"><small>Android mobile</small><strong>Download SMD PRO</strong><em>v1.0.8 • APK • 68.6 MB</em></span>
                <span className="round-arrow"><DownloadIcon /></span>
              </a>
              <a className="download-option" href={WINDOWS_DOWNLOAD} download="SMD-Laptop-Setup-v1.0.17.exe">
                <span className="download-platform"><WindowsMark /></span>
                <span className="download-details"><small>Windows computer</small><strong>Download SMD Laptop</strong><em>v1.0.17 • EXE • 95.6 MB</em></span>
                <span className="round-arrow"><DownloadIcon /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="section support-section" id="contact">
          <div className="container support-grid">
            <div>
              <p className="kicker">Contact & support</p><h2>Need help with installation or the software?</h2>
              <p>Our support team can assist with downloads, installation, sign-in, subscriptions, and product guidance.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-card whatsapp" href="https://wa.me/918448665366?text=Hello%20SMD%20Support%2C%20I%20need%20help." target="_blank" rel="noreferrer">
                <span>WhatsApp</span><strong>+91 84486 65366</strong><ArrowIcon />
              </a>
              <a className="contact-card" href="mailto:smdsupport01@gmail.com">
                <span>Email support</span><strong>smdsupport01@gmail.com</strong><ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">SMD</span>
            <span className="brand-copy"><strong>SMD PRO</strong><small>Software Management Desk</small></span>
          </a>
          <p>Smart Android and Windows software for entries, Jantri, accounts, customers, and markets.</p>
          <div className="footer-links">
            <a href="#products">Products</a><a href="#laptop-pricing">Pricing</a><a href="#laptop-preview">Laptop Preview</a><a href="#features">Features</a>
            <a href={DEMO_VIDEO} target="_blank" rel="noreferrer">Demo Video</a>
            <a href="#download">Download</a><a href="#contact">Support</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} SMD. All rights reserved.</span>
          <span>24×7 Support • +91 84486 65366</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
