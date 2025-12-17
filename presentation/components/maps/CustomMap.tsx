import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

import { LatLng } from '@/infrastructure/interfaces/lat-lng';
import { useLocationStore } from '@/presentation/store/useLocationStore';
import FAB from '../shared/FAB';


interface Props extends ViewProps {
    showUserLocation?: boolean;
    initialLocation: LatLng;
}

const CustomMap = ({ initialLocation, showUserLocation = true, ...rest }: Props) => {

    const mapRef = useRef<MapView>(null);
    const [isFollowingUser, setIsFollowingUser] = useState(true);
    const [isShowingPolyline, setIsShowingPolyline] = useState(false)

    const { watchLocation, clearWatchLocation, lastKnownLocation, getLocation, userLocationList } = useLocationStore()

    useEffect(() => {
        watchLocation();

        return () => {
            clearWatchLocation()
        }
    }, [])

    useEffect(() => {
        if (!lastKnownLocation) return;

        if (isFollowingUser) {
            moveCameraToLocation(lastKnownLocation)
        }

    }, [lastKnownLocation, isFollowingUser])

    const moveCameraToLocation = (latLng: LatLng | null) => {
        if (!mapRef.current || !latLng) return;

        mapRef.current.animateCamera({
            center: latLng
        })
    }

    const moveToCurrentLocation = async () => {
        if (!lastKnownLocation) {
            moveCameraToLocation(initialLocation)
        } else {
            moveCameraToLocation(lastKnownLocation)
        }

        const location = await getLocation();

        if (!location) return;

        moveCameraToLocation(location)
    }


    return (
        <View {...rest}>
            <MapView
                onTouchStart={() => setIsFollowingUser(false)}
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
            >
                {isShowingPolyline &&
                    <Polyline
                        coordinates={userLocationList}
                        strokeColor='blue'
                        strokeWidth={5}
                    />
                }
            </MapView>
            <FAB
                iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
                onPress={() => setIsFollowingUser(!isFollowingUser)}
                style={{
                    bottom: 80,
                    right: 20
                }}
            />
            <FAB
                iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
                onPress={() => setIsShowingPolyline(!isShowingPolyline)}
                style={{
                    bottom: 140,
                    right: 20
                }}
            />
            <FAB
                iconName='compass-outline'
                onPress={() => moveToCurrentLocation()}
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