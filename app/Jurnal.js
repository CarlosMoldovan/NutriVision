import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Importați useRoute
import { useState } from 'react';

function Journal() {
  const route = useRoute(); // Obțineți obiectul route
  const savedCalorieInfo = route.params.savedCalorieInfo;

  const [savedCalorieInfo1, setSavedCalorieInfo] = useState([]);

  const salveazaInformatiile = (info) => {
    if (info) {
      // Adăugați informațiile noi la lista existentă de informații salvate
      setSavedCalorieInfo([...savedCalorieInfo, info]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      {savedCalorieInfo.map((info, index) => (
        <View key={index} style={styles.entry}>
          <Text>Food: {info.foodname}</Text>
          <Text>Carbs: {info.carbohydrates}g</Text>
          <Text>Fats: {info.fats}g</Text>
          <Text>Proteins: {info.proteins}g</Text>
          <Text>Calories: {info.kcal} kcal</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  entry: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Journal;

