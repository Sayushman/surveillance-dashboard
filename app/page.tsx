'use client';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  const handleResolve = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.parentElement;
    if (target) target.remove();
    alert('Incident resolved.');
  };

  return (
    <main>
      <header className="header">
        <h1>MANDLACX Surveillance</h1>
        <div className="user-info">Mohammed Ajhas | ajhas@mandlacx.com</div>
      </header>

      <div className="dashboard">
        <div className="video-section">
          <Image src="/cctv.png" alt="Live Feed" width={1000} height={600} />
        </div>

        <div className="incident-list">
          <h2>15 Unresolved Incidents</h2>
          <div className="incident">
            <p className="type">Unauthorized Access</p>
            <p>Shop Floor Camera A<br />14:35 - 14:37 on 7-Jul-2026</p>
            <button className="resolve-button" onClick={handleResolve}>Resolve</button>
          </div>
          <div className="incident">
            <p className="type">Gun Threat</p>
            <p>Shop Floor Camera A<br />14:35 - 14:37 on 7-Jul-2025</p>
            <button className="resolve-button" onClick={handleResolve}>Resolve</button>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-track">
          <span>Camera - 01</span>
          <div className="event">Unauthorized Access</div>
          <div className="event face">Face Recognised</div>
        </div>
        <div className="timeline-track">
          <span>Camera - 02</span>
          <div className="event">Unauthorized Access</div>
          <div className="event traffic">Traffic Congestion</div>
        </div>
      </div>
    </main>
  );
}
