import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';

const ScrollToTop = () => {
    const { component } = usePage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [component]);

    return null;
};

export default ScrollToTop;
