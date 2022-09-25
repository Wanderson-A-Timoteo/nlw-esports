import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { GamesParams } from '../../@types/navigation';

export function Game() {
  
  const route = useRoute();
  const game = route.params as GamesParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
      
      </SafeAreaView>
    </Background>

  );
}