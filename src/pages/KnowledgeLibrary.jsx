import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// (removed duplicate import)

import { BookOpen, Video, Download, Play, FileText, Headphones, ExternalLink } from 'lucide-react';

export const KnowledgeLibrary = () => {
  const { t } = useTranslation();
  // FAQ, videos, downloads as before...
  const faqs = [
    {
      question: t('faq1Q'),
      answer: t('faq1A'),
    },
    {
      question: t('faq2Q'),
      answer: t('faq2A'),
    },
    {
      question: t('faq3Q'),
      answer: t('faq3A'),
    },
  ];
  const videos = [
    {
      title: t('video1Title'),
      duration: '15 min',
      thumbnail: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=200&fit=crop',
      url: '#',
    },
    {
      title: t('video2Title'),
      duration: '22 min',
      thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop',
      url: '#',
    },
    {
      title: t('video3Title'),
      duration: '18 min',
      thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
      url: '#',
    },
  ];
  const downloads = [
    {
      title: t('download1Title'),
      description: t('download1Desc'),
      type: 'PDF',
      size: '2.5 MB',
    },
    {
      title: t('download2Title'),
      description: t('download2Desc'),
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      title: t('download3Title'),
      description: t('download3Desc'),
      type: 'MP3',
      size: '45 MB',
    },
  ];

  return (
    <div style={{ background: '#f7f7f0', minHeight: '100vh', padding: 0, margin: 0 }}>
      <style>{`
        .kl-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #232d18;
          margin-bottom: 0.2em;
          margin-top: 0.5em;
          letter-spacing: -1px;
        }
        .kl-subtitle {
          color: #7a8a7a;
          font-size: 1.1rem;
          margin-bottom: 2em;
        }
        .kl-tabs {
          display: flex;
          gap: 0.5em;
          background: #ecebe4;
          border-radius: 12px;
          padding: 6px;
          margin-bottom: 2em;
        }
        .kl-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #3d5c2b;
          background: none;
          border: none;
          border-radius: 8px;
          padding: 12px 0;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .kl-tab.active {
          background: #fff;
          color: #232d18;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
        }
        .kl-section {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
          padding: 32px 24px 24px 24px;
          margin-bottom: 32px;
        }
        .kl-faq-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #232d18;
          margin-bottom: 18px;
        }
        .kl-faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .kl-faq-item {
          background: #f7f7f0;
          border-radius: 10px;
          padding: 0;
          border: none;
        }
        .kl-faq-question {
          font-size: 1.1rem;
          font-weight: 600;
          color: #232d18;
          padding: 18px 24px;
          cursor: pointer;
          border-radius: 10px;
          background: #fff;
          border: 1.5px solid #ecebe4;
          margin-bottom: 0;
        }
        .kl-faq-answer {
          font-size: 1rem;
          color: #3d5c2b;
          padding: 0 24px 18px 24px;
        }
        .kl-video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .kl-video-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .kl-video-thumb {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .kl-video-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #3d5c2b;
          color: #fff;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: none;
          cursor: pointer;
        }
        .kl-video-duration {
          position: absolute;
          bottom: 10px;
          right: 16px;
          background: #232d18;
          color: #fff;
          border-radius: 8px;
          font-size: 0.95rem;
          padding: 2px 10px;
        }
        .kl-video-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #232d18;
          margin: 18px 0 10px 0;
          padding: 0 18px;
        }
        .kl-video-btn {
          margin: 0 18px 18px 18px;
          background: #ecebe4;
          color: #232d18;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          padding: 10px 0;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .kl-download-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .kl-download-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
          padding: 24px 20px 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }
        .kl-download-info {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .kl-download-icon {
          background: #eaf3e5;
          color: #295c2b;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kl-download-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #232d18;
        }
        .kl-download-desc {
          color: #7a8a7a;
          font-size: 1rem;
          margin-top: 2px;
        }
        .kl-download-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 6px;
        }
        .kl-download-type {
          background: #ecebe4;
          color: #232d18;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 2px 10px;
        }
        .kl-download-size {
          font-size: 0.95rem;
          color: #7a8a7a;
        }
        .kl-download-btn {
          background: #295c2b;
          color: #fff;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          padding: 10px 24px;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
        <div>
          <div className="kl-title">{t('knowledgeLibrary')}</div>
          <div className="kl-subtitle">{t('knowledgeLibrarySubtitle')}</div>
        </div>
        <KnowledgeTabs faqs={faqs} videos={videos} downloads={downloads} />
      </div>
    </div>
  );
};

function KnowledgeTabs({ faqs, videos, downloads }) {
  const [tab, setTab] = useState('faqs');
  return (
    <>
      <div className="kl-tabs">
        <button className={`kl-tab${tab === 'faqs' ? ' active' : ''}`} onClick={() => setTab('faqs')}>
          <BookOpen style={{ width: 22, height: 22 }} />
          Frequently Asked Questions
        </button>
        <button className={`kl-tab${tab === 'videos' ? ' active' : ''}`} onClick={() => setTab('videos')}>
          <Video style={{ width: 22, height: 22 }} />
          Educational Videos
        </button>
        <button className={`kl-tab${tab === 'downloads' ? ' active' : ''}`} onClick={() => setTab('downloads')}>
          <Download style={{ width: 22, height: 22 }} />
          Downloads
        </button>
      </div>
      {tab === 'faqs' && (
        <div className="kl-section">
          <div className="kl-faq-title">Frequently Asked Questions</div>
          <div className="kl-faq-accordion">
            {faqs.map((faq, idx) => (
              <FaqAccordion key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      )}
      {tab === 'videos' && (
        <div className="kl-section">
          <div className="kl-video-grid">
            {videos.map((video, idx) => (
              <div className="kl-video-card" key={idx}>
                <div style={{ position: 'relative' }}>
                  <img src={video.thumbnail} alt={video.title} className="kl-video-thumb" />
                  <button className="kl-video-play"><Play /></button>
                  <div className="kl-video-duration">{video.duration}</div>
                </div>
                <div className="kl-video-title">{video.title}</div>
                <button className="kl-video-btn">
                  <ExternalLink style={{ width: 18, height: 18 }} />
                  Watch Video
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === 'downloads' && (
        <div className="kl-section">
          <div className="kl-download-list">
            {downloads.map((dl, idx) => (
              <div className="kl-download-card" key={idx}>
                <div className="kl-download-info">
                  <div className="kl-download-icon">
                    {dl.type === 'PDF' ? <FileText style={{ width: 24, height: 24 }} /> : <Headphones style={{ width: 24, height: 24 }} />}
                  </div>
                  <div>
                    <div className="kl-download-title">{dl.title}</div>
                    <div className="kl-download-desc">{dl.description}</div>
                    <div className="kl-download-meta">
                      <span className="kl-download-type">{dl.type}</span>
                      <span className="kl-download-size">{dl.size}</span>
                    </div>
                  </div>
                </div>
                <button className="kl-download-btn">
                  <Download style={{ width: 18, height: 18 }} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function FaqAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="kl-faq-item">
      <div className="kl-faq-question" onClick={() => setOpen((o) => !o)}>
        {question}
        <span style={{ float: 'right', fontWeight: 700, fontSize: '1.2em' }}>{open ? '▾' : '▸'}</span>
      </div>
      {open && <div className="kl-faq-answer">{answer}</div>}
    </div>
  );
}