export default function MetricCard({ label, value, color }) {
  const colors = {
    red: '#E24B4A',
    amber: '#EF9F27',
    green: '#1D9E75',
    purple: '#7F77DD',
  };

  return (
    <div style={{
      background: '#161822',
      border: '1px solid #2a2d3a',
      borderRadius: '10px',
      padding: '16px',
    }}>
      <p style={{ color: '#556', fontSize: '12px', margin: '0 0 8px' }}>{label}</p>
      <p style={{ color: colors[color] || 'white', fontSize: '26px', fontWeight: 600, margin: 0 }}>
        {value ?? '—'}
      </p>
    </div>
  );
}