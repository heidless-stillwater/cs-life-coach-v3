'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Moon, Palette, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { THEMES_COLORFUL } from '@/lib/themes';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function ThemeSwitcher() {
  const { theme, setTheme, mode, setMode } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette />
          <span className="sr-only">Theme switcher</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="p-2 flex items-center justify-between">
            <Label htmlFor="dark-mode-switch" className='pr-2 flex items-center gap-2'>
                {mode === 'dark' ? <Moon /> : <Sun />}
                <span>{mode === 'dark' ? 'Dark' : 'Light'} Mode</span>
            </Label>
            <Switch
                id="dark-mode-switch"
                checked={mode === 'dark'}
                onCheckedChange={(checked) => setMode(checked ? 'dark' : 'light')}
            />
        </div>
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Color Themes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {THEMES_COLORFUL.map((colorTheme) => (
                <DropdownMenuItem
                  key={colorTheme.name}
                  onClick={() => setTheme(colorTheme)}
                  className="flex items-center gap-2"
                >
                  <div className="relative h-4 w-4">
                    <div
                      className="absolute h-4 w-4 rounded-full"
                      style={{ backgroundColor: `hsl(${colorTheme.primary})` }}
                    />
                    <div
                      className="absolute right-[-4px] bottom-0 h-3 w-3 rounded-full border-2 border-background"
                      style={{ backgroundColor: `hsl(${colorTheme.accent})` }}
                    />
                  </div>
                  <span
                    style={{
                      color: mode === 'dark' ? 'hsl(var(--foreground))' : 'hsl(var(--foreground))',
                    }}
                  >
                    {colorTheme.name}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
