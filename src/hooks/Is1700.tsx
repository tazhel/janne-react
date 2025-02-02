import { useEffect, useState } from 'react';

const Is1700 = (): boolean => {
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

    const isMobile = width <= 1700;

    return isMobile;
};

export default Is1700;
