import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Users, Check, ArrowRight, ArrowLeft, Loader2, Phone, Calendar } from 'lucide-react';
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

interface HeroContactFormProps {
    showContent?: boolean; // For animation control from parent
}

export const HeroContactForm: React.FC<HeroContactFormProps> = ({ showContent = true }) => {
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
                    lastName: '',
                    email: tempEmail,
                    phoneStudent: formData.phone,
                    phoneParent: undefined,
                    city: undefined,
                    studentLevel: formData.studentLevel,
                    studentType: formData.studentType,
                    serviceType: 'cours_particuliers',
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
                description: "Une erreur est survenue. Réessayez ou contactez-nous au 06 09 16 46 68.",
                variant: "destructive",
                duration: 5000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const progressWidth = step === 1 ? (formData.firstName && formData.studentLevel && formData.studentType ? '50%' : (formData.firstName || formData.studentLevel || formData.studentType ? '25%' : '0%')) : '100%';

    return (
        <div className={`max-w-lg mx-auto transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
                {/* Subtle glow effect behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-orange-400/15 to-orange-500/20 rounded-2xl blur-xl"></div>

                {/* Card with glassmorphism touch */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/20 p-6 sm:p-7 border border-white/50">

                    {/* Success Screen */}
                    {isSuccess ? (
                        <div className="text-center py-6 animate-in fade-in-up">
                            {/* Success Icon */}
                            <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                                <Check className="w-10 h-10 text-white" />
                            </div>

                            {/* Thank You Message */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Merci {formData.firstName} ! 🎉
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Vous allez être recontacté pour organiser l'accompagnement
                            </p>

                            {/* Recap */}
                            <div className="bg-green-50 rounded-xl p-4 mb-4 text-left border border-green-200">
                                <h4 className="font-bold text-sm mb-2 text-green-900 flex items-center gap-1">
                                    <Check className="w-4 h-4" />
                                    Récapitulatif
                                </h4>
                                <div className="space-y-1 text-sm text-gray-700">
                                    <p><strong>Prénom :</strong> {formData.firstName}</p>
                                    <p><strong>Téléphone :</strong> {formData.phone}</p>
                                    <p><strong>Niveau :</strong> {formData.studentLevel === 'prepa' ? 'Prépa' : formData.studentLevel === 'lycee' ? 'Lycée' : 'Collège'}</p>
                                    <p><strong>Type :</strong> {formData.studentType === 'eleve' ? 'Élève' : 'Parent'}</p>
                                </div>
                            </div>

                            {/* Next Steps */}
                            <div className="bg-orange-50 rounded-xl p-4 text-left border border-orange-200">
                                <h4 className="font-bold text-sm mb-2 text-orange-900">📞 Prochaines étapes</h4>
                                <div className="space-y-1 text-sm text-gray-700">
                                    <p>1. Nous vous appelons <strong>sous 24h</strong></p>
                                    <p>2. Nous discutons de vos besoins</p>
                                    <p>3. Nous organisons votre <strong>cours d'essai gratuit</strong></p>
                                </div>
                            </div>

                            {/* Fermer Button */}
                            <Button
                                onClick={() => {
                                    setIsSuccess(false);
                                    setFormData({ firstName: '', phone: '', studentLevel: '', studentType: '' });
                                    setStep(1);
                                }}
                                variant="outline"
                                className="mt-4"
                            >
                                Fermer
                            </Button>
                        </div>
                    ) : (
                        <>
                            {/* Progress bar */}
                            <div className="mb-5">
                                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-500"
                                        style={{ width: progressWidth }}
                                    ></div>
                                </div>
                                <div className="text-center text-xs text-gray-500 mt-1">
                                    Étape {step} sur {totalSteps}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-center text-gray-800 mb-5">
                                Complétez le formulaire et bénéficiez de nos conseils
                            </h3>

                            {/* Step 1: Name + Level + Type */}
                            {step === 1 && (
                                <div className="space-y-4">
                                    {/* First Name */}
                                    <div>
                                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Votre prénom *</label>
                                        <Input
                                            placeholder="Pierre"
                                            value={formData.firstName}
                                            onChange={(e) => updateFormData('firstName', e.target.value)}
                                            className="bg-white border-gray-200 text-base"
                                            autoFocus
                                        />
                                    </div>

                                    {/* Level Selection */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2.5">
                                            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-md flex items-center justify-center">
                                                <BookOpen className="h-3.5 w-3.5 text-white" />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700">Niveau de l'élève</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {(['prepa', 'lycee', 'college'] as StudentLevel[]).map((level) => (
                                                <button
                                                    key={level}
                                                    type="button"
                                                    onClick={() => updateFormData('studentLevel', level)}
                                                    className={`py-3 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${formData.studentLevel === level
                                                        ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md shadow-orange-500/25'
                                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {level === 'prepa' ? 'Prépa' : level === 'lycee' ? 'Lycée' : 'Collège'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Role Selection */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2.5">
                                            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-md flex items-center justify-center">
                                                <Users className="h-3.5 w-3.5 text-white" />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700">Je suis...</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {(['eleve', 'parent'] as StudentType[]).map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => updateFormData('studentType', type)}
                                                    className={`py-3 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${formData.studentType === type
                                                        ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md shadow-orange-500/25'
                                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {type === 'eleve' ? 'Un élève' : 'Un parent'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Continue Button */}
                                    <Button
                                        onClick={() => setStep(2)}
                                        disabled={!canProceedStep1}
                                        className="w-full py-6 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 group border-0"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Continuer
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </div>
                            )}

                            {/* Step 2: Phone Only */}
                            {step === 2 && (
                                <div className="space-y-4">
                                    {/* Phone */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2.5 justify-center">
                                            <Phone className="w-5 h-5 text-orange-500" />
                                            <label className="text-base font-bold text-gray-700">Votre numéro de téléphone *</label>
                                        </div>
                                        <Input
                                            type="tel"
                                            placeholder="06 12 34 56 78"
                                            value={formData.phone}
                                            onChange={(e) => updateFormData('phone', e.target.value)}
                                            className="bg-white border-gray-200 text-lg p-6 text-center font-bold"
                                            autoFocus
                                        />
                                        <p className="text-xs text-gray-500 mt-2 text-center">
                                            Nous vous rappelons sous 24h pour vous proposer un cours d'essai gratuit
                                        </p>
                                    </div>

                                    {/* Summary */}
                                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                                        <h4 className="font-bold text-sm mb-2 text-orange-900">📋 Récapitulatif</h4>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <p><strong>Prénom :</strong> {formData.firstName}</p>
                                            <p><strong>Niveau :</strong> {formData.studentLevel === 'prepa' ? 'Prépa' : formData.studentLevel === 'lycee' ? 'Lycée' : 'Collège'}</p>
                                            <p><strong>Type :</strong> {formData.studentType === 'eleve' ? 'Élève' : 'Parent'}</p>
                                        </div>
                                    </div>

                                    {/* Navigation */}
                                    <div className="flex gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setStep(1)}
                                            className="flex items-center gap-1"
                                            disabled={isSubmitting}
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Retour
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={!canSubmit || isSubmitting}
                                            className="flex-1 py-6 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all duration-300 group border-0"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Envoi...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Calendar className="h-5 w-5" />
                                                    Réserver mon cours gratuit
                                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Trust indicators */}
                            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1.5">
                                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                                    <span>Sans engagement</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                                    <span>Réponse sous 24h</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Animation styles */}
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
        </div>
    );
};
