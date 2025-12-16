import CustomMap from '@/presentation/components/maps/CustomMap';
import { View } from 'react-native';

const MapScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomMap
        initialLocation={{
          latitude: -33.038644,
          longitude: -68.879985
        }}
        style={{ height: '100%', width: '100%' }}
      />
    </View>
  )
}

export default MapScreen;