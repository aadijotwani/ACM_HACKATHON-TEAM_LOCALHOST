import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Sprout, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock farmer data for demonstration
const mockFarmers = [
  {
    id: '1',
    phone: '9876543210',
    name: 'Ramesh Patil',
    location: 'Pune, Maharashtra',
    soil_type: 'Black Cotton',
    crop_type: 'Wheat',
    irrigation_method: 'Drip Irrigation',
    crop_stage: 'Flowering',
    farm_size: 5.2,
    preferred_language: 'mr',
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    phone: '8368763700',
    name: 'Aditya Gaur',
    location: 'Jaipur, Rajasthan',
    soil_type: 'Loamy',
    crop_type: 'Wheat',
    irrigation_method: 'Drip Irrigation',
    crop_stage: 'Vegetative',
    farm_size: 3,
    preferred_language: 'hi',
    created_at: '2024-02-20T14:15:00Z'
  }
];

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSendOTP = async () => {
    if (phone.length !== 10) {
      toast({
        title: t('error'),
        description: t('invalidPhone'),
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const farmer = mockFarmers.find(f => f.phone === phone);
      if (farmer) {
        console.log('Mock OTP sent:', '123456');
        toast({
          title: t('success'),
          description: 'OTP sent successfully! Use 123456',
        });
        setStep('otp');
      } else {
        toast({
          title: t('error'),
          description: 'Farmer not found in database',
          variant: 'destructive',
        });
      }
      setLoading(false);
    }, 1000);
  };

  const handleVerifyOTP = async () => {
    if (otp !== '123456') {
      toast({
        title: t('error'),
        description: t('invalidOTP'),
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const farmer = mockFarmers.find(f => f.phone === phone);
      if (farmer) {
        login(farmer);
        toast({
          title: t('success'),
          description: `Welcome, ${farmer.name}!`,
        });
        navigate('/dashboard');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        .fd-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.06);
          padding: 40px 32px 32px 32px;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .fd-logo {
          width: 64px;
          height: 64px;
          background: #295c2b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
        }
        .fd-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 4px;
          text-align: center;
        }
        .fd-subtitle {
          color: #7a8a7a;
          font-size: 1rem;
          margin-bottom: 32px;
          text-align: center;
        }
        .fd-label {
          font-size: 1rem;
          font-weight: 500;
          color: #222;
          margin-bottom: 8px;
        }
        .fd-input-wrap {
          position: relative;
          width: 100%;
        }
        .fd-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #b0b0b0;
        }
        .fd-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          color: #222;
          background: #f8faf7;
          outline: none;
          margin-bottom: 0;
          transition: border 0.2s;
        }
        .fd-input:focus {
          border: 1.5px solid #295c2b;
          background: #fff;
        }
        .fd-btn {
          width: 100%;
          padding: 12px 0;
          background: #295c2b;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          margin-top: 12px;
          margin-bottom: 0;
          cursor: pointer;
          transition: background 0.2s;
        }
        .fd-btn:disabled {
          background: #b0b0b0;
          cursor: not-allowed;
        }
        .fd-btn:hover:not(:disabled) {
          background: #1e3d1e;
        }
        .fd-btn-outline {
          width: 100%;
          padding: 12px 0;
          background: #f8faf7;
          color: #222;
          font-size: 1rem;
          font-weight: 600;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-top: 12px;
          margin-bottom: 0;
          cursor: pointer;
          transition: background 0.2s;
        }
        .fd-btn-outline:hover {
          background: #f0f0f0;
        }
        .fd-demo {
          color: #7a8a7a;
          font-size: 0.95rem;
          margin-top: 18px;
          text-align: center;
        }
        .fd-otp-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1.2rem;
          color: #222;
          background: #f8faf7;
          outline: none;
          text-align: center;
          letter-spacing: 0.18em;
          margin-bottom: 0;
          transition: border 0.2s;
        }
        .fd-otp-input:focus {
          border: 1.5px solid #295c2b;
          background: #fff;
        }
      `}</style>
      <div className="fd-card">
        <div className="fd-logo">
          <Sprout style={{ width: 32, height: 32, color: '#fff' }} />
        </div>
        <div className="fd-title">Project Trupti</div>
        <div className="fd-subtitle">PMKVY Farmer Dashboard</div>
        {step === 'phone' ? (
          <form style={{ width: '100%' }} onSubmit={e => { e.preventDefault(); handleSendOTP(); }}>
            <div className="fd-label">Phone Number</div>
            <div className="fd-input-wrap" style={{ marginBottom: 24 }}>
              <span className="fd-input-icon">
                <Phone style={{ width: 20, height: 20 }} />
              </span>
              <input
                className="fd-input"
                type="tel"
                placeholder="Enter farmer phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                maxLength={10}
                autoFocus
                autoComplete="tel"
              />
            </div>
            <button
              type="submit"
              className="fd-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
            {/* <div className="fd-demo">Demo phones: 9876543210, 9123456789</div> */}
          </form>
        ) : (
          <form style={{ width: '100%' }} onSubmit={e => { e.preventDefault(); handleVerifyOTP(); }}>
            <div className="fd-label">Verify OTP</div>
            <input
              className="fd-otp-input"
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              maxLength={6}
              autoFocus
              autoComplete="one-time-code"
            />
            <button
              type="submit"
              className="fd-btn"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            <button
              type="button"
              className="fd-btn-outline"
              onClick={() => setStep('phone')}
              style={{ marginTop: 12 }}
            >
              Back to Phone
            </button>
            <div className="fd-demo">Demo OTP: 123456</div>
          </form>
        )}
      </div>
    </div>
  );
};