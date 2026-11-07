import { StyleSheet, View } from 'react-native';
import { Meal } from '@/app/Storage/meals';
import StatusCard from './StatusCards';

type StatusGridProps = {
  meals: Meal[];
};

export default function StatusGrid({ meals }: StatusGridProps) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  return (
    <View style={styles.grid}>
      <StatusCard
        label='Calories'
        value={`${totals.calories}`}
        goal='2,000'
        color='#ff6b6b'
      />
      <StatusCard
        label='Protein'
        value={`${totals.protein}g`}
        goal='150g'
        color='#4ecdc4'
      />
      <StatusCard
        label='Carbs'
        value={`${totals.carbs}g`}
        goal='250g'
        color='#ffd93d'
      />
      <StatusCard
        label='Fat'
        value={`${totals.fat}g`}
        goal='65g'
        color='#6bcb77'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});