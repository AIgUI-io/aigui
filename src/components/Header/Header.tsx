import React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from "@/components/ui/button";

// Demo navigation links
const defaultNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Explore', href: '/explore' },
  { name: 'Community', href: '/community' },
  { name: 'Templates', href: '/templates' },
  { name: 'Docs', href: '/docs' },
];

// Demo user data
const defaultUserData = {
  isLoggedIn: false,
};

export function Header({ 
  className = '', 
  children = null,
  navLinks = defaultNavLinks,
  userData = defaultUserData,
  logoText = "AIgUI",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background',
        className
      )}
    >
      <div className={cn('mx-auto px-6')}>
        <div className={cn('flex h-16 items-center')}>
          {/* Logo and Navigation Container */}
          <div className={cn('flex items-center flex-1')}>
            {/* Logo */}
            <a href="/" className={cn('flex items-center gap-2 mr-8')}>
              <div className={cn('flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold')}>
                AI
              </div>
              <span className={cn('text-xl font-bold')}>{logoText}</span>
            </a>

            {/* Desktop Navigation - Now next to logo */}
            <nav className={cn('hidden md:flex items-center space-x-6')}>
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    link.href === window.location.pathname ? 'text-primary' : 'text-foreground/70'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className={cn('flex items-center gap-4')}>
            {/* Register Button */}
            <Button 
              variant="outline" 
              className={cn('hidden md:flex')}
            >
              注册
            </Button>

            {/* Login Button */}
            <Button>
              登录
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn('md:hidden')}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className={cn('h-5 w-5')} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={cn('md:hidden py-4 border-t')}>
            <nav className={cn('flex flex-col space-y-4')}>
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-md',
                    link.href === window.location.pathname ? 'bg-accent text-primary' : 'text-foreground/70'
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className={cn('flex gap-2 mt-2')}>
                <Button variant="outline" className={cn('flex-1')}>
                  注册
                </Button>
                <Button className={cn('flex-1')}>
                  登录
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {children}
    </header>
  );
}
