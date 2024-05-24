import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
}

const Menu: React.FC<Props> = ({ children }) => {
    return <nav className={cx('nav-bar')}>{children}</nav>;
}

export default Menu;
