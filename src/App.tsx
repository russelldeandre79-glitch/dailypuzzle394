import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function createStars() {
      const starsContainer = document.getElementById('stars');
      if (!starsContainer) return;
      const starCount = 50;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';

        starsContainer.appendChild(star);
      }
    }

    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-20px';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';

        const hue = Math.random() * 30 + 20;
        particle.style.background = `hsl(${hue}, 100%, 70%)`;

        particlesContainer.appendChild(particle);
      }
    }

    createStars();
    createParticles();

    const interval = setTimeout(() => {
      setInterval(createParticles, 2000);
    }, 3000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="celebration">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          overflow: hidden;
        }

        .celebration {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stars {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .container {
          text-align: center;
          z-index: 10;
          animation: fadeInScale 1s ease-out;
          max-width: 90%;
          position: relative;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .achievement-badge {
          width: 120px;
          height: 120px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(253, 160, 133, 0.4);
          animation: rotate 20s linear infinite, pulse 2s ease-in-out infinite;
          position: relative;
        }

        .achievement-badge::before {
          content: '';
          position: absolute;
          width: 140px;
          height: 140px;
          border: 3px solid rgba(246, 211, 101, 0.3);
          border-radius: 50%;
          animation: ping 2s ease-out infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes ping {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .trophy {
          font-size: 60px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        h1 {
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(246, 211, 101, 0.5);
          line-height: 1.2;
        }

        .day-number {
          background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }

        .subtitle {
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: #a8dadc;
          font-weight: 300;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 1s ease-out 1s forwards;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1.5rem 2rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 140px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(246, 211, 101, 0.3);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #f6d365;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #a8dadc;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .particles {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: #fda085;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .glow-orb {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: drift 15s ease-in-out infinite;
          pointer-events: none;
        }

        .glow-orb-1 {
          background: #f6d365;
          top: 10%;
          left: 20%;
        }

        .glow-orb-2 {
          background: #fda085;
          bottom: 20%;
          right: 15%;
          animation-delay: -5s;
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 40px) scale(0.9);
          }
        }

        @media (max-width: 768px) {
          .stats {
            gap: 1rem;
          }

          .stat-item {
            padding: 1rem 1.5rem;
            min-width: 120px;
          }

          .achievement-badge {
            width: 100px;
            height: 100px;
          }

          .trophy {
            font-size: 50px;
          }
        }
      `}</style>

      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>

      <div className="stars" id="stars"></div>
      <div className="particles" id="particles"></div>

      <div className="container">
        <div className="achievement-badge">
          <div className="trophy">🏆</div>
        </div>

        <h1>
          DAILY PUZZLE DAY <span className="day-number">394</span> COMPLETE
        </h1>

        <p className="subtitle">THE REAL WORLD CHAMPION</p>

        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">394</div>
            <div className="stat-label">Days Strong</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Mastery</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">Elite</div>
            <div className="stat-label">Status</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
