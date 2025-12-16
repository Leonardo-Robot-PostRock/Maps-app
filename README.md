# Maps App 🗺️

Aplicación mobile creada con **Expo + React Native**, que utiliza **Google Maps** en Android e iOS.
La configuración de claves se maneja mediante **variables de entorno** y `app.config.js`.

---

## 🚀 Requisitos previos

Antes de correr el proyecto, necesitás tener instalado:

* Node.js (recomendado LTS)
* npm o yarn
* Expo CLI
* Android Studio (para Android) y/o Xcode (para iOS)
* Una cuenta en **Google Cloud** con APIs de Maps habilitadas

---

## 📦 Instalación

1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd maps-app
```

2. Instalar dependencias

```bash
npm install
```

---

## 🔐 Variables de entorno (OBLIGATORIO)

Este proyecto **NO incluye las API Keys en el repositorio**.

Debés crear un archivo `.env` en la raíz del proyecto:

```env
GOOGLE_MAPS_API_KEY_IOS=TU_API_KEY_IOS
GOOGLE_MAPS_API_KEY_ANDROID=TU_API_KEY_ANDROID
```

### 🔎 Importante

* Las keys deben estar **restringidas**:

  * iOS → Bundle Identifier
  * Android → Package Name + SHA-1
* El archivo `.env` **no se sube al repositorio**

---

## ⚙️ Configuración del proyecto

La configuración de Expo se maneja desde:

```text
app.config.js
```

Expo lee automáticamente las variables de entorno desde `.env`.

* ❌ No es necesario instalar `dotenv`
* ❌ No se utiliza `app.json`

---

## ▶️ Ejecutar el proyecto

> ⚠️ **Este proyecto NO usa Expo Go**
> Es necesario correrlo como build nativo.

### Android

```bash
npx expo prebuild --clean
npx expo run:android
```

### iOS (macOS)

```bash
npx expo prebuild --clean
npx expo run:ios
```

---

## ♻️ Cache y rebuild

Si modificás:

* `app.config.js`
* variables de entorno
* API Keys

👉 **Siempre necesitás un rebuild nativo**:

```bash
npx expo prebuild --clean
```

## 🧭 Estructura del proyecto

```text
.expo/
.vscode/
android/
app/
├─ loading/
├─ map/
├─ map-simple/
├─ permissions/
├─ _layout.tsx
├─ index.tsx
assets/
constants/
core/
├─ actions/
├─ location/
├─ permissions/
infrastructure/
├─ interfaces/
ios/
node_modules/
presentation/
├─ components/
├─ hooks/
├─ providers/
├─ shared/
store/
scripts/
.env
.gitignore
app.config.js
eslint.config.js
expo-env.d.ts
package.json
package-lock.json
README.md
tsconfig.json
```

---

## 🏗️ Arquitectura del proyecto

El proyecto sigue una **separación por capas**, inspirada en principios de *Clean Architecture*, adaptada a frontend con React Native y Expo.

### Capas

* **app/**
  Routing y pantallas usando **Expo Router**.

* **presentation/**
  Componentes UI, hooks, providers y lógica de presentación.

* **core/**
  Lógica de dominio y casos de uso (ej: ubicación, permisos).

* **infrastructure/**
  Interfaces

* **store/**
  Manejo de estado global de la aplicación.

---

## 🧠 Notas importantes

* Las Google Maps API Keys **no están en el código**
* El proyecto utiliza **expo-router**
* Compatible con **EAS Build**
* Configuración lista para producción

---

## 📚 Recursos

* [Expo Documentation](https://docs.expo.dev)
* [Expo Router](https://docs.expo.dev/router/introduction/)
* [Google Maps Platform](https://developers.google.com/maps)

---

## 👥 Comunidad

* [Expo en GitHub](https://github.com/expo/expo)
* [Expo Discord](https://chat.expo.dev)
