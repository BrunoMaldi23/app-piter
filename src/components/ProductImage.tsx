import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';

interface ProductImageProps {
  uri: string;
  emoji: string;
  className?: string;
  fallbackClassName?: string;
  contentFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  label: string;
}

export default function ProductImage({
  uri,
  emoji,
  className,
  fallbackClassName = 'text-4xl',
  contentFit = 'cover',
  label,
}: ProductImageProps) {
  const [error, setError] = useState(false);

  return (
    <View className={className}>
      {!error ? (
        <Image
          source={uri}
          contentFit={contentFit}
          transition={250}
          accessibilityLabel={label}
          style={{ width: '100%', height: '100%' }}
          onError={() => setError(true)}
        />
      ) : (
        <View className="h-full w-full items-center justify-center bg-neutral-100">
          <Text className={fallbackClassName}>{emoji}</Text>
        </View>
      )}
    </View>
  );
}