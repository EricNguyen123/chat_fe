// src/pages/ChatComponent.tsx

import React, { useEffect, useState } from 'react';
import VoiceRecorder from '../../../../components/VoiceRecorder';
import classNames from 'classnames/bind';
import styles from './ChatComponent.module.scss';
import { useDispatch } from 'react-redux';
import { voiceMessages } from '../../../../redux/message/actions';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface Props {
    recordedBlobs: boolean;
    onViewer?: () => void;
}

const ChatComponent: React.FC<Props> = ({ recordedBlobs, onViewer }) => {
    const { t } = useTranslation('post');
    const [audioMessages, setAudioMessages] = useState<string[]>([]);
    const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
    const currentUserId = dataUser ? dataUser.id : undefined;
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const handleStop = (recordedBlob: Blob) => {
        const audioPath = URL.createObjectURL(recordedBlob);
        setAudioMessages((prevMessages) => [...prevMessages, audioPath]);
        dispatch(voiceMessages({ recordedBlob, userId: currentUserId, roomId: id }));
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('text-voice')}>{t('noti.voice_chat')}</h1>
            <VoiceRecorder onStop={handleStop} recordedBlobs={recordedBlobs} onViewer={onViewer} />
            {audioMessages.map((audioPath, index) => (
                <div key={index}>
                    <audio controls>
                        <source src={audioPath} type="audio/wav" />
                        {t('noti.not_support_audio')}
                    </audio>
                </div>
            ))}
        </div>
    );
};

export default ChatComponent;
