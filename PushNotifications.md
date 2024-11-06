# frontend

# install required packages
npm i 
react-native-push-notification 
@react-native-firebase/messaging 
@react-native-firebase/app

# google-services.json
put the json file inside the root directory(android/app)

# in android/build.gradle

repositories {
      ...
      google() // Add this line
      ...
  }

  dependencies {
    ...
    classpath("com.google.gms:google-services:4.4.0") // Google Service Plugin
    ...
  }

  # in android/app/build.gradle

  apply plugin: 'com.google.gms.google-services'

  dependencies {
    ...
    implementation platform('com.google.firebase:firebase-bom:32.1.1') // Add Firebase BOM
    implementation 'com.google.firebase:firebase-messaging' // Add FCM
    ...
}