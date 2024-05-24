import classNames from 'classnames/bind';
import styles from './ButtonCustom.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => any;
  className?: string;
  disabled?: boolean;
  size?: '136-36-4' | '164-36-4' | '208-36-4';
  type?: 'Follow' | 'Message' | 'Edit Profiles';
}

const ButtonCustom = ({
  children,
  size,
  ...props
}: ButtonProps) => {
  return (
    <div className={cx('wrapper', `size-${size}`)} {...props}>
      {children}
    </div>
  );
};

export default ButtonCustom;
