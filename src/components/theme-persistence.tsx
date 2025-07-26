'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Fingerprint, Fish } from 'lucide-react';
import { THEMES_COLORFUL } from '@/lib/themes';

export function ThemePersistence() {
  const saveThemesToFile = () => {
    const data = JSON.stringify(THEMES_COLORFUL, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'themes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadThemesFromFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const themes = JSON.parse(event.target?.result as string);
            console.log('Loaded themes:', themes);
            // Here you would typically update the application's theme state
            // For now, we just log to console as we don't have a global theme state management.
            alert('Themes loaded. Check the console for details.');
          } catch (error) {
            console.error('Error parsing theme file:', error);
            alert('Error loading theme file. See console for details.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Fingerprint />
          <span className="sr-only">Save or Load Themes</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={saveThemesToFile}>
          <BrainCircuit className="mr-2 h-4 w-4" />
          <span>Save Themes</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={loadThemesFromFile}>
          <Fish className="mr-2 h-4 w-4" />
          <span>Load Themes</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
