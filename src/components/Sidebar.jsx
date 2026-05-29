import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: '🛡️', label: 'Dashboard', path: '/' },
  { icon: '⚠️', label: 'Threat Log', path: '/threats' },
  { icon: '📊', label: 'Analytics', path: '/analytics' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{
      width: '200px', minHeight: '100vh', background: '#0a0c12',
      borderRight: '1px solid #2a2d3a', display: 'flex',
      flexDirection: 'column', padding: '24px 0',
    }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #2a2d3a' }}>
        <h2 style={{ color: '#7F77DD', fontSize: '18px', margin: 0 }}>CyberShield</h2>
        <p style={{ color: '#556', fontSize: '11px', margin: '4px 0 0' }}>Threat Monitor</p>
      </div>
      <nav style={{ marginTop: '16px', flex: 1 }}>
        {navItems.map((item) => (
          <div key={item.path} onClick={() => navigate(item.path)} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '10px 20px', cursor: 'pointer',
            background: location.pathname === item.path ? '#1a1d2e' : 'transparent',
            color: location.pathname === item.path ? '#7F77DD' : '#667',
            fontSize: '14px',
            borderLeft: location.pathname === item.path ? '3px solid #7F77DD' : '3px solid transparent',
          }}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <div style={{ padding: '16px 20px', borderTop: '1px solid #2a2d3a' }}>
        <p style={{ color: '#556', fontSize: '11px', margin: 0 }}>Logged in as</p>
        <p style={{ color: '#c8cad8', fontSize: '13px', margin: '4px 0 0', fontWeight: 500 }}>Thanu Sree</p>
      </div>
    </div>
  );
}