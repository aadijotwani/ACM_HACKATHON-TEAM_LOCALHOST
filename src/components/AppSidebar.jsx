import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSidebar } from '@/components/ui/sidebar';
import { Home, BarChart3, Lightbulb, BookOpen, Sprout } from 'lucide-react';

const navItems = [
  { title: 'home', url: '/dashboard', icon: Home },
  { title: 'graphs', url: '/dashboard/graphs', icon: BarChart3 },
  { title: 'cropAdvisory', url: '/dashboard/crop-advisory', icon: Lightbulb },
  { title: 'knowledgeLibrary', url: '/dashboard/knowledge', icon: BookOpen },
];


export function AppSidebar() {
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <aside
      style={{
        width: 290,
        minHeight: '100vh',
        background: '#f8faf7',
        borderRight: '2px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        boxShadow: '2px 0 12px 0 rgba(0,0,0,0.03)',
      }}
    >
      <div style={{ padding: '2.5rem 2rem 1.5rem 2rem', borderBottom: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ background: '#295c2b', borderRadius: 18, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sprout style={{ color: '#fff', width: 32, height: 32 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontWeight: 800, fontSize: 21, color: '#295c2b', lineHeight: 1 }}>Project Trupti</span>
          <span style={{ fontWeight: 500, fontSize: 16, color: '#7a8a7a', marginTop: 2 }}>Portal</span>
        </div>
      </div>
      <div style={{ padding: '2.2rem 1.5rem 0.5rem 1.5rem', flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: '#232d18', marginBottom: 28, letterSpacing: -1 }}>{t('dashboard')}</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              end={item.url === '/dashboard'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                padding: '18px 22px',
                borderRadius: 16,
                fontWeight: 700,
                fontSize: 20,
                color: isActive(item.url) ? '#295c2b' : '#232d18',
                background: isActive(item.url) ? '#eaf3e5' : 'transparent',
                boxShadow: isActive(item.url) ? '0 2px 8px 0 rgba(41,92,43,0.07)' : 'none',
                border: isActive(item.url) ? '2px solid #295c2b' : '2px solid transparent',
                transition: 'all 0.18s',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <item.icon style={{ width: 26, height: 26, color: isActive(item.url) ? '#295c2b' : '#7a8a7a', flexShrink: 0 }} />
              <span>{t(item.title)}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}