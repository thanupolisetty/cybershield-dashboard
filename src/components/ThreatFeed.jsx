const severityStyle = {
  Critical: { background: '#2d1515', color: '#E24B4A' },
  High:     { background: '#2a1e0a', color: '#EF9F27' },
  Medium:   { background: '#1a2310', color: '#639922' },
  Low:      { background: '#1a1d2e', color: '#7F77DD' },
};

export default function ThreatFeed({ alerts }) {
  return (
    <div style={{
      background: '#161822', border: '1px solid #2a2d3a',
      borderRadius: '10px', padding: '16px',
    }}>
      <p style={{ color: '#8890a8', fontSize: '12px', fontWeight: 500,
        marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Live threat feed
      </p>
      {alerts.length === 0 && (
        <p style={{ color: '#445', fontSize: '13px' }}>No threats detected yet.</p>
      )}
      {alerts.map((alert, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '8px 0',
          borderBottom: i < alerts.length - 1 ? '1px solid #1e2130' : 'none',
        }}>
          <span style={{
            fontSize: '10px', fontWeight: 600, padding: '3px 10px',
            borderRadius: '20px', minWidth: '62px', textAlign: 'center',
            ...severityStyle[alert.severity],
          }}>
            {alert.severity}
          </span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#c8cad8', fontSize: '13px', fontWeight: 500, margin: 0 }}>{alert.type}</p>
            <p style={{ color: '#556', fontSize: '11px', margin: '2px 0 0' }}>src: {alert.sourceIp}</p>
          </div>
          <span style={{ color: '#445', fontSize: '11px' }}>{alert.time}</span>
        </div>
      ))}
    </div>
  );
}