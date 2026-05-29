import { useState } from 'react';
import MetricCard from '../components/MetricCard';
import ThreatFeed from '../components/ThreatFeed';

const DUMMY_STATS = { total: 1284, critical: 14, blocked: 392, health: 98 };

const DUMMY_ALERTS = [
  { type: 'SQL Injection',   severity: 'Critical', sourceIp: '192.168.4.21', time: '0:12s' },
  { type: 'Brute Force',     severity: 'High',     sourceIp: '10.0.0.87',    time: '1:03s' },
  { type: 'Port Scan',       severity: 'High',     sourceIp: '172.16.2.5',   time: '2:45s' },
  { type: 'XSS Attempt',     severity: 'Medium',   sourceIp: '203.0.113.9',  time: '4:10s' },
  { type: 'Unusual Traffic', severity: 'Low',      sourceIp: '10.0.1.14',    time: '6:22s' },
];

export default function Dashboard() {
  const [stats] = useState(DUMMY_STATS);
  const [alerts] = useState(DUMMY_ALERTS);

  return (
    <div style={{ padding: '24px', color: '#c8cad8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 500, margin: 0 }}>Live Dashboard</h1>
        <span style={{ fontSize: '12px', color: '#1D9E75' }}>● Monitoring active</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
        <MetricCard label="Total threats"   value={stats.total}           color="red"    />
        <MetricCard label="Critical alerts" value={stats.critical}        color="amber"  />
        <MetricCard label="Blocked IPs"     value={stats.blocked}         color="purple" />
        <MetricCard label="System health"   value={stats.health + '%'}    color="green"  />
      </div>

      <ThreatFeed alerts={alerts} />
    </div>
  );
}