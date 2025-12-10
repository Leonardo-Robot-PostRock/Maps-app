import { PropsWithChildren, useEffect } from "react";
import { AppState } from "react-native";

import { router } from "expo-router";

import { PermissionStatus } from "@/infrastructure/interfaces/location";

import { usePermissionsStore } from "../store/usePermissions";

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
    const { locationStatus, checkLocationPermission } = usePermissionsStore()

    useEffect(() => {
        if (locationStatus === PermissionStatus.GRANTED) {
            router.replace('/map');
        } else if (locationStatus !== PermissionStatus.CHECKING) {
            router.replace('/permissions');
        }

    }, [locationStatus])

    useEffect(() => {
        checkLocationPermission();
    }, [])

    useEffect(() => {
        const suscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active') {
                checkLocationPermission();
            }
        })

        return () => {
            suscription.remove();
        }
    }, [])


    return <>{children}</>
}

export default PermissionsCheckerProvider;