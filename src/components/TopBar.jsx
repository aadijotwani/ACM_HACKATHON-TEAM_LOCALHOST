import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { MapPin, Languages, LogOut } from 'lucide-react';

export const TopBar = () => {
  const { farmer, logout } = useAuth();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      style={{
        background: '#fff',
        borderBottom: '1.5px solid #e5e7eb',
        minHeight: 72,
        padding: '0 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {farmer && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontWeight: 700, fontSize: 22, color: '#232d18' }}>{t('welcome')}, {farmer.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2, color: '#7a8a7a', fontSize: 16 }}>
              <MapPin style={{ width: 18, height: 18, color: '#7a8a7a' }} />
              <span style={{ fontWeight: 500 }}>{farmer.location}</span>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-11 px-5 rounded-lg border-primary/20 bg-white hover:bg-primary/10 hover:border-primary/40 text-base font-semibold shadow-none">
              <Languages className="h-5 w-5 mr-2" />
              {t('language')}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-xl shadow-lg border-primary/20">
            <DropdownMenuItem onClick={() => changeLanguage('en')} className="rounded-lg text-base">
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('hi')} className="rounded-lg text-base">
              हिंदी
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('mr')} className="rounded-lg text-base">
              मराठी
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="sm" onClick={logout} className="h-11 px-5 rounded-lg border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 text-base font-semibold shadow-none">
          <LogOut className="h-5 w-5 mr-2" />
          {t('logout')}
        </Button>
      </div>
    </header>
  );
};