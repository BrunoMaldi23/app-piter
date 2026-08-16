import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { DrawerToggleButton } from 'expo-router/drawer';

export default function TopBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
      }}
    >
      <View className="h-14 flex-row items-center px-1.5">
        <DrawerToggleButton tintColor="#171717" />

        <View className="ml-1 flex-1 flex-row items-center">
          <View className="mr-2.5 h-9 w-9 items-center justify-center rounded-xl bg-neutral-900">
            <Ionicons name="bag-handle" size={17} color="#fff" />
          </View>
          <View>
            <Text className="text-[16px] font-bold tracking-tight text-neutral-900">
              MiniStore
            </Text>
            <Text className="-mt-0.5 text-[10px] font-medium text-neutral-400">
              Envíos a todo Chile
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}