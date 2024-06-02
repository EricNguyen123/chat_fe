import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { MediaItem, PostData } from '../../../../types/app';
import { postPost } from '../../../../redux/posts/actions';
import { CloseButton, IconSend, UploadImage } from '../../../../components/Icons';

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
  postId: string;
  handleViewer: () => void;
}

const Comment: React.FC<Props> = ({ postId, handleViewer }) => {
  const userSelector = useSelector(({ users }: any) => users);
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const data = JSON.parse(localStorage.data);
  const initialValues: PostData = {
    body: '',
    status: 'draft',
    userId: userSelector && userSelector.currentUser ? userSelector.currentUser.id : data.id,
    mediaItems: [],
    parentId: postId,
  };

  const handleSubmit = async (values: PostData, { setSubmitting, resetForm }: any) => {
    try {
      dispatch(postPost(values));
      resetForm();
      handleViewer();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const closeViewer = (setFieldValue: (field: string, value: any) => void) => {
    setFieldValue('mediaItems', []);
  };

  return (
    <div className={cx('wrapper')}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className={cx('form-box')}>
            <div className={cx('item-text')}>
              <label className={cx('label')} htmlFor="body"></label>
              <Field as="textarea" id="body" name="body" placeholder="Enter your comment" className={cx('body-text')} />
              <ErrorMessage name="body" component="div" className={cx('error')} />
            </div>
            <div className={cx('item', 'item-img')}>
              <div className={cx('custom-file-upload')} onClick={() => fileInputRef.current?.click()}>
                <label htmlFor="media" className={cx('label')}></label>
                <div className={cx('icon')}>
                  <UploadImage fill="rgba(75, 85, 99, 1)" className={cx('svg')} />
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
                        newMediaItems.push({ mediaType: file.type, mediaUrl: URL.createObjectURL(file), file });
                      }
                      setFieldValue('mediaItems', [...values.mediaItems, ...newMediaItems]);
                    }
                  }}
                />
              </div>
              <FieldArray
                name="mediaItems"
                render={() => (
                  <>
                    {values.mediaItems.length > 0 && (
                      <>
                        <button type="button" onClick={() => closeViewer(setFieldValue)} className={cx('close-button')}>
                          <CloseButton className={cx('icon-close')}/>
                        </button>
                        <div className={cx('box-preview')}>
                            {values.mediaItems.map((media, index) => (
                              <div key={index} className={cx('media-item')}>
                                <Field name={`mediaItems.${index}.mediaType`} type="hidden" />
                                <Field name={`mediaItems.${index}.mediaUrl`} type="hidden" />
                                <img src={media.mediaUrl} alt={`media-${index}`} className={cx('preview-img')} />
                              </div>
                            ))}
                          
                        </div>
                      </>
                    )}
                  </>
                )}
              />
              <ErrorMessage name="mediaItems" component="div" className={cx('error')} />
            </div>
            <button type="submit" disabled={isSubmitting} className={cx('submit')}>
              <IconSend className={cx('icon-send')} />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Comment;
