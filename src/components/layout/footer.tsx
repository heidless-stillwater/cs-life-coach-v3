import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const aboutLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/testimonials', label: 'Testimonials' },
];

const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
]

const quickLinks = [
    { href: '/services', label: 'Our Services' },
    { href: '/contact', label: 'Contact' },
];

const socialLinks = [
    { href: '#', icon: <Facebook /> },
    { href: '#', icon: <Twitter /> },
    { href: '#', icon: <Linkedin /> },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div>
                 <div>
                    <h3 className="font-headline text-lg font-semibold">About Us</h3>
                    <ul className="mt-4 space-y-2">
                    {aboutLinks.map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
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
          
           <div className="space-y-8">
            <div>
                <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="font-headline text-lg font-semibold">Legal</h3>
                <ul className="mt-4 space-y-2">
                {legalLinks.map((link, index) => (
                    <li key={`${link.label}-${index}`}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Your Email" className="flex-1" />
                <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex justify-between items-center flex-wrap gap-4">
            <p className="text-sm text-muted-foreground text-left">&copy; {new Date().getFullYear()} Clarity & Growth. All rights reserved.</p>
            <div className="flex gap-4 items-center">
                {socialLinks.map((link, i) => (
                    <Link key={i} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
