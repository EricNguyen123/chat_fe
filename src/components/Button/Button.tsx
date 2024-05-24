import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => any;
  className?: string;
}

const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <div className={cx('wrapper')}>
      <div {...props}>
        {children}
      </div>
    </div>
  );
};

export default Button;
