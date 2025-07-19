import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import cherasileLogo from './assets/cherasile-logo.png';
import sdaLogo from './assets/sda-logo.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Loader animation
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.fromTo(
      '.loader-logo',
      { scale: 0.5, rotation: 0, opacity: 0 },
      { scale: 1, rotation: 360, opacity: 1, duration: 1, ease: 'bounce.out' }
    )
      .to('.loader-logo', { scale: 0.8, duration: 0.5, ease: 'power1.inOut' })
      .to('.loader-logo', { scale: 1, duration: 0.5, ease: 'power1.inOut' })
      .to('.loader-logo', { opacity: 0, duration: 0.5 });

    // Logo animation
    gsap.fromTo(
      '.main-logo',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.out', delay: 2.5 }
    );

    // Text animation
    gsap.fromTo(
      '.main-text',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out', delay: 2.7 }
    );

    // Date/time animation
    gsap.fromTo(
      '.time-text',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 2.9 }
    );

    // Progress bar animation
    gsap.fromTo(
      '.progress-bar',
      { width: '0%' },
      { width: '10%', duration: 1.5, ease: 'power2.out', delay: 3.2 }
    );

    // Looping subtle background animation
    gsap.to('.bg-pattern', {
      backgroundPosition: '200% 200%',
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
      setCurrentTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-primary-2 overflow-hidden md:overflow-hidden">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-primary-7 z-50">
          <img src={sdaLogo} alt="SDA Logo" className="loader-logo w-32 h-32" />
        </div>
      )}
      <div className="md:w-1/5 bg-primary-5 flex items-center justify-center p-4">
        <img
          src={cherasileLogo}
          alt="CherAsile SDA Logo"
          className="main-logo w-3/4 max-w-[200px] md:max-w-[300px] transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div
        className="md:w-4/5 flex flex-col items-center justify-center text-center p-6 bg-pattern"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b49286' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      >
        <h1 className="main-text text-3xl md:text-5xl font-permanent text-primary-8 mb-4">
          Our new site is under construction.
        </h1>
        <p className="main-text text-xl md:text-2xl font-caveat text-primary-6 mb-6">
          Coming soon, stay tuned.
        </p>
        <p className="main-text text-lg font-sanation text-primary-11 mb-4">
          Contact us: <a href="mailto:info@cherasilesda.org" className="hover:text-primary-9 transition-colors">info@cherasilesda.org</a>
        </p>
        <a
          href="https://youtube.com/@cherasilesdachurch7340?si=r2ASCBYouM0fo7FN"
          target="_blank"
          rel="noopener noreferrer"
          className="main-text text-lg font-shadows text-primary-10 hover:text-primary-9 transition-colors mb-4"
        >
          Visit our YouTube Channel
        </a>
        <p className="time-text text-lg font-sanation text-primary-11 mb-4">
          {currentTime}
        </p>
        <div className="main-text mt-4 w-3/4 md:w-1/2">
          <p className="text-lg font-sanation text-primary-11 mb-2">Site Progress: 10% Complete</p>
          <div className="bg-primary-4 h-2 rounded-full overflow-hidden">
            <div className="progress-bar bg-primary-9 h-full" style={{ width: '10%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;