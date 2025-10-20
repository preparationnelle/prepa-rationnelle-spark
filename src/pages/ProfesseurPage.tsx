import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { TeacherApplicationForm, SUBJECTS } from '@/types/parent-teacher';
import { Checkbox } from '@/components/ui/checkbox';
import { GraduationCap, Clock, Euro, CheckCircle, Users, Award, Heart } from 'lucide-react';

const ProfesseurPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<TeacherApplicationForm>({
    teacher_name: '',
    teacher_email: '',
    teacher_phone: '',
    subjects: [],
    background_description: '',
    availability_schedule: '',
    hours_per_week: 0,
    hourly_rate: 0
  });

  const handleInputChange = (field: keyof TeacherApplicationForm, value: string | number | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.teacher_name || !formData.teacher_email || !formData.teacher_phone || 
        formData.subjects.length === 0 || !formData.background_description || 
        !formData.availability_schedule || formData.hours_per_week <= 0 || formData.hourly_rate <= 0) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires avec des valeurs valides.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Insérer dans Supabase
      const { data, error } = await supabase
        .from('teacher_applications')
        .insert([formData])
        .select()
        .single();

      if (error) throw error;

      // 2. Envoyer email de notification
      const { error: emailError } = await supabase.functions.invoke('send-parent-teacher-notification', {
        body: {
          type: 'teacher_application',
          data: formData
        }
      });

      if (emailError) {
        console.error('Erreur envoi email:', emailError);
        // On continue même si l'email échoue
      }

      // 3. Toast de succès
      toast({
        title: "Candidature envoyée !",
        description: "Votre candidature a été transmise à notre équipe. Nous vous contacterons dans les plus brefs délais.",
      });

      // 4. Réinitialiser le formulaire
      setFormData({
        teacher_name: '',
        teacher_email: '',
        teacher_phone: '',
        subjects: [],
        background_description: '',
        availability_schedule: '',
        hours_per_week: 0,
        hourly_rate: 0
      });

    } catch (error) {
      console.error('Erreur soumission:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Section Hero */}
      <section className="min-h-[95vh] w-full flex flex-col justify-center items-center pt-16 sm:pt-20 pb-10 sm:pb-16 md:pb-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--section-bg-1)' }}></div>
        
        {/* Bulles décoratives */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Rejoignez notre <span className="text-orange-600">équipe</span> de professeurs
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Partagez votre expertise et aidez les étudiants à réussir en prépa ECG
            </p>
          </div>

          {/* Card Formulaire */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border border-orange-100">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <GraduationCap className="h-8 w-8" />
                </div>
                Candidature professeur
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Remplissez ce formulaire pour rejoindre notre équipe d'experts
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="teacher_name" className="text-sm font-medium text-gray-700">
                      Nom complet *
                    </Label>
                    <Input
                      id="teacher_name"
                      type="text"
                      value={formData.teacher_name}
                      onChange={(e) => handleInputChange('teacher_name', e.target.value)}
                      className="mt-1"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="teacher_email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="teacher_email"
                      type="email"
                      value={formData.teacher_email}
                      onChange={(e) => handleInputChange('teacher_email', e.target.value)}
                      className="mt-1"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="teacher_phone" className="text-sm font-medium text-gray-700">
                    Téléphone *
                  </Label>
                  <Input
                    id="teacher_phone"
                    type="tel"
                    value={formData.teacher_phone}
                    onChange={(e) => handleInputChange('teacher_phone', e.target.value)}
                    className="mt-1"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {/* Informations professionnelles */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                    Informations professionnelles
                  </h3>
                  
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Matières enseignées * (sélectionnez une ou plusieurs)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {SUBJECTS.map((subject) => (
                        <div key={subject} className="flex items-center space-x-2">
                          <Checkbox
                            id={subject}
                            checked={formData.subjects.includes(subject)}
                            onCheckedChange={() => handleSubjectToggle(subject)}
                          />
                          <Label 
                            htmlFor={subject} 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {subject}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {formData.subjects.length > 0 && (
                      <p className="text-sm text-gray-600 mt-2">
                        Matières sélectionnées : {formData.subjects.join(', ')}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="background_description" className="text-sm font-medium text-gray-700">
                      Parcours et compétences *
                    </Label>
                    <Textarea
                      id="background_description"
                      value={formData.background_description}
                      onChange={(e) => handleInputChange('background_description', e.target.value)}
                      className="mt-1 min-h-[120px]"
                      placeholder="Décrivez votre parcours scolaire, vos diplômes, votre expérience d'enseignement, vos compétences particulières..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Ex: "Diplômé de l'École Polytechnique, 5 ans d'expérience en cours particuliers, spécialisé en mathématiques appliquées..."
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="availability_schedule" className="text-sm font-medium text-gray-700">
                    Créneaux horaires disponibles *
                  </Label>
                  <Textarea
                    id="availability_schedule"
                    value={formData.availability_schedule}
                    onChange={(e) => handleInputChange('availability_schedule', e.target.value)}
                    className="mt-1 min-h-[100px]"
                    placeholder="Ex: Lundi 18h-20h, Mercredi 14h-18h, Samedi 9h-12h..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hours_per_week" className="text-sm font-medium text-gray-700">
                      Heures souhaitées par semaine *
                    </Label>
                    <Input
                      id="hours_per_week"
                      type="number"
                      min="1"
                      value={formData.hours_per_week || ''}
                      onChange={(e) => handleInputChange('hours_per_week', parseInt(e.target.value) || 0)}
                      className="mt-1"
                      placeholder="Ex: 10"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="hourly_rate" className="text-sm font-medium text-gray-700">
                      Tarif horaire souhaité (€) *
                    </Label>
                    <Input
                      id="hourly_rate"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.hourly_rate || ''}
                      onChange={(e) => handleInputChange('hourly_rate', parseFloat(e.target.value) || 0)}
                      className="mt-1"
                      placeholder="Ex: 25.00"
                    />
                  </div>
                </div>

                {/* Bouton de soumission */}
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Soumettre ma candidature
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section Avantages */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages de faire partie de notre équipe de professeurs experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Flexibilité */}
            <Card className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-300 hover:bg-orange-50 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Clock className="h-8 w-8 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-orange-700 group-hover:text-orange-800 transition-colors duration-300">
                Flexibilité totale
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                Choisissez vos créneaux et gérez votre emploi du temps selon vos disponibilités
              </p>
              <div className="space-y-1 text-xs text-left">
                <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Horaires à la carte</span>
                </div>
                <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Réduction d'heures possible</span>
                </div>
                <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Vacances respectées</span>
                </div>
              </div>
            </Card>

            {/* Card Rémunération */}
            <Card className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-300 hover:bg-blue-50 group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Euro className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                Rémunération attractive
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                Tarifs compétitifs et paiement régulier pour récompenser votre expertise
              </p>
              <div className="space-y-1 text-xs text-left">
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Tarifs de 20€ à 40€/h</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Paiement mensuel garanti</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Bonus de performance</span>
                </div>
              </div>
            </Card>

            {/* Card Accompagnement */}
            <Card className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-green-300 hover:bg-green-50 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Heart className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-green-700 group-hover:text-green-800 transition-colors duration-300">
                Accompagnement continu
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                Formation, support et communauté pour vous aider à exceller dans votre mission
              </p>
              <div className="space-y-1 text-xs text-left">
                <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Formation pédagogique</span>
                </div>
                <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Support technique</span>
                </div>
                <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  <span className="mr-2">✓</span>
                  <span>Communauté d'experts</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Séparateur blanc */}
      <div className="h-2 sm:h-3 md:h-4" style={{ backgroundColor: 'var(--page-bg)' }}></div>

      {/* Section CTA finale */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à partager votre expertise ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Rejoignez une équipe dynamique et aidez les étudiants à réussir leurs objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Postuler maintenant
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-300"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfesseurPage;
