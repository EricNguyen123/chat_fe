import React, { useEffect, useRef, useState } from 'react';
interface Props {
    className?: string;
    children: React.ReactNode;
    openView: boolean;
    closeView: () => void;
}
const ClickOutside: React.FC<Props> = ({ className, children, openView, closeView }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(openView);
    }, [openView]);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                setShow(false);
                closeView();
            }
        };

        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show]);
    return (
        <>
            {show && (
                <div ref={rootRef} className={className}>
                    {children}
                </div>
            )}
        </>
    );
};

export default ClickOutside;
