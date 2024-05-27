import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UploadIcon } from '../Icons';
import { uploadAvatar, uploadFile } from '../../redux/image-upload/actions';

interface Props {
  fdispath: any,
}

const ImageUpload: React.FC<Props> = ({ fdispath }) => {
  const dispatch = useDispatch();

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        Array.from(files).forEach((file) => {
          dispatch( fdispath ? uploadAvatar(file) : uploadFile(file));
        });
      }
    },
    [dispatch]
  );

  return (
    <label htmlFor="file-upload">
      <UploadIcon />
      <input
        id="file-upload"
        type="file"
        multiple
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
    </label>
  );
};

export default ImageUpload;