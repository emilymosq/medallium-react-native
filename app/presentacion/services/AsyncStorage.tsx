import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavoriteStatus = async (isFavorite: boolean) => {
    try {
        await AsyncStorage.setItem('isFavorite', JSON.stringify(isFavorite));
    } catch (error) {
        console.error("Error saving favorite status:", error);
    }
};

export const getFavoriteStatus = async () => {
    try {
        const value = await AsyncStorage.getItem('isFavorite');
        return value !== null ? JSON.parse(value) : false;
    } catch (error) {
        console.error("Error reading favorite status:", error);
        return false;
    }
};
