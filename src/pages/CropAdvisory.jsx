import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Lightbulb, AlertTriangle, Clock, Droplets, Bug, Leaf } from 'lucide-react';

export const CropAdvisory = () => {
  const { farmer } = useAuth();
  const { t } = useTranslation();

  if (!farmer) return null;

  // Recommendations with translation keys
  const recommendations = [
    {
      id: 1,
      title: t('optimalIrrigation', { crop: farmer.crop_type }),
      description: t('irrigationDesc', { method: farmer.irrigation_method.toLowerCase(), stage: farmer.crop_stage.toLowerCase() }),
      priority: 'high',
      category: t('irrigationAdvisory'),
      icon: Droplets,
    },
    {
      id: 2,
      title: t('soilManagement', { soil: farmer.soil_type }),
      description: t('soilDesc', { soil: farmer.soil_type.toLowerCase() }),
      priority: 'medium',
      category: t('soilAdvisory'),
      icon: Leaf,
    },
    {
      id: 3,
      title: t('pestControl'),
      description: t('pestDesc', { stage: farmer.crop_stage.toLowerCase() }),
      priority: 'medium',
      category: t('pestAdvisory'),
      icon: Bug,
    },
    {
      id: 4,
      title: t('weatherAdvisory'),
      description: t('weatherDesc'),
      priority: 'high',
      category: t('weatherAdvisory'),
      icon: AlertTriangle,
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#e53e3e';
      case 'medium':
        return '#f6ad55';
      case 'low':
        return '#a0aec0';
      default:
        return '#e2e8f0';
    }
  };

  return (
    <div style={{ background: '#f7f7f0', minHeight: '100vh', padding: 0, margin: 0 }}>
      <style>{`
        .fd-crop-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #232d18;
          margin-bottom: 0.2em;
          margin-top: 0.5em;
          letter-spacing: -1px;
        }
        .fd-crop-subtitle {
          color: #7a8a7a;
          font-size: 1.1rem;
          margin-bottom: 2em;
        }
        .fd-crop-recommend {
          background: #e6f2db;
          border-radius: 12px;
          padding: 24px 32px 18px 32px;
          margin-bottom: 28px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }
        .fd-crop-recommend-icon {
          background: #fef3c7;
          color: #d97706;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }
        .fd-crop-recommend-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #232d18;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fd-crop-recommend-desc {
          color: #3d5c2b;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .fd-crop-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .fd-crop-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
          padding: 24px 28px 18px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 1.5px solid #e5e7eb;
        }
        .fd-crop-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .fd-crop-card-main {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .fd-crop-card-icon {
          background: #eaf3e5;
          color: #295c2b;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fd-crop-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #232d18;
        }
        .fd-crop-card-category {
          font-size: 1rem;
          color: #7a8a7a;
          font-weight: 500;
          margin-top: 2px;
        }
        .fd-crop-card-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f3f4f6;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          padding: 6px 16px;
          color: #fff;
        }
        .fd-crop-card-badge-high {
          background: #e53e3e;
        }
        .fd-crop-card-badge-medium {
          background: #f6ad55;
          color: #232d18;
        }
        .fd-crop-card-badge-low {
          background: #a0aec0;
        }
        .fd-crop-card-desc {
          color: #232d18;
          font-size: 1.08rem;
          margin-top: 8px;
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
        <div>
          <div className="fd-crop-title">{t('cropAdvisory')}</div>
          <div className="fd-crop-subtitle">{t('basedOnProfile')}</div>
        </div>
        <div className="fd-crop-recommend">
          <div className="fd-crop-recommend-icon">
            <Lightbulb style={{ width: 28, height: 28 }} />
          </div>
          <div>
            <div className="fd-crop-recommend-title">{t('recommendations')}</div>
            <div className="fd-crop-recommend-desc">
              {t('personalizedAdvice', {
                name: farmer.name,
                size: farmer.farm_size,
                crop: farmer.crop_type,
                method: farmer.irrigation_method,
                soil: farmer.soil_type
              })}
            </div>
          </div>
        </div>
        <div className="fd-crop-list">
          {recommendations.map((rec, index) => (
            <div className="fd-crop-card" key={rec.id}>
              <div className="fd-crop-card-header">
                <div className="fd-crop-card-main">
                  <div className="fd-crop-card-icon">
                    <rec.icon style={{ width: 24, height: 24 }} />
                  </div>
                  <div>
                    <div className="fd-crop-card-title">{rec.title}</div>
                    <div className="fd-crop-card-category">{rec.category}</div>
                  </div>
                </div>
                <div className={`fd-crop-card-badge fd-crop-card-badge-${rec.priority}`} style={{ background: getPriorityColor(rec.priority) }}>
                  {rec.priority === 'high' && <AlertTriangle style={{ width: 18, height: 18, marginRight: 4 }} />}
                  {rec.priority === 'medium' && <Clock style={{ width: 18, height: 18, marginRight: 4, color: '#232d18' }} />}
                  {rec.priority === 'low' && <Lightbulb style={{ width: 18, height: 18, marginRight: 4 }} />}
                  {t(`${rec.priority}Priority`)}
                </div>
              </div>
              <div className="fd-crop-card-desc">{rec.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};