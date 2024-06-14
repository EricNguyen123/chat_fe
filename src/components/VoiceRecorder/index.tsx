// src/components/VoiceRecorder/index.tsx

import React, { useEffect, useState } from 'react';
import { ReactMic } from 'react-mic-recorder';
import classNames from 'classnames/bind';
import styles from './VoiceRecorder.module.scss';
import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

interface VoiceRecorderProps {
    onStop: (recordedBlob: Blob) => void;
    recordedBlobs: boolean;
    onViewer?: () => void;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ onStop, recordedBlobs, onViewer }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);

    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };

    const handleStop = (recordedBlob: any) => {
        setRecordedBlob(recordedBlob.blob);
    };

    const handleConfirm = () => {
        if (recordedBlob) {
            onStop(recordedBlob);
            setRecordedBlob(null);
            onViewer && onViewer();
        }
    };

    const handleCancel = () => {
        setRecordedBlob(null);
    };

    useEffect(() => {
        if (recordedBlobs) {
            setRecordedBlob(null);
        }
    }, [recordedBlobs]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('input-voice')}>
                    <ReactMic className={cx('mic')} record={isRecording} onStop={handleStop} mimeType="audio/wav" />
                    <div className={cx('box-voice')}>
                        {!isRecording && (
                            <button
                                onClick={startRecording}
                                className={cx('btn-voice')}
                                type="button"
                                disabled={isRecording}
                            >
                                <PlayCircleOutlined style={{ fontSize: '40px' }} />
                            </button>
                        )}
                        {isRecording && (
                            <button
                                onClick={stopRecording}
                                className={cx('btn-voice')}
                                type="button"
                                disabled={!isRecording}
                            >
                                <PauseCircleOutlined style={{ fontSize: '40px' }} />
                            </button>
                        )}
                    </div>
                </div>
                {recordedBlob && (
                    <div className={cx('preview')}>
                        <span className={cx('text-preview')}>Preview</span>
                        <audio controls src={URL.createObjectURL(recordedBlob)} />
                        <div className={cx('box-btn')}>
                            <button onClick={handleConfirm} className={cx('btn')} type="button">
                                Confirm
                            </button>
                            <button onClick={handleCancel} className={cx('btn')} type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VoiceRecorder;
