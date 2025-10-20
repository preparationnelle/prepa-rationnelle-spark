import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ParentRequestForm, STUDENT_LEVELS, SUBJECTS, RELATIONSHIPS } from '@/types/parent-teacher';
import { Users, Phone, GraduationCap, CheckCircle, User, UserCheck, BookOpen } from 'lucide-react';

const ParentPage = () => {
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
        !formData.requester_email || !formData.requester_phone || 
        !formData.student_level || !formData.subject || !formData.needs_description) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Validation supplémentaire si c'est pour une autre personne
    if (!formData.is_for_self) {
      if (!formData.student_first_name || !formData.student_last_name) {
        toast({
          title: "Informations manquantes",
          description: "Veuillez renseigner le prénom et nom de l'élève.",
          variant: "destructive"
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // 1. Insérer dans Supabase
      const { data, error } = await supabase
        .from('parent_requests')
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
              Accompagnement <span className="text-orange-600">sur-mesure</span> pour votre enfant
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Trouvez la solution parfaite pour aider votre enfant à réussir en prépa ECG
            </p>
          </div>

          {/* Card Formulaire */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border border-orange-100">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <Users className="h-8 w-8" />
                </div>
                Demande d'accompagnement
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Remplissez ce formulaire et notre équipe vous contactera rapidement
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations du demandeur */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="h-5 w-5 text-orange-600" />
                    Vos informations
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
                        Nom de famille *
                      </Label>
                      <Input
                        id="requester_last_name"
                        type="text"
                        value={formData.requester_last_name}
                        onChange={(e) => handleInputChange('requester_last_name', e.target.value)}
                        className="mt-1"
                        placeholder="Votre nom de famille"
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
                        Téléphone *
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

                {/* Choix pour qui est la demande */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-blue-600" />
                    Pour qui est cette demande ?
                  </h3>
                  
                  <RadioGroup 
                    value={formData.is_for_self ? 'self' : 'other'} 
                    onValueChange={(value) => handleInputChange('is_for_self', value === 'self')}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self" className="flex items-center gap-3 cursor-pointer flex-1">
                        <User className="h-5 w-5 text-orange-600" />
                        <div>
                          <div className="font-medium">Pour moi-même</div>
                          <div className="text-sm text-gray-600">Je suis l'élève qui a besoin d'aide</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Users className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Pour une autre personne</div>
                          <div className="text-sm text-gray-600">Je fais cette demande pour quelqu'un d'autre</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Informations de l'élève (si ce n'est pas pour soi-même) */}
                {!formData.is_for_self && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                      Informations de l'élève
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="student_first_name" className="text-sm font-medium text-gray-700">
                          Prénom de l'élève *
                        </Label>
                        <Input
                          id="student_first_name"
                          type="text"
                          value={formData.student_first_name}
                          onChange={(e) => handleInputChange('student_first_name', e.target.value)}
                          className="mt-1"
                          placeholder="Prénom de l'élève"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="student_last_name" className="text-sm font-medium text-gray-700">
                          Nom de famille de l'élève *
                        </Label>
                        <Input
                          id="student_last_name"
                          type="text"
                          value={formData.student_last_name}
                          onChange={(e) => handleInputChange('student_last_name', e.target.value)}
                          className="mt-1"
                          placeholder="Nom de famille de l'élève"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="student_phone" className="text-sm font-medium text-gray-700">
                          Téléphone de l'élève (facultatif)
                        </Label>
                        <Input
                          id="student_phone"
                          type="tel"
                          value={formData.student_phone}
                          onChange={(e) => handleInputChange('student_phone', e.target.value)}
                          className="mt-1"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="student_email" className="text-sm font-medium text-gray-700">
                          Email de l'élève (facultatif)
                        </Label>
                        <Input
                          id="student_email"
                          type="email"
                          value={formData.student_email}
                          onChange={(e) => handleInputChange('student_email', e.target.value)}
                          className="mt-1"
                          placeholder="eleve@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="relationship" className="text-sm font-medium text-gray-700">
                        Votre relation avec l'élève *
                      </Label>
                      <Select value={formData.relationship} onValueChange={(value) => handleInputChange('relationship', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez votre relation" />
                        </SelectTrigger>
                        <SelectContent>
                          {RELATIONSHIPS.map((relationship) => (
                            <SelectItem key={relationship} value={relationship}>
                              {relationship}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

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
                      Décrivez les difficultés, objectifs et échéances *
                    </Label>
                    <Textarea
                      id="needs_description"
                      value={formData.needs_description}
                      onChange={(e) => handleInputChange('needs_description', e.target.value)}
                      className="mt-1 min-h-[120px]"
                      placeholder="Décrivez les difficultés rencontrées, les objectifs, les échéances importantes..."
                    />
                  </div>
                </div>

                {/* Choix d'action */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-teal-600" />
                    Que souhaitez-vous faire ?
                  </h3>
                  
                  <RadioGroup 
                    value={formData.action_choice} 
                    onValueChange={(value) => handleInputChange('action_choice', value as 'call' | 'choose_teacher')}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                      <RadioGroupItem value="call" id="call" />
                      <Label htmlFor="call" className="flex items-center gap-3 cursor-pointer flex-1">
                        <Phone className="h-5 w-5 text-orange-600" />
                        <div>
                          <div className="font-medium">Réserver un appel</div>
                          <div className="text-sm text-gray-600">Échanger sur les besoins et trouver la meilleure solution</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value="choose_teacher" id="choose_teacher" />
                      <Label htmlFor="choose_teacher" className="flex items-center gap-3 cursor-pointer flex-1">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Choisir directement un professeur</div>
                          <div className="text-sm text-gray-600">Accéder à notre base de professeurs disponibles</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
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

export default ParentPage;
