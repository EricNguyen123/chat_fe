import { useState, forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import images from '../../assets/images';
import styles from './Image.module.scss';



interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

const Image: ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (
  { borderRadius, height, width, src, alt, className, fallback: customFallback = images.noImage, ...props },
  ref
) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius }}
      {...props}
      onError={handleError}/>
  );
};

export default forwardRef<HTMLImageElement, ImageProps>(Image);
