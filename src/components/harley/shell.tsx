import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Home, Layers, Route as RouteIcon, CircleHelp, UserRound, Plug, Settings2, PanelLeftClose, PanelLeftOpen, ChevronRight, Download, ShieldCheck, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const RELEASE_URL = 'https://github.com/flewqiee/harley/releases/latest';
export const GITHUB_URL = 'https://github.com/flewqiee/harley';
export function HarleyShell({ children }: { children: React.ReactNode }) {
 const [collapsed, setCollapsed] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const location = useRouterState({ select: s => s.location });
 const account = location.pathname !== '/';
 const title = location.pathname === '/account' ? 'Hesabım' : location.pathname === '/connections' ? 'Bağlantılar' : location.pathname === '/settings' ? 'Ayarlar' : location.hash === 'ozellikler' ? 'Özellikler' : location.hash === 'nasil' ? 'Nasıl çalışır' : location.hash === 'sss' ? 'SSS' : 'Ana sayfa';
 const close = () => setMobileOpen(false);
 return <div className={`harley-shell ${collapsed ? 'sidebar-mini' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
  <div className="mobile-scrim" onClick={close} aria-hidden="true" />
  <aside className="sidebar" aria-label="Ana menü">
   <Link to="/" className="brand" onClick={close}><span className="brand-mark">H</span><div className="brand-copy"><div className="brand-name">Harley</div><div className="brand-sub">Windows için kişisel AI</div></div></Link>
   <nav>
    <div className="nav-label">Keşfet</div>
    <Link to="/" className={`nav-item ${!account && !location.hash ? 'active' : ''}`} title="Ana sayfa" onClick={close}><Home/><span>Ana sayfa</span></Link>
    <Link to="/" hash="ozellikler" className={`nav-item ${location.hash === 'ozellikler' ? 'active' : ''}`} title="Özellikler" onClick={close}><Layers/><span>Özellikler</span></Link>
    <Link to="/" hash="nasil" className={`nav-item ${location.hash === 'nasil' ? 'active' : ''}`} title="Nasıl çalışır" onClick={close}><RouteIcon/><span>Nasıl çalışır</span></Link>
    <Link to="/" hash="sss" className={`nav-item ${location.hash === 'sss' ? 'active' : ''}`} title="SSS" onClick={close}><CircleHelp/><span>SSS</span></Link>
    <div className="nav-label account">Hesap</div>
    <Link to="/account" className={`nav-item ${location.pathname === '/account' ? 'active' : ''}`} title="Hesabım" onClick={close}><UserRound/><span>Hesabım</span></Link>
    <Link to="/connections" className={`nav-item ${location.pathname === '/connections' ? 'active' : ''}`} title="Bağlantılar" onClick={close}><Plug/><span>Bağlantılar</span></Link>
    <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`} title="Ayarlar" onClick={close}><Settings2/><span>Ayarlar</span></Link>
   </nav>
   <div className="sidebar-bottom"><div className="sidebar-note"><ShieldCheck/> Yerel öncelikli. Kontrol sende.<br/><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="nav-item"><Github/><span>Açık kaynak</span></a></div><Link to="/account" onClick={close} className="profile"><div className="avatar">H</div><div className="profile-copy"><div className="profile-name">Harley kullanıcısı</div><div className="profile-plan">Community · Örnek hesap</div></div><ChevronRight size={13} className="ml-auto text-muted-foreground"/></Link></div>
  </aside>
  <div className="shell-main"><header className="topbar"><div className="breadcrumb"><Button variant="ghost" size="icon" className="sidebar-toggle" title={collapsed ? 'Menüyü genişlet' : 'Menüyü daralt'} aria-label="Menüyü aç veya daralt" onClick={() => { if (window.matchMedia('(max-width: 767px)').matches) setMobileOpen(v => !v); else setCollapsed(v => !v); }}>{collapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}</Button><span>Harley</span><ChevronRight/><span className="breadcrumb-group">{account ? 'Hesap' : 'Keşfet'}</span><ChevronRight className="breadcrumb-group"/><span className="breadcrumb-current">{title}</span></div><div className="topbar-actions"><Button asChild variant="harley" size="sm" className="topbar-download"><a href={RELEASE_URL} target="_blank" rel="noreferrer"><Download/>İndir</a></Button><Link to="/account" aria-label="Hesabım" className="avatar">H</Link></div></header><main>{children}</main></div>
 </div>;
}
