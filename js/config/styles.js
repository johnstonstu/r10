import { Platform } from 'react-native';

export const mainFont = Platform.select({
    ios: "Montserrat",
    android: "Montserrat-Regular"
    
})