import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';

export const ExerciseTips: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-purple-700">
          <Target className="h-6 w-6" />
          Conseils et techniques
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">🎯 Simulation efficace</h4>
            <p className="text-sm text-blue-700">
              Pour les grandes simulations, utilisez NumPy : <code>rd.choice([-1, 1], size=n)</code>
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">📊 Visualisation</h4>
            <p className="text-sm text-green-700">
              Tracez les trajectoires avec <code>plt.plot()</code> pour mieux comprendre les marches
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">🔢 Convergence</h4>
            <p className="text-sm text-purple-700">
              Augmentez le nombre d'essais pour des estimations plus précises
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">⚡ Optimisation</h4>
            <p className="text-sm text-orange-700">
              Vectorisez vos calculs avec NumPy pour améliorer les performances
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};