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
    const userSelector = useSelector(({ users }: any) => users);
    const roomsSelector = useSelector(({ rooms }: any) => rooms);
    const { id } = useParams<{ id: string }>();
    const [checkMessage, setCheckMessage] = useState<boolean>(false);
    const [roomInfor, setRoomInfor] = useState<{ imagAvatar: string; name: string }>({ imagAvatar: '', name: '' });
    useEffect(() => {
        if (id) {
            roomsSelector.rooms.forEach((room: any) => {
                parseInt(room.id, 10) === parseInt(id, 10) &&
                    (room.groups === 0
                        ? setRoomInfor(room.users.find((r: any) => r.id !== userSelector.currentUser.id))
                        : setRoomInfor(room.roomInfor));
            });

            setCheckMessage(true);
        } else {
            setCheckMessage(false);
        }
    }, [id, roomsSelector.rooms]);

    return (
        <div className={cx('wrapper')}>
            <Loading isLoading={roomsSelector.loading} />
            <ListMessages />
            <BoxMessages checkMessage={checkMessage} id={id} roomInfor={roomInfor} />
        </div>
    );
};

export default Messages;
