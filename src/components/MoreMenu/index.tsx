import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import classNames from 'classnames/bind';
import styles from './MoreMenu.module.scss';
import MenuItem from '../Popper/Menu/MenuItem';
import { MoreIcon } from '../Icons';

const cx = classNames.bind(styles);

interface MoreMenuProps {
    hideOnClick?: boolean;
    items?: any[];
    className?: string;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ items = [], hideOnClick = true, className }) => {
    const renderItems = () => {
        return items.map((item, index) =>
            item.rule ? <MenuItem key={index} data={item} onClick={item.action} /> : <div key={index}></div>,
        );
    };

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            offset={[0, 0]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('more-icon')}>
                <MoreIcon className={cx(className)} />
            </div>
        </Tippy>
    );
};

export default MoreMenu;
