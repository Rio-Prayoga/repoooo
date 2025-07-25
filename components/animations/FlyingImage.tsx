'use client';

import { useEffect, useState } from 'react';

interface FlyingImageProps {
  from: DOMRect;
  to: DOMRect;
  image: string;
}

export default function FlyingImage({ from, to, image }: FlyingImageProps) {
  const [style, setStyle] = useState({
    top: from.top,
    left: from.left,
    width: from.width,
    height: from.height,
    opacity: 1,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStyle({
        top: to.top,
        left: to.left,
        width: to.width,
        height: to.height,
        opacity: 0,
      });
    }, 50);

    const removeTimeout = setTimeout(() => {
      // Biarkan parent menghapus komponen ini lewat `key` di .map
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(removeTimeout);
    };
  }, [from, to]);

  return (
    <img
      src={image}
      alt=""
      style={{
        position: 'fixed',
        top: style.top,
        left: style.left,
        width: style.width,
        height: style.height,
        transition: 'all 1s ease',
        pointerEvents: 'none',
        opacity: style.opacity,
        zIndex: 9999,
      }}
    />
  );
}
