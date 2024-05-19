import { useEffect, useState } from 'react';

export const useThemeMode = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    // useEffect(() => {
    //     const storedMode = localStorage.getItem('themeMode');
    //     if (storedMode) {
    //         setTheme(storedMode as 'light' | 'dark');
    //     } else {
    //         const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //         setTheme(prefersDarkMode ? 'dark' : 'light');
    //     }
    // }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('themeMode', theme);
    }, [theme]);

    useEffect(() => {
        setTheme('dark');
    }, [theme]);

    return { theme };
};
