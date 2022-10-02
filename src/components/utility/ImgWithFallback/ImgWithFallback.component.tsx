type ImageProps = {
  src: string;
  fallback: string;
  alt: string;
  type?: string;
};

const ImgWithFallback = ({
  src,
  fallback,
  alt,
  type = 'image/webp',
  ...delegated
}: ImageProps) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img alt={alt} src={fallback} {...delegated} />
    </picture>
  );
};

export default ImgWithFallback;
