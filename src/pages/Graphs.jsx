import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Droplets, DollarSign, Calendar } from 'lucide-react';
import { FaIndianRupeeSign } from "react-icons/fa6";
// Mock data for demonstration
const yieldData = [
  { month: 'Jan', yield: 2400, rainfall: 120 },
  { month: 'Feb', yield: 1398, rainfall: 98 },
  { month: 'Mar', yield: 9800, rainfall: 86 },
  { month: 'Apr', yield: 3908, rainfall: 99 },
  { month: 'May', yield: 4800, rainfall: 85 },
  { month: 'Jun', yield: 3800, rainfall: 65 },
];

const cropDistribution = [
  { key: 'wheat', value: 45, color: '#10B981' },
  { key: 'cotton', value: 25, color: '#F59E0B' },
  { key: 'rice', value: 20, color: '#3B82F6' },
  { key: 'others', value: 10, color: '#6B7280' },
];

const incomeData = [
  { month: 'Jan', income: 15000, expenses: 8000 },
  { month: 'Feb', income: 12000, expenses: 7500 },
  { month: 'Mar', income: 18000, expenses: 9000 },
  { month: 'Apr', income: 22000, expenses: 10000 },
  { month: 'May', income: 25000, expenses: 11000 },
  { month: 'Jun', income: 28000, expenses: 12000 },
];

export const Graphs = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#f7f7f0', minHeight: '100vh', padding: '0', margin: 0 }}>
      <style>{`
        .fd-graphs-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #232d18;
          margin-bottom: 0.2em;
          margin-top: 0.5em;
          letter-spacing: -1px;
        }
        .fd-graphs-subtitle {
          color: #7a8a7a;
          font-size: 1.1rem;
          margin-bottom: 2em;
        }
        .fd-graphs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 24px;
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
        <div>
          <div className="fd-graphs-title">{t('graphs')}</div>
          <div className="fd-graphs-subtitle">{t('farmAnalyticsSubtitle') || 'Farm analytics and performance metrics'}</div>
        </div>
        <div className="fd-graphs-grid">
          {/* Crop Yield Trends */}
          <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-white to-green-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
                {t('cropYieldTrends')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yieldData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar dataKey="yield" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Rainfall Pattern */}
          <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-white to-blue-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-600">
                  <Droplets className="h-6 w-6" />
                </div>
                {t('rainfallPattern')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={yieldData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rainfall" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Income vs Expenses */}
          <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-white to-amber-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50 pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-600">
                  <FaIndianRupeeSign className="h-6 w-6" />
                </div>
                {t('incomeVsExpenses')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={incomeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar dataKey="income" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Crop Distribution */}
          <Card className="shadow-xl border-0 rounded-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-50 pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-600">
                  <Calendar className="h-6 w-6" />
                </div>
                {t('cropDistribution')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={cropDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ key, value }) => `${t(key)}: ${value}%`}
                  >
                    {cropDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};