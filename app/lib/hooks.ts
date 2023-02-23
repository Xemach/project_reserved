import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigationProps } from '../navigation/types';

export function useAppNavigation() {
  return useNavigation<NativeStackNavigationProp<AppNavigationProps>>();
}
