import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/components/ui/theme-provider';

const Navigation = () => {
  const { pathname } = useLocation();
  const { setTheme, theme } = useTheme();

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/provisioning', label: '자동화된 프로비저닝' },
    { path: '/configuration', label: '구성 관리' },
    { path: '/monitoring', label: '모니터링 및 로깅' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">InfraAutomation</Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    pathname === item.path
                      ? "bg-primary-foreground text-primary"
                      : "hover:bg-primary-foreground/10"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;