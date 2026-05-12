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
    theme?: 'orange' | 'blue'; // Kept for backwards compatibility but not used in carnet styling
}

export const HeroContactForm: React.FC<HeroContactFormProps> = ({ showContent = true, theme = 'orange' }) => {
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
                {/* Card with carnet paper touch */}
                <div className="relative bg-carnet-paper-2 rounded-xl p-6 sm:p-7 border border-[rgba(78,55,30,0.18)] shadow-[0_8px_24px_rgba(78,55,30,0.08)]">

                    {/* Success Screen */}
                    {isSuccess ? (
                        <div className="text-center py-6 animate-in fade-in-up">
                            {/* Success Icon */}
                            <div className="mx-auto w-16 h-16 bg-[rgba(193,68,58,0.08)] rounded-full flex items-center justify-center mb-4 border border-[rgba(193,68,58,0.25)]">
                                <Check className="w-8 h-8 text-carnet-red" />
                            </div>

                            {/* Thank You Message */}
                            <h3 className="font-lora text-[24px] italic text-carnet-ink mb-2">
                                Merci {formData.firstName} !
                            </h3>
                            <p className="font-instrument text-[15px] text-carnet-ink-soft mb-6">
                                Vous allez être recontacté pour organiser l'accompagnement
                            </p>

                            {/* Recap */}
                            <div className="bg-carnet-paper rounded-xl p-4 mb-4 text-left border border-[rgba(78,55,30,0.18)]">
                                <h4 className="font-instrument font-semibold text-[14px] mb-2 text-carnet-ink flex items-center gap-1.5">
                                    <span className="carnet-hand text-[18px] text-carnet-red leading-none mt-1">✓</span>
                                    Récapitulatif
                                </h4>
                                <div className="space-y-1 font-instrument text-[14px] text-carnet-ink-soft">
                                    <p><strong className="text-carnet-ink font-semibold">Prénom :</strong> {formData.firstName}</p>
                                    <p><strong className="text-carnet-ink font-semibold">Téléphone :</strong> {formData.phone}</p>
                                    <p><strong className="text-carnet-ink font-semibold">Niveau :</strong> {formData.studentLevel === 'prepa' ? 'Prépa' : formData.studentLevel === 'lycee' ? 'Lycée' : 'Collège'}</p>
                                    <p><strong className="text-carnet-ink font-semibold">Type :</strong> {formData.studentType === 'eleve' ? 'Élève' : 'Parent'}</p>
                                </div>
                            </div>

                            {/* Next Steps */}
                            <div className="bg-[rgba(193,68,58,0.04)] rounded-xl p-4 text-left border border-[rgba(193,68,58,0.15)]">
                                <h4 className="font-instrument font-semibold text-[14px] mb-2 text-carnet-red flex items-center gap-1.5">
                                    <Phone className="w-4 h-4" /> Prochaines étapes
                                </h4>
                                <div className="space-y-1 font-instrument text-[14px] text-carnet-ink-soft">
                                    <p>1. Nous vous appelons <strong className="text-carnet-ink font-semibold">sous 24h</strong></p>
                                    <p>2. Nous discutons de vos besoins</p>
                                    <p>3. Nous organisons votre <strong className="text-carnet-ink font-semibold">cours d'essai gratuit</strong></p>
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
                                className="mt-6 border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.04)] font-instrument font-semibold rounded-full px-6"
                            >
                                Fermer
                            </Button>
                        </div>
                    ) : (
                        <>
                            {/* Progress bar */}
                            <div className="mb-6">
                                <div className="h-1 bg-[rgba(78,55,30,0.08)] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-carnet-red rounded-full transition-all duration-500"
                                        style={{ width: progressWidth }}
                                    ></div>
                                </div>
                                <div className="text-center font-instrument text-[11px] uppercase tracking-[0.15em] text-carnet-ink-mute mt-3">
                                    Étape {step} sur {totalSteps}
                                </div>
                            </div>

                            <h3 className="font-lora text-[22px] md:text-[26px] leading-[1.2] font-medium text-center text-carnet-ink mb-6">
                                Complétez le formulaire et bénéficiez de <em className="italic text-carnet-red font-lora">nos conseils</em>
                            </h3>

                            {/* Step 1: Name + Level + Type */}
                            {step === 1 && (
                                <div className="space-y-5">
                                    {/* First Name */}
                                    <div>
                                        <label className="font-instrument text-[14px] font-semibold text-carnet-ink mb-2 block">Votre prénom *</label>
                                        <Input
                                            placeholder="Pierre"
                                            value={formData.firstName}
                                            onChange={(e) => updateFormData('firstName', e.target.value)}
                                            className="bg-transparent border-[rgba(78,55,30,0.18)] text-carnet-ink text-[15px] font-instrument h-12 focus-visible:ring-carnet-red focus-visible:border-carnet-red"
                                        />
                                    </div>

                                    {/* Level Selection */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-7 h-7 bg-[rgba(193,68,58,0.08)] rounded-md flex items-center justify-center border border-[rgba(193,68,58,0.15)]">
                                                <BookOpen className="h-3.5 w-3.5 text-carnet-red" />
                                            </div>
                                            <span className="font-instrument text-[14px] font-semibold text-carnet-ink">Niveau de l'élève</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2.5">
                                            {(['prepa', 'lycee', 'college'] as StudentLevel[]).map((level) => (
                                                <button
                                                    key={level}
                                                    type="button"
                                                    onClick={() => updateFormData('studentLevel', level)}
                                                    className={`py-3 px-3 rounded-lg text-[14px] font-instrument font-semibold transition-all duration-200 border ${formData.studentLevel === level
                                                        ? 'bg-[rgba(193,68,58,0.06)] text-carnet-red border-carnet-red shadow-sm'
                                                        : 'bg-transparent text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.03)] border-[rgba(78,55,30,0.18)] hover:border-[rgba(78,55,30,0.3)]'
                                                        }`}
                                                >
                                                    {level === 'prepa' ? 'Prépa' : level === 'lycee' ? 'Lycée' : 'Collège'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Role Selection */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-7 h-7 bg-[rgba(193,68,58,0.08)] rounded-md flex items-center justify-center border border-[rgba(193,68,58,0.15)]">
                                                <Users className="h-3.5 w-3.5 text-carnet-red" />
                                            </div>
                                            <span className="font-instrument text-[14px] font-semibold text-carnet-ink">Je suis...</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2.5">
                                            {(['eleve', 'parent'] as StudentType[]).map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => updateFormData('studentType', type)}
                                                    className={`py-3 px-3 rounded-lg text-[14px] font-instrument font-semibold transition-all duration-200 border ${formData.studentType === type
                                                        ? 'bg-[rgba(193,68,58,0.06)] text-carnet-red border-carnet-red shadow-sm'
                                                        : 'bg-transparent text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.03)] border-[rgba(78,55,30,0.18)] hover:border-[rgba(78,55,30,0.3)]'
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
                                        className="w-full py-6 mt-2 text-[15px] font-instrument font-semibold bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full transition-all duration-300 group border-0"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Continuer
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </div>
                            )}

                            {/* Step 2: Phone Only */}
                            {step === 2 && (
                                <div className="space-y-5">
                                    {/* Phone */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 justify-center">
                                            <Phone className="w-4 h-4 text-carnet-red" />
                                            <label className="font-instrument text-[15px] font-semibold text-carnet-ink">Votre numéro de téléphone *</label>
                                        </div>
                                        <Input
                                            type="tel"
                                            placeholder="06 12 34 56 78"
                                            value={formData.phone}
                                            onChange={(e) => updateFormData('phone', e.target.value)}
                                            className="bg-transparent border-[rgba(78,55,30,0.18)] text-carnet-ink text-lg p-6 text-center font-instrument font-semibold focus-visible:ring-carnet-red focus-visible:border-carnet-red"
                                        />
                                        <p className="font-instrument text-[13px] text-carnet-ink-soft mt-3 text-center">
                                            Nous vous rappelons sous 24h pour vous proposer un cours d'essai gratuit
                                        </p>
                                    </div>

                                    {/* Summary */}
                                    <div className="p-4 bg-[rgba(78,55,30,0.02)] rounded-xl border border-[rgba(78,55,30,0.08)]">
                                        <h4 className="font-instrument font-semibold text-[13px] mb-2 text-carnet-ink uppercase tracking-[0.1em]">Récapitulatif</h4>
                                        <div className="space-y-1 font-instrument text-[14px] text-carnet-ink-soft">
                                            <p><strong className="text-carnet-ink font-semibold">Prénom :</strong> {formData.firstName}</p>
                                            <p><strong className="text-carnet-ink font-semibold">Niveau :</strong> {formData.studentLevel === 'prepa' ? 'Prépa' : formData.studentLevel === 'lycee' ? 'Lycée' : 'Collège'}</p>
                                            <p><strong className="text-carnet-ink font-semibold">Type :</strong> {formData.studentType === 'eleve' ? 'Élève' : 'Parent'}</p>
                                        </div>
                                    </div>

                                    {/* Navigation */}
                                    <div className="flex gap-3">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setStep(1)}
                                            className="flex items-center gap-1.5 border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.04)] font-instrument font-semibold rounded-full px-5"
                                            disabled={isSubmitting}
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Retour
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={!canSubmit || isSubmitting}
                                            className="flex-1 py-6 text-[15px] font-instrument font-semibold bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full transition-all duration-300 group border-0"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Envoi...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    Réserver mon cours
                                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Trust indicators */}
                            <div className="mt-5 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)] flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-instrument text-[13px] text-carnet-ink-soft">
                                <div className="flex items-center gap-1.5">
                                    <span className="carnet-hand text-[18px] text-carnet-red leading-none mt-0.5">✓</span>
                                    <span>Sans engagement</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="carnet-hand text-[18px] text-carnet-red leading-none mt-0.5">✓</span>
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
