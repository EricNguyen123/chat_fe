import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import React from 'react';
const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  className: string;
}

const Popper: React.FC<Props> = ({ children, className }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Popper;
