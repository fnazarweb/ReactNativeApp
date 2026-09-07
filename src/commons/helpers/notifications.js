import { getMessaging, getToken } from '@react-native-firebase/messaging';

export const getFCMToken = async () => {
  try {
    const messaging = getMessaging();
    const newFCMToken = await getToken(messaging);
    console.log('newFCMToken', newFCMToken);
  } catch (error) {
    console.error(error);
    return null;
  }
};
