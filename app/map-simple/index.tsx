import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // -33.039058, -68.879791
        initialRegion={{
          latitude: -33.039058,
          longitude: -68.879791,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -33.039058,
            longitude: -68.879791,
          }}
          title='Esta es la zona en la que vivo'
          description='Casi 31 años viviendo en zona de Luján de Cuyo'
        />

        {/* -32.878661, -68.879287 */}
        <Marker
          coordinate={{
            latitude: -32.878661,
            longitude: -68.879287
          }}
          title='Facultad de Filosofía y Letras - UNCuyo'
          description='Estudié aquí 2 años, lic. en Lenguas y lit. clásicas'
        />

        {/* -32.896862, -68.853503 */}
        <Marker
          coordinate={{
            latitude: -32.896862,
            longitude: -68.853510
          }}
          title='UTN FRM'
          description='Estudié aquí Tecnicatura en Programación un cuatrimestre'
        />

        {/* -32.891874, -68.844842 */}
        <Marker
          coordinate={{
            latitude: -32.878661,
            longitude: -68.879287
          }}
          title='Instituto De Educación Superior En Formación Docente Y Técnica "Tomás Godoy Cruz"'
          description='Estudié aquí un cuatrimestre'
        />

        {/* -32.911107, -68.846025 */}
        <Marker
          coordinate={{
            latitude: -32.911107,
            longitude: -68.846025
          }}
          title='Ies Manuel Belgrano 9-008'
          description='Estudié aquí 2 años una tecnicatura de desarrollo de software'
        />

      </MapView>
    </View>
  )
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%'
  }
})