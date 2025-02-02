import { useEffect, useState } from 'react';

const Is488 = (): boolean => {
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

    const isMobile = width <= 488;

    return isMobile;
};

export default Is488;
