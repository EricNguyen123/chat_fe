import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

interface Props {
  to: string;
  title: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'footer';
}

const MenuItem: React.FC<Props> = ({ title, to, icon, activeIcon, onClick, className, type }) => {
    return (
        <NavLink className={(nav) => cx('menu-item', className, { active: nav.isActive })} to={to} onClick={onClick}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title', type)}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
