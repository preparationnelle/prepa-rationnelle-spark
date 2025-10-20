import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { SUBJECTS } from '@/types/parent-teacher';
import { GraduationCap, Calendar, Clock, Euro, Plus, Edit, Trash2, BookOpen, Users, Settings } from 'lucide-react';

interface TeacherAvailability {
  id?: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  subject: string;
  max_students: number;
  price_per_hour: number;
  is_active: boolean;
}

const DAYS_OF_WEEK = [
  'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
];

const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00'
];

const ProfesseurDashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [availabilities, setAvailabilities] = useState<TeacherAvailability[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingAvailability, setIsAddingAvailability] = useState(false);
  const [editingAvailability, setEditingAvailability] = useState<TeacherAvailability | null>(null);
  
  const [newAvailability, setNewAvailability] = useState<TeacherAvailability>({
    day_of_week: '',
    start_time: '',
    end_time: '',
    subject: '',
    max_students: 1,
    price_per_hour: 0,
    is_active: true
  });

  // Vérification d'authentification et de rôle professeur
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    // Ici on pourrait vérifier si l'utilisateur est bien un professeur approuvé
    loadAvailabilities();
  }, [currentUser, navigate]);

  const loadAvailabilities = async () => {
    try {
      setLoading(true);
      // Pour l'instant, on simule des données
      // En production, on ferait une requête à Supabase
      const mockData: TeacherAvailability[] = [
        {
          id: '1',
          day_of_week: 'Lundi',
          start_time: '18:00',
          end_time: '20:00',
          subject: 'Maths',
          max_students: 3,
          price_per_hour: 25,
          is_active: true
        },
        {
          id: '2',
          day_of_week: 'Mercredi',
          start_time: '14:00',
          end_time: '16:00',
          subject: 'Python',
          max_students: 2,
          price_per_hour: 30,
          is_active: true
        }
      ];
      setAvailabilities(mockData);
    } catch (error) {
      console.error('Erreur chargement disponibilités:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger vos disponibilités.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddAvailability = () => {
    setIsAddingAvailability(true);
    setEditingAvailability(null);
    setNewAvailability({
      day_of_week: '',
      start_time: '',
      end_time: '',
      subject: '',
      max_students: 1,
      price_per_hour: 0,
      is_active: true
    });
  };

  const handleEditAvailability = (availability: TeacherAvailability) => {
    setEditingAvailability(availability);
    setIsAddingAvailability(true);
    setNewAvailability(availability);
  };

  const handleSaveAvailability = async () => {
    try {
      // Validation
      if (!newAvailability.day_of_week || !newAvailability.start_time || 
          !newAvailability.end_time || !newAvailability.subject || 
          newAvailability.price_per_hour <= 0) {
        toast({
          title: "Champs manquants",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive"
        });
        return;
      }

      if (newAvailability.start_time >= newAvailability.end_time) {
        toast({
          title: "Horaire invalide",
          description: "L'heure de fin doit être après l'heure de début.",
          variant: "destructive"
        });
        return;
      }

      // En production, on ferait une requête à Supabase
      if (editingAvailability) {
        // Mise à jour
        setAvailabilities(prev => 
          prev.map(av => av.id === editingAvailability.id ? { ...newAvailability, id: editingAvailability.id } : av)
        );
        toast({
          title: "Disponibilité mise à jour",
          description: "Votre créneau a été modifié avec succès.",
        });
      } else {
        // Ajout
        const newId = Date.now().toString();
        setAvailabilities(prev => [...prev, { ...newAvailability, id: newId }]);
        toast({
          title: "Disponibilité ajoutée",
          description: "Votre nouveau créneau a été enregistré.",
        });
      }

      setIsAddingAvailability(false);
      setEditingAvailability(null);
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder la disponibilité.",
        variant: "destructive"
      });
    }
  };

  const handleDeleteAvailability = async (id: string) => {
    try {
      setAvailabilities(prev => prev.filter(av => av.id !== id));
      toast({
        title: "Disponibilité supprimée",
        description: "Le créneau a été supprimé avec succès.",
      });
    } catch (error) {
      console.error('Erreur suppression:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la disponibilité.",
        variant: "destructive"
      });
    }
  };

  const toggleAvailabilityStatus = async (id: string) => {
    try {
      setAvailabilities(prev => 
        prev.map(av => 
          av.id === id ? { ...av, is_active: !av.is_active } : av
        )
      );
      toast({
        title: "Statut modifié",
        description: "Le statut de la disponibilité a été mis à jour.",
      });
    } catch (error) {
      console.error('Erreur modification statut:', error);
      toast({
        title: "Erreur",
        description: "Impossible de modifier le statut.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de votre espace professeur...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
              <GraduationCap className="h-8 w-8" />
            </div>
            Espace Professeur
          </h1>
          <p className="text-gray-600">
            Gérez vos disponibilités et vos cours
          </p>
        </div>

        <Tabs defaultValue="availabilities" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="availabilities" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Mes disponibilités
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Mes cours
            </TabsTrigger>
          </TabsList>

          {/* Tab Disponibilités */}
          <TabsContent value="availabilities" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Mes créneaux disponibles
                </CardTitle>
                <Button onClick={handleAddAvailability} className="bg-orange-600 hover:bg-orange-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un créneau
                </Button>
              </CardHeader>
              
              <CardContent>
                {/* Formulaire d'ajout/modification */}
                {isAddingAvailability && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      {editingAvailability ? 'Modifier le créneau' : 'Nouveau créneau'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="day_of_week">Jour de la semaine *</Label>
                        <Select 
                          value={newAvailability.day_of_week} 
                          onValueChange={(value) => setNewAvailability(prev => ({ ...prev, day_of_week: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un jour" />
                          </SelectTrigger>
                          <SelectContent>
                            {DAYS_OF_WEEK.map((day) => (
                              <SelectItem key={day} value={day}>{day}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Matière *</Label>
                        <Select 
                          value={newAvailability.subject} 
                          onValueChange={(value) => setNewAvailability(prev => ({ ...prev, subject: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une matière" />
                          </SelectTrigger>
                          <SelectContent>
                            {SUBJECTS.map((subject) => (
                              <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="start_time">Heure de début *</Label>
                        <Select 
                          value={newAvailability.start_time} 
                          onValueChange={(value) => setNewAvailability(prev => ({ ...prev, start_time: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIME_SLOTS.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="end_time">Heure de fin *</Label>
                        <Select 
                          value={newAvailability.end_time} 
                          onValueChange={(value) => setNewAvailability(prev => ({ ...prev, end_time: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIME_SLOTS.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="max_students">Nombre max d'étudiants</Label>
                        <Input
                          type="number"
                          min="1"
                          max="10"
                          value={newAvailability.max_students}
                          onChange={(e) => setNewAvailability(prev => ({ ...prev, max_students: parseInt(e.target.value) || 1 }))}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="price_per_hour">Tarif horaire (€) *</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          value={newAvailability.price_per_hour}
                          onChange={(e) => setNewAvailability(prev => ({ ...prev, price_per_hour: parseFloat(e.target.value) || 0 }))}
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button onClick={handleSaveAvailability} className="bg-green-600 hover:bg-green-700">
                        {editingAvailability ? 'Modifier' : 'Ajouter'}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setIsAddingAvailability(false);
                          setEditingAvailability(null);
                        }}
                      >
                        Annuler
                      </Button>
                    </div>
                  </div>
                )}

                {/* Liste des disponibilités */}
                <div className="space-y-4">
                  {availabilities.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Aucun créneau disponible pour le moment.</p>
                      <p className="text-sm">Cliquez sur "Ajouter un créneau" pour commencer.</p>
                    </div>
                  ) : (
                    availabilities.map((availability) => (
                      <div 
                        key={availability.id} 
                        className={`p-4 border rounded-lg ${availability.is_active ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-300'}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="font-semibold text-lg">{availability.day_of_week}</h3>
                              <span className="text-sm text-gray-600">
                                {availability.start_time} - {availability.end_time}
                              </span>
                              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                                {availability.subject}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                availability.is_active 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {availability.is_active ? 'Actif' : 'Inactif'}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {availability.max_students} étudiant{availability.max_students > 1 ? 's' : ''}
                              </span>
                              <span className="flex items-center gap-1">
                                <Euro className="h-4 w-4" />
                                {availability.price_per_hour}€/h
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditAvailability(availability)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => toggleAvailabilityStatus(availability.id!)}
                            >
                              {availability.is_active ? 'Désactiver' : 'Activer'}
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteAvailability(availability.id!)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Cours */}
          <TabsContent value="courses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Mes cours programmés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Aucun cours programmé pour le moment.</p>
                  <p className="text-sm">Les cours apparaîtront ici quand des étudiants réserveront vos créneaux.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfesseurDashboard;
