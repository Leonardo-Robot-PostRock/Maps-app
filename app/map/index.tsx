import CustomMap from '@/presentation/components/maps/CustomMap';
import { useLocationStore } from '@/presentation/store/useLocationStore';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, [])

  if (lastKnownLocation === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomMap
        initialLocation={lastKnownLocation}
        style={{ height: '100%', width: '100%' }}
      />
    </View>
  )
}

export default MapScreen;