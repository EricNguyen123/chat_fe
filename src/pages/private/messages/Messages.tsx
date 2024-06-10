import classNames from 'classnames/bind';
import styles from './Messages.module.scss';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import ListMessages from './list-messages';
import BoxMessages from './box-messages';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const Messages = () => {
    const roomsSelector = useSelector(({ rooms }: any) => rooms);
    const { id } = useParams<{ id: string }>();
    const [checkMessage, setCheckMessage] = useState<boolean>(false);
    useEffect(() => {
        if (id) {
            setCheckMessage(true);
        } else {
            setCheckMessage(false);
        }
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            <Loading isLoading={roomsSelector.loading} />
            <ListMessages />
            <BoxMessages checkMessage={checkMessage} />
        </div>
    );
};

export default Messages;
