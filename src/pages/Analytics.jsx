import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';

const attackData = [
  { name: 'Brute Force',   count: 428 },
  { name: 'Port Scan',     count: 321 },
  { name: 'SQL Injection', count: 219 },
  { name: 'XSS',           count: 142 },
  { name: 'DDoS',          count: 89  },
];

const hourlyData = [
  { hour: '00:00', threats: 12 },
  { hour: '03:00', threats: 28 },
  { hour: '06:00', threats: 18 },
  { hour: '09:00', threats: 65 },
  { hour: '12:00', threats: 42 },
  { hour: '15:00', threats: 88 },
  { hour: '18:00', threats: 74 },
  { hour: '21:00', threats: 55 },
];

const severityData = [
  { name: 'Critical', value: 14,  color: '#E24B4A' },
  { name: 'High',     value: 87,  color: '#EF9F27' },
  { name: 'Medium',   value: 203, color: '#639922' },
  { name: 'Low',      value: 980, color: '#7F77DD' },
];

const card = {
  background: '#161822', border: '1px solid #2a2d3a',
  borderRadius: '10px', padding: '20px', marginBottom: '16px',
};

const title = {
  color: '#8890a8', fontSize: '12px', fontWeight: 500,
  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px',
};

export default function Analytics() {
  return (
    <div style={{ padding: '24px', color: '#c8cad8' }}>
      <h1 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '20px' }}>Analytics</h1>

      <div style={card}>
        <p style={title}>Attacks by type</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={attackData}>
            <XAxis dataKey="name" tick={{ fill: '#667', fontSize: 12 }} />
            <YAxis tick={{ fill: '#667', fontSize: 12 }} />
            <Tooltip contentStyle={{ background: '#1a1d2e', border: '1px solid #2a2d3a', borderRadius: 8 }} labelStyle={{ color: '#c8cad8' }} />
            <Bar dataKey="count" fill="#7F77DD" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={card}>
        <p style={title}>Threats over last 24 hours</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hourlyData}>
            <XAxis dataKey="hour" tick={{ fill: '#667', fontSize: 12 }} />
            <YAxis tick={{ fill: '#667', fontSize: 12 }} />
            <Tooltip contentStyle={{ background: '#1a1d2e', border: '1px solid #2a2d3a', borderRadius: 8 }} labelStyle={{ color: '#c8cad8' }} />
            <Line type="monotone" dataKey="threats" stroke="#E24B4A" strokeWidth={2} dot={{ fill: '#E24B4A', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={card}>
        <p style={title}>Severity breakdown</p>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={severityData} cx="50%" cy="50%" outerRadius={90} dataKey="value"
              label={({ name, percent }) => `${name} ${Math.round(percent * 100)}%`}>
              {severityData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Legend formatter={(value) => <span style={{ color: '#c8cad8', fontSize: 13 }}>{value}</span>} />
            <Tooltip contentStyle={{ background: '#1a1d2e', border: '1px solid #2a2d3a', borderRadius: 8 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}