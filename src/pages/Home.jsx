

import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { MapPin, Droplets, Sprout, Calendar, TrendingUp } from 'lucide-react';


export const Home = () => {
  const { farmer } = useAuth();
  const { t, i18n } = useTranslation();
  if (!farmer) return null;

  const profileItems = [
    {
      label: t('location'),
      value: farmer.location,
      icon: MapPin,
      badgeColor: '#3d5c2b',
      badgeBg: '#eaf3e5',
    },
    {
      label: t('soilType'),
      value: farmer.soil_type,
      icon: TrendingUp,
      badgeColor: '#5c4a2b',
      badgeBg: '#f3eee5',
    },
    {
      label: t('cropType'),
      value: farmer.crop_type,
      icon: Sprout,
      badgeColor: '#3d5c2b',
      badgeBg: '#eaf3e5',
    },
    {
      label: t('irrigationMethod'),
      value: farmer.irrigation_method,
      icon: Droplets,
      badgeColor: '#5c4a2b',
      badgeBg: '#f3eee5',
    },
    {
      label: t('cropStage'),
      value: farmer.crop_stage,
      icon: Calendar,
      badgeColor: '#3d5c2b',
      badgeBg: '#eaf3e5',
    },
    {
      label: t('farmSize'),
      value: `${farmer.farm_size} ${t('acres')}`,
      icon: TrendingUp,
      badgeColor: '#5c4a2b',
      badgeBg: '#f3eee5',
    },
  ];

  return (
    <div style={{ background: '#f7f7f0', minHeight: '100vh', padding: '0', margin: 0 }}>
      <style>{`
        .fd-dash-title {
          font-size: 3rem;
          font-weight: 800;
          color: #232d18;
          margin-bottom: 0.2em;
          margin-top: 0.5em;
          letter-spacing: -1px;
        }
        .fd-dash-subtitle {
          color: #7a8a7a;
          font-size: 1.1rem;
          margin-bottom: 2em;
        }
        .fd-dash-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        .fd-dash-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
          padding: 24px 20px 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 90px;
        }
        .fd-dash-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #232d18;
          margin-bottom: 6px;
        }
        .fd-dash-badge {
          display: inline-block;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 16px;
          padding: 4px 16px;
          margin-top: 2px;
          margin-bottom: 2px;
        }
        .fd-dash-icon {
          margin-right: 8px;
          vertical-align: middle;
        }
        .fd-dash-next {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
          padding: 24px 20px 18px 20px;
          margin-bottom: 32px;
        }
        .fd-dash-next-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #232d18;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .fd-dash-next-date {
          font-size: 1.1rem;
          color: #232d18;
          margin-bottom: 8px;
        }
        .fd-dash-next-badge {
          display: inline-block;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 16px;
          padding: 4px 16px;
          background: #eaf3e5;
          color: #295c2b;
          margin-right: 10px;
        }
        .fd-dash-next-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #3bbf3b;
          border-radius: 50%;
          vertical-align: middle;
          animation: fd-pulse 1.2s infinite alternate;
        }
        @keyframes fd-pulse {
          0% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
        <div>
          <div className="fd-dash-title">{t('farmerProfile')}</div>
          <div className="fd-dash-subtitle">{t('dashboardSubtitle') || 'Overview of farmer information and farm details'}</div>
        </div>
        <div className="fd-dash-grid">
          {profileItems.map((item, idx) => (
            <div className="fd-dash-card" key={item.label}>
              <div className="fd-dash-label">
                <item.icon className="fd-dash-icon" style={{ color: '#295c2b', width: 22, height: 22 }} />
                {item.label}
              </div>
              <span
                className="fd-dash-badge"
                style={{ background: item.badgeBg, color: item.badgeColor }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="fd-dash-next">
          <div className="fd-dash-next-title">
            <Calendar style={{ color: '#295c2b', width: 22, height: 22 }} />
            {t('nextCall')}
          </div>
          <div className="fd-dash-next-date">
            {t('nextScheduledConsultation') || 'Next scheduled consultation:'} <b>September 13, 2025 at 5:00 AM</b>
          </div>
          <span className="fd-dash-next-badge">{t('scheduled') || 'Scheduled'}</span>
          <span className="fd-dash-next-dot"></span>
        </div>
      </div>
    </div>
  );
};