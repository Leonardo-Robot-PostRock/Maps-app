import { LatLng } from '@/infrastructure/interfaces/lat-lng';
import { useLocationStore } from '@/presentation/store/useLocationStore';
import { useEffect, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import FAB from '../shared/FAB';

interface Props extends ViewProps {
    showUserLocation?: boolean;
    initialLocation: LatLng;
}

const CustomMap = ({ initialLocation, showUserLocation = true, ...rest }: Props) => {

    const mapRef = useRef<MapView>(null)

    const { watchLocation, clearWatchLocation, lastKnownLocation } = useLocationStore()

    useEffect(() => {
        watchLocation();

        return () => {
            clearWatchLocation()
        }
    }, [])

    useEffect(() => {
        if (!lastKnownLocation) return;

        moveCameraToLocation(lastKnownLocation)

    }, [lastKnownLocation])

    const moveCameraToLocation = (latLng: LatLng | null) => {
        if (!mapRef.current || !latLng) return;

        mapRef.current.animateCamera({
            center: latLng
        })
    }


    return (
        <View {...rest}>
            <MapView
                ref={mapRef}
                showsUserLocation={showUserLocation}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: initialLocation.latitude,
                    longitude: initialLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

            <FAB
                iconName='car-outline'
                onPress={() => { }}
                style={{
                    bottom: 20,
                    right: 20
                }}
            />
        </View>
    )
}

export default CustomMap

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})