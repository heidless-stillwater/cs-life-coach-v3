import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-semibold text-foreground", className)}>
      <Leaf className="h-6 w-6 text-primary" />
      <span className="font-headline">Clarity & Growth</span>
    </Link>
  );
}
