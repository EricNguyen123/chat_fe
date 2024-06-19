import classNames from 'classnames/bind';
import { Link, LinkProps } from 'react-router-dom';
import styles from './ButtonItem.module.scss';
import React, { MouseEventHandler, ReactNode } from 'react';

const cx = classNames.bind(styles);

interface ButtonProps {
    to?: LinkProps['to'];
    href?: string;
    primary?: boolean;
    outline?: boolean;
    text?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    small?: boolean;
    large?: boolean;
    children: ReactNode;
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    passProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const ButtonItem: React.FC<ButtonProps> = ({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    passProps,
}) => {
    let Comp: React.ElementType = 'button';
    const props: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> = {
        onClick: onClick as MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>,
        ...passProps,
    };

    if (to) {
        (props as any).to = to;
        Comp = Link;
    } else if (href) {
        (props as any).href = href;
        Comp = 'a';
    }

    if (disabled) {
        if ('to' in props) {
            const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
            Object.keys(anchorProps).forEach((key) => {
                if (key.startsWith('on') && typeof (anchorProps as any)[key] === 'function') {
                    delete (anchorProps as any)[key];
                }
            });
        } else {
            const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
            Object.entries(buttonProps).forEach(([key, value]) => {
                if (key.startsWith('on') && typeof value === 'function') {
                    delete (buttonProps as any)[key];
                }
            });
        }
    }

    const classes = cx('wrapper', {
        [className as string]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default ButtonItem;
