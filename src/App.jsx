import { useState } from 'react'
import './App.css'

function App() {
  const [openRace, setOpenRace] = useState(null)

  const calendarRaces = [
    {
      id: 'gp1',
      round: 'GP 1. GENK - 13-14-15 MAR',
      status: 'finished',
      results: 'Quali: P1, Race: P1, Overall: P1',
    },
    {
      id: 'gp2',
      round: 'GP 2. EMSBUREN - 27-28-29 MAR',
      status: 'finished',
      results: 'Quali: P5, Race: P4, Overall: P5',
    },
    {
      id: 'gp3',
      round: 'GP 3. VENRAY - 24-25-26 APR',
      status: 'finished',
      results: 'Did not participate.',
    },
    {
      id: 'gp4',
      round: 'GP 4. VLEDDERVEEN - 09-10 MAY',
      status: 'scheduled',
      results: null,
    },
    {
      id: 'gp5',
      round: 'GP 5. ZWOLLE - 29-30-31 MAY',
      status: 'scheduled',
      results: null,
    },
    {
      id: 'gp6',
      round: 'GP 6. EMMEN - 12-13-14 JUN',
      status: 'scheduled',
      results: null,
    },
    {
      id: 'gp7',
      round: 'GP 7. LELYSTAD - 11-12-13 SEP',
      status: 'scheduled',
      results: null,
    },
    {
      id: 'gp8',
      round: 'GP 8. SPA - 30-31 OCT - 01 NOV',
      status: 'scheduled',
      results: null,
    },
    {
      id: 'gp9',
      round: 'GP 9. ASSEN - 13-14-15 NOV',
      status: 'scheduled',
      results: null,
    },
    {
      id: 'gp10',
      round: 'GP 10. LANDSARD - 27-28-29 NOV',
      status: 'scheduled',
      results: null,
    },
  ]

  return (
    <div className="page-shell">
      <header className="top-nav">
        <div className="brand-wrap">
          <span className="status-dot" aria-hidden="true" />
          <img src="/logo.png" alt="Wouter van Riel" className="nav-logo" />
          <div className="social-mini" aria-label="Social links">
            <a href="https://www.instagram.com/woutervanriel_racing?igsh=OGp3cmtreWsxYXR1&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="TikTok">
              TT
            </a>
          </div>
        </div>

        <nav className="menu-links" aria-label="Main navigation">
          <a className="active" href="#about">ABOUT</a>
          <a href="#partners">PARTNERS</a>
          <a href="#calendar">CALENDAR</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <button className="lang-switch" type="button" aria-label="Language selector">
          EN
          <span aria-hidden="true">⌄</span>
        </button>
      </header>

      <main className="hero-layout">
        <section className="hero-image" aria-label="Kart driver image">
          <img
            src="/main_page.jpeg"
            alt="Wouter van Riel"
          />
          <div className="image-fade" aria-hidden="true" />
        </section>

        <section className="hero-copy">
          <img src="/logo.png" alt="WVR" className="hero-logo" />
          <h1>
            WOUTER
            <span>VAN RIEL</span>
          </h1>
          <p className="subtitle">Racing driver from the Netherlands</p>
          <button className="cta" type="button">LEARN MORE</button>
        </section>

        <div className="slider-dots" aria-hidden="true">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </main>

      {/* ── ABOUT SECTION ── */}
      <section className="about-section" id="about">
        <div className="about-inner">

          <div className="about-left">
            <p className="section-label">
              <span className="section-line" />
              01 · MY STORY
            </p>

            <h2 className="about-heading">
              ABOUT<br />ME
            </h2>

            <div className="about-body">
              <p>
                At the age of 4 I fell in love with racing while watching MotoGP with my dad. Right there I knew I wanted to race, it didn't matter what. I have always been competitive and wanting to win.
              </p>
              <p>
                I did some go karting every once in a while but not competitive. Later at around 8 years old I started watching F1 and did more karting. I also had some track days on minibikes but I liked karts better. At 12 I started taking go‑kart lessons and did some local kart races.
              </p>
              <p>
                About 2 years later I had my first official rental kart race. From then on I only did more races. The next year I did about 75% of the season. I learned a lot but wasn't able to get on the podium. Over the winter I worked really hard — it paid off.
              </p>
              <p>
                This year I won the first round of the national championship and I'm currently trying to compete in all 10 rounds of the championship.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="driver-card">
              <div className="card-photo">
                <img src="/about_me.jpeg" alt="Wouter van Riel on track" />
              </div>
              <div className="card-info">
                <p className="card-name">
                  WOUTER <span>VAN RIEL</span>
                </p>
                <p className="card-meta">NETHERLANDS · RACING DRIVER</p>
                <div className="card-divider" />
                <div className="card-stats">
                  <div className="stat">
                    <span className="stat-value">3</span>
                    <span className="stat-label">YEARS RACING</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">P1</span>
                    <span className="stat-label">BEST RACE FINISH</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">9</span>
                    <span className="stat-label">NATIONAL RACES</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">10</span>
                    <span className="stat-label">CHAMP. ROUNDS '25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="product-section" id="product-development">
        <div className="product-inner">
          <div className="product-copy">
            <p className="section-label">
              <span className="section-line" />
              02 - PRODUCT DEVELOPMENT
            </p>
            <h2 className="product-heading">Product Development</h2>
            <div className="product-text">
              <p>
                I help brands develop their product by testing and giving feedback. I get a test version of the product and will give my feedback on how I feel about it and if it works properly. With that feedback a new and better version will be created.
              </p>
              <p>
                I have helped AiMotor with their online AI sim racing coach.
              </p>
              <p>
                I also tested a new rental kart class from Dutch Racing Series. The difference between the new class and older ones is the Rotax-Max engine. This engine is mainly used on owner karts but because of the DRS it is a whole new market in the Netherlands at the moment.
              </p>
            </div>
          </div>

          <figure className="product-media">
            <img src="/prodcut_dev.jpeg" alt="Product development testing session" />
            <figcaption>Elite R klasse testing</figcaption>
          </figure>
        </div>
      </section>

      <section className="partners-section" id="partners">
        <div className="partners-inner">
          <div className="partners-head">
            <p className="section-label">
              <span className="section-line" />
              03 · PARTNERS
            </p>
            <h2 className="partners-heading">POWERING MY SEASON</h2>
            <p className="partners-intro">
              Proudly supported by industry leaders who help elevate performance on and off track.
            </p>
          </div>

          <div className="partners-grid">
            <article className="partner-card">
              <div className="partner-logo-wrap">
                <img src="/aimotor.png" alt="AiMotor logo" className="partner-logo" />
              </div>
              <div className="partner-copy">
                <p className="partner-role">TECHNICAL PARTNER</p>
                <h3 className="partner-name">AIMOTOR</h3>
                <p className="partner-description">
                  AI-powered motorsport engineering partner transforming telemetry and video data into actionable coaching insights for karting and sim racing performance.
                </p>
                <a
                  className="partner-link"
                  href="https://aimotor.eu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VISIT WEBSITE
                </a>
              </div>
            </article>

            <article className="partner-card">
              <div className="partner-logo-wrap">
                <img src="/ikadem.png" alt="Ikadem logo" className="partner-logo" />
              </div>
              <div className="partner-copy">
                <p className="partner-role">MAIN SPONSOR</p>
                <h3 className="partner-name">IKADEM</h3>
                <p className="partner-description">
                  Discover the power of your breath. Through focused breath coaching, meditation, and personal guidance, you gain greater control over your thoughts, emotions, and performance. Whether you want to reduce stress, improve performance, or reconnect with yourself, your breath is a powerful tool you always carry with you.
                </p>
                <a
                  className="partner-link"
                  href="https://ikadem.nl"
                  target="_blank"
                  rel="noreferrer"
                >
                  VISIT WEBSITE
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="calendar-inner">
          <div className="calendar-head">
            <div className="calendar-head-copy">
              <p className="section-label">
                <span className="section-line" />
                04 - CALENDAR
              </p>
              <h2 className="calendar-heading">2026 RACE SCHEDULE</h2>
            </div>
            <div className="calendar-head-image">
              <img src="/calendar.PNG" alt="Wouter van Riel racing in kart" />
            </div>
          </div>

          <div className="calendar-list">
            {calendarRaces.map((race) => {
              const isOpen = openRace === race.id
              const hasResults = Boolean(race.results)

              return (
                <article key={race.id} className={`calendar-item ${race.status}`}>
                  {hasResults ? (
                    <button
                      type="button"
                      className="calendar-toggle"
                      onClick={() => setOpenRace(isOpen ? null : race.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="calendar-item-top">
                        <p className="calendar-round">{race.round}</p>
                        <div className="calendar-meta">
                          <span className={`calendar-status ${race.status}`}>
                            {race.status.toUpperCase()}
                          </span>
                          <span className="calendar-action">
                            {isOpen ? 'HIDE RESULTS -' : 'VIEW RESULTS +'}
                          </span>
                        </div>
                      </div>
                    </button>
                  ) : (
                    <div className="calendar-item-top">
                      <p className="calendar-round">{race.round}</p>
                      <span className={`calendar-status ${race.status}`}>
                        {race.status.toUpperCase()}
                      </span>
                    </div>
                  )}

                  {hasResults && isOpen && <p className="calendar-results">{race.results}</p>}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-photo">
            <img src="/contact.jpeg" alt="Wouter van Riel contact" />
          </div>

          <div className="contact-card">
            <p className="section-label">
              <span className="section-line" />
              05 · CONTACT
            </p>

            <h2 className="contact-heading">LET'S CONNECT</h2>
            <p className="contact-text">
              For partnerships, race opportunities, or general inquiries, get in touch by email.
            </p>

            <a className="contact-email" href="mailto:woutervanriel17@gmail.com">
              woutervanriel17@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
