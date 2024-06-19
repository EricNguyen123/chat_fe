import React, { useMemo, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import styles from './PopupAddGroup.module.scss';
import { PlusImport } from '../../../../components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, ConfigProvider } from 'antd';
import AccountItem from '../../../../components/AccountItem';
import { createGroupRoom } from '../../../../redux/room/actions';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const validationSchema = Yup.object({
    title: Yup.string().required('Tên nhóm là bắt buộc'),
    mediaItem: Yup.object({
        mediaType: Yup.string().required('Loại tệp là bắt buộc'),
        mediaUrl: Yup.string().required('URL tệp là bắt buộc'),
    }).nullable(),
});

const PopupAddGroup: React.FC = () => {
    const { t } = useTranslation('messages');
    const dispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const userSelector = useSelector(({ users }: any) => users);
    const data = localStorage.data ? JSON.parse(localStorage.data) : undefined;
    const currentUser = data ? data.id : undefined;
    const [checkedList, setCheckedList] = useState<number[]>([]);

    const initialValues = {
        title: '',
        mediaItem: {
            mediaType: '',
            mediaUrl: '',
        },
    };

    const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
        try {
            dispatch(createGroupRoom({ ...values, userIds: checkedList }));
            resetForm();
        } catch (error) {
        } finally {
            setSubmitting(false);
        }
    };

    const users: any[] = useMemo(() => {
        if (currentUser && Array.isArray(userSelector.usersInfo) && userSelector.usersInfo.length > 0) {
            const newUsers: any[] = [];
            userSelector.usersInfo.forEach((item: any) => {
                if (item.id !== currentUser && item.isFollowing) {
                    newUsers.push({ ...item });
                }
            });
            return [...newUsers];
        }
        return [];
    }, [currentUser, userSelector.usersInfo]);

    const handleCheckboxChange = (checkedValues: any) => {
        setCheckedList(checkedValues);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-popup')}>
                <div className={cx('title-popup')}>
                    <span className={cx('text')}>{t('header.add_group')}</span>
                </div>
                <div className={cx('body-header')}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ values, setFieldValue, isSubmitting }) => (
                            <Form>
                                <div className={cx('box-add-name')}>
                                    <div className={cx('item', 'item-img')}>
                                        <div
                                            className={cx('custum-file-upload')}
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <label htmlFor="media" className={cx('label')}></label>
                                            <div className={cx('icon')}>
                                                <PlusImport width={'50px'} height={'50px'} />
                                            </div>
                                            <input
                                                className={cx('input-img')}
                                                type="file"
                                                id="media"
                                                accept="image/*"
                                                ref={fileInputRef}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const files = e.target.files;
                                                    if (files && files.length > 0) {
                                                        const file = files[0];
                                                        const mediaItem = {
                                                            mediaType: file.type,
                                                            mediaUrl: URL.createObjectURL(file),
                                                            file: file,
                                                        };
                                                        setFieldValue('mediaItem', mediaItem);
                                                    }
                                                }}
                                            />
                                            {values.mediaItem.mediaUrl && (
                                                <div className={cx('box-preview')}>
                                                    <div className={cx('preview-container')}>
                                                        <img
                                                            src={values.mediaItem.mediaUrl}
                                                            alt="media"
                                                            className={cx('preview-img')}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('item', 'item-input-name')}>
                                        <label className={cx('label')} htmlFor="title"></label>
                                        <Field
                                            id="title"
                                            name="title"
                                            placeholder="Add Group..."
                                            className={cx('input')}
                                        />
                                    </div>
                                </div>
                                <button type="submit" disabled={isSubmitting} className={cx('submit')}>
                                    <span className={cx('text-btn')}>{t('btn.btn_create')}</span>
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {users.length > 0 && (
                <>
                    <h2 className={cx('title-nav-footer')}>{t('header.accounts')}</h2>
                    <div className={cx('line-nav')}></div>
                </>
            )}
            <div className={cx('body-popup')}>
                {users.length > 0 && (
                    <>
                        <Checkbox.Group style={{ width: '100%' }} value={checkedList} onChange={handleCheckboxChange}>
                            {users.map((user, index) => (
                                <div key={index} className={cx('account-item-wrapper')}>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: 'rgb(254, 44, 85)',
                                            },
                                        }}
                                    >
                                        <Checkbox value={user.id} className={cx('checkbox')} />
                                    </ConfigProvider>
                                    <div className={cx('account-item')}>
                                        <AccountItem data={user} className={cx('item-ac')} onClick={() => {}} />
                                    </div>
                                </div>
                            ))}
                        </Checkbox.Group>
                    </>
                )}
            </div>
        </div>
    );
};

export default PopupAddGroup;
