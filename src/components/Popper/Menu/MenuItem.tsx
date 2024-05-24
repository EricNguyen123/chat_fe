import ButtonItem from '../../ButtonItem';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface Props {
  data?: any;
  onClick?: any;
}

const MenuItem: React.FC<Props> = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <ButtonItem className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </ButtonItem>
    );
}

export default MenuItem;
