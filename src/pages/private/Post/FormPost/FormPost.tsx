import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import styles from './FormPost.module.scss';
import { MediaItem, PostData } from '../../../../types/app';
import { postPost, updatePost } from '../../../../redux/posts/actions';
import { CloseButton, UploadImage } from '../../../../components/Icons';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const validationSchema = Yup.object({
  body: Yup.string().required('Body is required'),
  status: Yup.string().required('Status is required'),
  mediaItems: Yup.array().of(
    Yup.object({
      mediaType: Yup.string().required('Media type is required'),
      mediaUrl: Yup.string().required('Media URL is required'),
    })
  ),
});

interface Props {
  initialize?: any,
  className?: string
}

const FormPost: React.FC<Props> = ({ className, initialize = null }) => {
  const userSelector = useSelector(({ users }: any) => users);
  const dispatch = useDispatch();
  const { t } = useTranslation("post");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const data = JSON.parse(localStorage.data);
  const initialValues: PostData = {
    body: initialize?.body || '',
    status: initialize?.status || 'draft',
    userId: userSelector && userSelector.currentUser ? userSelector.currentUser.id : data.id,
    mediaItems: initialize?.mediaItems || [],
  };

  const handleSubmit = async (values: PostData, { setSubmitting, resetForm }: any) => {
    try {
      if (initialize !== null) {
        dispatch(updatePost({ id: initialize.id, ...values }));
      } else {
        dispatch(postPost(values));
      }
      resetForm();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={cx('wrapper', className)}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <div className={cx('item')}>
              <label className={cx('label')} htmlFor="body">{t("form.body")}</label>
              <Field as="textarea" id="body" name="body" placeholder="Content" className={cx('body-text')} />
              <ErrorMessage name="body" component="div" />
            </div>
            <div className={cx('item')}>
              <label className={cx('label')} htmlFor="status">{t("form.status")}</label>
              <Field as="select" id="status" name="status" className={cx('status')}>
                <option value="draft">{t("form.friends")}</option>
                <option value="published">{t("form.public")}</option>
                <option value="private">{t("form.private")}</option>
              </Field>
              <ErrorMessage name="status" component="div" />
            </div>
            <div className={cx('item', 'item-img')}>
              <div className={cx('custum-file-upload')} onClick={() => fileInputRef.current?.click()}>
                <label htmlFor="media" className={cx('label')}></label>
                <div className={cx('icon')}>
                  <UploadImage fill="75 85 99 1" className={cx('.svg')} />
                </div>
                <div className={cx('text')}>
                  <span>{t("form.upload_img")}</span>
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
                        newMediaItems.push({ mediaType: file.type, mediaUrl: URL.createObjectURL(file), file: file });
                      }
                      setFieldValue('mediaItems', [...values.mediaItems, ...newMediaItems]);
                    }
                  }}
                />
                <FieldArray
                  name="mediaItems"
                  render={({ remove }) => (
                    <div className={cx('box-preview')}>
                      {values.mediaItems.length === 0 ? (
                        <div className={cx('noti')}>
                          <span className={cx('text-noti')}>{t("form.no_img")}</span>
                        </div>
                      ) : (
                        values.mediaItems.map((media, index) => (
                          <div key={index} className={cx('preview-container')}>
                            <Field name={`mediaItems.${index}.mediaType`} type="hidden" />
                            <Field name={`mediaItems.${index}.mediaUrl`} type="hidden" />
                            <img src={media.mediaUrl} alt={`media-${index}`} className={cx('preview-img')} />
                            <button
                              type="button"
                              className={cx('remove-btn')}
                              onClick={(e) => {
                                e.stopPropagation();
                                remove(index);
                              }}
                            >
                              <CloseButton className={cx('icon-close')}/>
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                />
                <ErrorMessage name="mediaItems" component="div" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className={cx('submit')}>
              {initialize ? t("form.btn_upload") : t("form.btn_post")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPost;
