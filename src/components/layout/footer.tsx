import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Helping you find clarity and achieve your personal and professional goals.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Woodberry Down, London N4 2TG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:1234567890" className="text-muted-foreground hover:text-primary transition-colors">1234 567 890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:test@test.com" className="text-muted-foreground hover:text-primary transition-colors">test@test.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clarity & Growth. All rights reserved. Website: website.com</p>
        </div>
      </div>
    </footer>
  );
}
