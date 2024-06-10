import React, { useRef, useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import styles from './MessageForm.module.scss';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { EmojiIcon, MicrophoneIcon, ImageIcon, CloseButton, SendFlyIcon } from '../../../../components/Icons';
import { MediaItem } from '../../../../types/app';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

const validationSchema = Yup.object({
    message: Yup.string().required('Message is required'),
    mediaItems: Yup.array()
        .of(
            Yup.object({
                mediaType: Yup.string().required('Media type is required'),
                mediaUrl: Yup.string().required('Media URL is required'),
            }),
        )
        .required(),
});

interface Props {
    className?: string;
}

interface FormValues {
    message: string;
    mediaItems: MediaItem[];
}

const MessageForm: React.FC<Props> = ({}) => {
    const { t } = useTranslation('messages');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const emojiPickerRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const initialValues: FormValues = {
        message: '',
        mediaItems: [],
    };

    useEffect(() => {
        setIsSubmitButtonDisabled(!message.trim());
    }, [message]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        };

        if (showEmojiPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmojiPicker]);

    const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
        try {
            console.log(values);
            resetForm();
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const addEmoji = (emoji: any, setFieldValue: (field: string, value: any) => void) => {
        const newMessage = message + emoji.native;
        setMessage(newMessage);
        setFieldValue('message', newMessage);
        console.log(newMessage);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values, setFieldValue, isSubmitting }) => {
                return (
                    <Form className={cx('wrapper')}>
                        <div className={cx('icon-wrapper')}>
                            <div className={cx('icon')} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                                <EmojiIcon />
                            </div>
                            {showEmojiPicker && (
                                <div ref={emojiPickerRef} className={cx('emoji-picker')}>
                                    <Picker
                                        data={data}
                                        onEmojiSelect={(emoji: any) => addEmoji(emoji, setFieldValue)}
                                    />
                                </div>
                            )}
                        </div>
                        <Field
                            type="text"
                            name="message"
                            placeholder={t('messages.message')}
                            className={cx('input')}
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const { value } = e.target;
                                setFieldValue('message', value);
                                setMessage(value);
                            }}
                        />
                        <div className={cx('icon')}>
                            <MicrophoneIcon />
                        </div>
                        <div className={cx('item', 'item-img')}>
                            <div className={cx('custum-file-upload')} onClick={() => fileInputRef.current?.click()}>
                                <label htmlFor="media" className={cx('label')}></label>
                                <div className={cx('icon')}>
                                    <ImageIcon />
                                </div>

                                <input
                                    className={cx('input-img')}
                                    type="file"
                                    id="media"
                                    accept="image/*,video/*"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const files = e.target.files;
                                        if (files) {
                                            const newMediaItems: MediaItem[] = [];
                                            for (let i = 0; i < files.length; i++) {
                                                const file = files[i];
                                                newMediaItems.push({
                                                    mediaType: file.type,
                                                    mediaUrl: URL.createObjectURL(file),
                                                    file: file,
                                                });
                                            }
                                            setFieldValue('mediaItems', [...values.mediaItems, ...newMediaItems]);
                                        }
                                    }}
                                />
                                <FieldArray
                                    name="mediaItems"
                                    render={({ remove }) => (
                                        <div>
                                            {values.mediaItems.length > 0 && (
                                                <div className={cx('box-preview')}>
                                                    {values.mediaItems.map((media, index) => (
                                                        <div key={index} className={cx('preview-container')}>
                                                            <Field
                                                                name={`mediaItems.${index}.mediaType`}
                                                                type="hidden"
                                                            />
                                                            <Field
                                                                name={`mediaItems.${index}.mediaUrl`}
                                                                type="hidden"
                                                            />
                                                            <img
                                                                src={media.mediaUrl}
                                                                alt={`media-${index}`}
                                                                className={cx('preview-img')}
                                                            />
                                                            <button
                                                                type="button"
                                                                className={cx('remove-btn')}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    remove(index);
                                                                }}
                                                            >
                                                                <CloseButton className={cx('icon-close')} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                />
                                <ErrorMessage name="mediaItems" component="div" />
                            </div>
                        </div>
                        {!isSubmitButtonDisabled && (
                            <button type="submit" className={cx('submit')} disabled={isSubmitting}>
                                <SendFlyIcon />
                            </button>
                        )}
                    </Form>
                );
            }}
        </Formik>
    );
};

export default MessageForm;
