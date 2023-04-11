import { useState, useEffect } from 'react';
import '../css/dark.css';

export const useDarkMode = () => {
    const [ theme, setTheme ] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.classList.add('dark-mode');
        } else {
            setTheme('light');
            document.body.classList.remove('dark-mode');
        }
    };
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setTheme('dark');
            document.body.classList.add('dark-mode');
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [ theme ]);
    return [ theme, toggleTheme ];
};
