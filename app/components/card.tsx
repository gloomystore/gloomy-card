import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface CardImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

export default function CardImage({ src, alt, ...props }: CardImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)

  const handleError = () => {
    // Fallback 이미지 경로를 설정합니다.
    setImgSrc('/images/150mewtwo.webp')
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className='card'
      fill
      onError={handleError}
      {...props}
    />
    // <Skeleton height={310} width={220} />
  )
}