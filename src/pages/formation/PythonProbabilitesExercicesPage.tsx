import React from 'react';
import { ExerciseHeader } from '@/components/exercises/ExerciseHeader';
import { RandomWalkExercise } from '@/components/exercises/RandomWalkExercise';
import { WeightedSumExercise } from '@/components/exercises/WeightedSumExercise';
import { HistogramExercise } from '@/components/exercises/HistogramExercise';
import { AdditionalExercises } from '@/components/exercises/AdditionalExercises';
import { ExerciseTips } from '@/components/exercises/ExerciseTips';

const PythonProbabilitesExercicesPage = () => {
  const badges = [
    { text: "Module 3", variant: "secondary" as const },
    { text: "Exercices corrigés", variant: "outline" as const },
    { text: "Probabilités" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-6">
        <ExerciseHeader
          title="Exercices Python - Probabilités"
          description="Exercices pratiques de simulation et de modélisation probabiliste"
          badges={badges}
          backTo="/formation"
          backText="Retour à la formation"
        />

        <RandomWalkExercise />
        <WeightedSumExercise />
        <HistogramExercise />
        <AdditionalExercises />
        <ExerciseTips />
      </div>
    </div>
  );
};

export default PythonProbabilitesExercicesPage;