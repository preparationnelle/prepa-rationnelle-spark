import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ParentRequestForm, STUDENT_LEVELS, SUBJECTS, RELATIONSHIPS } from '@/types/parent-teacher';
import { Users, CheckCircle, User, BookOpen } from 'lucide-react';

const ParentFormPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ParentRequestForm>({
    requester_first_name: '',
    requester_last_name: '',
    requester_email: '',
    requester_phone: '',
    is_for_self: true,
    student_first_name: '',
    student_last_name: '',
    student_phone: '',
    student_email: '',
    relationship: '',
    student_level: '',
    subject: '',
    needs_description: '',
    action_choice: 'call'
  });

  const handleInputChange = (field: keyof ParentRequestForm, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.requester_first_name || !formData.requester_last_name ||
        !formData.requester_email ||
        !formData.student_level || !formData.subject || !formData.needs_description) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Insérer dans Supabase
      const { data, error } = await supabase
        .from('parent_requests' as any)
        .insert([formData])
        .select()
        .single();

      if (error) throw error;

      // 2. Envoyer email de notification
      const { error: emailError } = await supabase.functions.invoke('send-parent-teacher-notification', {
        body: {
          type: 'parent_request',
          data: formData
        }
      });

      if (emailError) {
        console.error('Erreur envoi email:', emailError);
        // On continue même si l'email échoue
      }

      // 3. Toast de succès
      toast({
        title: "Demande envoyée !",
        description: "Votre demande a été transmise à notre équipe. Nous vous contacterons dans les plus brefs délais.",
      });

      // 4. Réinitialiser le formulaire
      setFormData({
        requester_first_name: '',
        requester_last_name: '',
        requester_email: '',
        requester_phone: '',
        is_for_self: true,
        student_first_name: '',
        student_last_name: '',
        student_phone: '',
        student_email: '',
        relationship: '',
        student_level: '',
        subject: '',
        needs_description: '',
        action_choice: 'call'
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
              Aide pour votre enfant en prépa ECG
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Demandez un accompagnement personnalisé
            </p>
          </div>

          {/* Card Formulaire */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border border-orange-100">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <Users className="h-8 w-8" />
                </div>
                Formulaire de contact
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Quelques informations pour mieux vous aider
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations de contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="h-5 w-5 text-orange-600" />
                    Informations de contact
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="requester_first_name" className="text-sm font-medium text-gray-700">
                        Prénom *
                      </Label>
                      <Input
                        id="requester_first_name"
                        type="text"
                        value={formData.requester_first_name}
                        onChange={(e) => handleInputChange('requester_first_name', e.target.value)}
                        className="mt-1"
                        placeholder="Votre prénom"
                      />
                    </div>

                    <div>
                      <Label htmlFor="requester_last_name" className="text-sm font-medium text-gray-700">
                        Nom *
                      </Label>
                      <Input
                        id="requester_last_name"
                        type="text"
                        value={formData.requester_last_name}
                        onChange={(e) => handleInputChange('requester_last_name', e.target.value)}
                        className="mt-1"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="requester_email" className="text-sm font-medium text-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="requester_email"
                        type="email"
                        value={formData.requester_email}
                        onChange={(e) => handleInputChange('requester_email', e.target.value)}
                        className="mt-1"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="requester_phone" className="text-sm font-medium text-gray-700">
                        Téléphone
                      </Label>
                      <Input
                        id="requester_phone"
                        type="tel"
                        value={formData.requester_phone}
                        onChange={(e) => handleInputChange('requester_phone', e.target.value)}
                        className="mt-1"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>
                </div>


                {/* Informations académiques */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    Informations académiques
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="student_level" className="text-sm font-medium text-gray-700">
                        Niveau de l'élève *
                      </Label>
                      <Select value={formData.student_level} onValueChange={(value) => handleInputChange('student_level', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez le niveau" />
                        </SelectTrigger>
                        <SelectContent>
                          {STUDENT_LEVELS.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Matière d'aide *
                      </Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez la matière" />
                        </SelectTrigger>
                        <SelectContent>
                          {SUBJECTS.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Description des besoins */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                    Description des besoins
                  </h3>
                  
                  <div>
                    <Label htmlFor="needs_description" className="text-sm font-medium text-gray-700">
                      Décrivez brièvement vos besoins *
                    </Label>
                    <Textarea
                      id="needs_description"
                      value={formData.needs_description}
                      onChange={(e) => handleInputChange('needs_description', e.target.value)}
                      className="mt-1 min-h-[80px]"
                      placeholder="Quelles sont les principales difficultés ? Quels objectifs souhaitez-vous atteindre ?"
                    />
                  </div>
                </div>


                {/* Bouton de soumission */}
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Envoyer ma demande
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

      {/* Section CTA finale */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--section-bg-1)' }}>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à donner un coup de pouce à votre enfant ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Notre équipe d'experts est là pour vous accompagner dans cette démarche importante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Faire une demande
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-300"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentFormPage;
