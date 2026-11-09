import HomeHeader from '@/app/components/homeheader';
import RecentMeals from '@/app/components/RecentMeals';
import StatusGrid from '@/app/components/statusGrid';
import { getMeals, Meal } from '@/app/Storage/meals';
import { globalStyles } from '@/app/styles/global';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text } from 'react-native';

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log('Loaded meals:', data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>BIZAROFITNESS</Text>
      <HomeHeader />
      <StatusGrid meals={meals} />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}