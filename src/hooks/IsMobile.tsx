import { useEffect, useState } from 'react';

const IsMobile = (): boolean => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowSizeChange = (): void => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return (): void => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

    return isMobile;
};

export default IsMobile;
