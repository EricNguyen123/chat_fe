import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AvatarIcon } from '../Icons';

const cx = classNames.bind(styles);

interface Props {
    className?: string;
    data: any;
    onClick?: () => void;
}

const AccountItem: React.FC<Props> = ({ data, onClick }) => {
    return (
        <Link to={`/profiles/${data.id}`} className={cx('wrapper')} onClick={onClick}>
            <AvatarIcon avatar={data.imagAvatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={'text-name'}>{data.name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.email}</span>
            </div>
        </Link>
    );
};

export default AccountItem;
