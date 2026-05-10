import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Users, Check, ArrowRight, ArrowLeft, Loader2, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type StudentLevel = 'prepa' | 'lycee' | 'college';
type StudentType = 'eleve' | 'parent';

interface FormData {
    firstName: string;
    phone: string;
    studentLevel: StudentLevel | '';
    studentType: StudentType | '';
}

export const ContactFormSection: React.FC = () => {
    const { toast } = useToast();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        phone: '',
        studentLevel: '',
        studentType: '',
    });

    const totalSteps = 2;

    const updateFormData = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const canProceedStep1 = formData.studentLevel && formData.studentType && formData.firstName;
    const canSubmit = canProceedStep1 && formData.phone && formData.phone.length >= 10;

    const handleSubmit = async () => {
        if (!canSubmit) return;

        setIsSubmitting(true);

        try {
            // Generate a temporary email from phone number
            const tempEmail = `${formData.phone.replace(/\s/g, '')}@temp-lead.preparationnelle.com`;

            // Call the Edge Function with simplified data
            const { data, error } = await supabase.functions.invoke('submit-contact-lead', {
                body: {
                    firstName: formData.firstName,
                    lastName: '', // Empty but required by backend
                    email: tempEmail, // Temporary email
                    phoneStudent: formData.phone,
                    phoneParent: undefined,
                    city: undefined,
                    studentLevel: formData.studentLevel,
                    studentType: formData.studentType,
                    serviceType: 'cours_particuliers', // Always cours particuliers
                },
            });

            if (error) {
                throw error;
            }

            // Success! Show success screen
            setIsSuccess(true);

        } catch (error: any) {
            console.error('Error submitting form:', error);
            toast({
                title: "❌ Erreur",
                description: "Une erreur est survenue. Réessayez ou contactez-nous directement au 06 09 16 46 68.",
                variant: "destructive",
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-80 h-80 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-64 h-64 bg-pr-orange rounded-full opacity-10 blur-3xl"></div>

            <div className="container mx-auto max-w-2xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                        Réservez votre <span className="text-pr-orange">cours gratuit</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Remplissez ce formulaire en 20 secondes et recevez un appel sous 24h
                    </p>
                </div>

                {/* Progress Bar - Hide when success */}
                {!isSuccess && (
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            {[1, 2].map((s) => (
                                <div key={s} className="flex items-center flex-1">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= s
                                        ? 'bg-pr-orange text-white shadow-lg scale-110'
                                        : 'bg-gray-200 text-gray-400'
                                        }`}>
                                        {step > s ? <Check className="w-5 h-5" /> : s}
                                    </div>
                                    {s < totalSteps && (
                                        <div className={`flex-1 h-1 mx-2 rounded transition-all duration-300 ${step > s ? 'bg-pr-orange' : 'bg-gray-200'
                                            }`}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-center text-sm text-gray-600 font-medium">
                            Étape {step} sur {totalSteps}
                        </div>
                    </div>
                )}

                {/* Success Screen */}
                {isSuccess ? (
                    <Card className="shadow-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                        <CardContent className="p-8 sm:p-12">
                            <div className="text-center animate-in fade-in-up">
                                {/* Success Icon */}
                                <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                    <Check className="w-12 h-12 text-white" />
                                </div>

                                {/* Thank You Message */}
                                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                    Merci {formData.firstName} ! 🎉
                                </h3>
                                <p className="text-xl text-gray-700 mb-8">
                                    Vous allez être recontacté pour organiser l'accompagnement
                                </p>

                                {/* Recap */}
                                <div className="max-w-md mx-auto bg-white rounded-xl p-6 border-2 border-green-200 mb-8">
                                    <h4 className="font-bold text-lg mb-4 text-green-900 flex items-center justify-center gap-2">
                                        <Check className="w-5 h-5" />
                                        Récapitulatif
                                    </h4>
                                    <div className="space-y-3 text-left">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600 font-medium">Prénom :</span>
                                            <span className="text-gray-900 font-bold">{formData.firstName}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600 font-medium">Téléphone :</span>
                                            <span className="text-gray-900 font-bold">{formData.phone}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600 font-medium">Niveau :</span>
                                            <span className="text-gray-900 font-bold">
                                                {formData.studentLevel === 'prepa' ? 'Prépa' : formData.studentLevel === 'lycee' ? 'Lycée' : 'Collège'}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-600 font-medium">Type :</span>
                                            <span className="text-gray-900 font-bold">
                                                {formData.studentType === 'eleve' ? 'Élève' : 'Parent'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Steps */}
                                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mb-6">
                                    <h4 className="font-bold text-lg mb-3 text-orange-900">📞 Prochaines étapes</h4>
                                    <div className="space-y-2 text-left text-gray-700">
                                        <p className="flex items-start gap-2">
                                            <span className="text-pr-orange font-bold">1.</span>
                                            <span>Nous vous appelons <strong>sous 24h</strong></span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <span className="text-pr-orange font-bold">2.</span>
                                            <span>Nous discutons ensemble de vos besoins</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <span className="text-pr-orange font-bold">3.</span>
                                            <span>Nous organisons votre <strong>cours d'essai gratuit</strong></span>
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="text-center text-sm text-gray-600 mb-6">
                                    <p>Une question ? Contactez-nous :</p>
                                    <p className="font-bold text-pr-orange-dark mt-2">
                                        📞 06 09 16 46 68 | 📧 preparationnelle@gmail.com
                                    </p>
                                </div>

                                {/* Back Button */}
                                <Button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setFormData({
                                            firstName: '',
                                            phone: '',
                                            studentLevel: '',
                                            studentType: '',
                                        });
                                        setStep(1);
                                    }}
                                    variant="outline"
                                    className="mt-4"
                                >
                                    Fermer
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    /* Form Card */
                    <Card className="shadow-2xl border-2 border-gray-100">
                        <CardContent className="p-8">
                            {/* Step 1: Student Info + Name + Level + Type */}
                            {step === 1 && (
                                <div className="space-y-6 animate-in fade-in-up">
                                    {/* First Name */}
                                    <div>
                                        <label className="font-bold text-lg mb-3 block">Votre prénom *</label>
                                        <Input
                                            placeholder="Pierre"
                                            value={formData.firstName}
                                            onChange={(e) => updateFormData('firstName', e.target.value)}
                                            className="bg-white border-2 text-lg p-6"
                                            autoFocus
                                        />
                                    </div>

                                    {/* Student Level */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <BookOpen className="w-5 h-5 text-pr-orange" />
                                            <label className="font-bold text-lg">Niveau de l'élève *</label>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {(['prepa', 'lycee', 'college'] as StudentLevel[]).map((level) => (
                                                <button
                                                    key={level}
                                                    type="button"
                                                    onClick={() => updateFormData('studentLevel', level)}
                                                    className={`p-4 rounded-xl font-semibold transition-all duration-200 ${formData.studentLevel === level
                                                        ? 'bg-pr-orange text-white shadow-lg scale-105'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {level === 'prepa' ? 'Prépa' : level === 'lycee' ? 'Lycée' : 'Collège'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Student Type */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Users className="w-5 h-5 text-pr-orange" />
                                            <label className="font-bold text-lg">Je suis... *</label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {(['eleve', 'parent'] as StudentType[]).map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => updateFormData('studentType', type)}
                                                    className={`p-4 rounded-xl font-semibold transition-all duration-200 ${formData.studentType === type
                                                        ? 'bg-pr-orange text-white shadow-lg scale-105'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {type === 'eleve' ? 'Un élève' : 'Un parent'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Phone Only */}
                            {step === 2 && (
                                <div className="space-y-6 animate-in fade-in-up">
                                    {/* Phone */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 justify-center">
                                            <Phone className="w-6 h-6 text-pr-orange" />
                                            <label className="font-bold text-xl">Votre numéro de téléphone *</label>
                                        </div>
                                        <Input
                                            type="tel"
                                            placeholder="06 12 34 56 78"
                                            value={formData.phone}
                                            onChange={(e) => updateFormData('phone', e.target.value)}
                                            className="bg-white border-2 text-xl p-8 text-center font-bold"
                                            autoFocus
                                        />
                                        <p className="text-sm text-gray-500 mt-3 text-center">
                                            Nous vous rappelons sous 24h pour vous proposer un cours d'essai gratuit
                                        </p>
                                    </div>

                                    {/* Summary */}
                                    <div className="mt-8 p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                                        <h4 className="font-bold text-lg mb-3 text-orange-900">📋 Récapitulatif</h4>
                                        <div className="space-y-2 text-sm">
                                            <p><strong>Prénom :</strong> {formData.firstName}</p>
                                            <p><strong>Téléphone :</strong> {formData.phone}</p>
                                            <p><strong>Niveau :</strong> {formData.studentLevel === 'prepa' ? 'Prépa' : formData.studentLevel === 'lycee' ? 'Lycée' : 'Collège'}</p>
                                            <p><strong>Type :</strong> {formData.studentType === 'eleve' ? 'Élève' : 'Parent'}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between items-center mt-8 pt-6 border-t">
                                {step > 1 ? (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setStep(step - 1)}
                                        className="flex items-center gap-2"
                                        disabled={isSubmitting}
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Précédent
                                    </Button>
                                ) : (
                                    <div></div>
                                )}

                                {step < totalSteps ? (
                                    <Button
                                        type="button"
                                        onClick={() => setStep(step + 1)}
                                        disabled={!canProceedStep1}
                                        className="bg-pr-orange hover:bg-pr-orange-dark text-white font-bold px-8 py-6 text-lg flex items-center gap-2"
                                    >
                                        Continuer
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={!canSubmit || isSubmitting}
                                        className="bg-pr-orange hover:bg-pr-orange-dark text-white font-bold px-8 py-6 text-lg flex items-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Phone className="w-5 h-5" />
                                                Réserver mon cours gratuit
                                            </>
                                        )}
                                    </Button>
                                )}
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span>Sans engagement</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span>Réponse sous 24h</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style>
        </section>
    );
};
