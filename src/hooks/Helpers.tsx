import { useEffect } from 'react';

export const useThemeMode = () => {
    const theme = 'dark';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('themeMode', theme);
    }, [theme]);

    return { theme };
};
