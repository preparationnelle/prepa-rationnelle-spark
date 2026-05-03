import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface FlashcardReview {
  id: number;
  language: 'spanish' | 'english' | 'german';
  category: string;
  french: string;
  translation: string;
  markedAt: Date;
  reviewCount: number;
  lastReviewed?: Date;
}

export interface GeneratedContent {
  id: string;
  type: 'flashcard' | 'paragraph' | 'essay' | 'correction' | 'chat';
  title: string;
  content: string;
  generatedAt: Date;
  subject?: string;
  language?: string;
}

export interface UserProgress {
  totalFlashcardsStudied: number;
  totalContentGenerated: number;
  studyStreak: number;
  lastActivity: Date;
  subjectsStudied: string[];
}

export interface UserData {
  flashcardsToReview: FlashcardReview[];
  generatedContent: GeneratedContent[];
  progress: UserProgress;
  preferences: {
    defaultLanguage: 'fr' | 'en';
    studyReminders: boolean;
    darkMode: boolean;
  };
}

interface UserDataContextType {
  userData: UserData;
  addFlashcardForReview: (flashcard: Omit<FlashcardReview, 'markedAt' | 'reviewCount'>) => void;
  removeFlashcardFromReview: (id: number, language: string) => void;
  addGeneratedContent: (content: Omit<GeneratedContent, 'id' | 'generatedAt'>) => void;
  updateProgress: (updates: Partial<UserProgress>) => void;
  clearUserData: () => void;
  isFlashcardMarkedForReview: (id: number, language: string) => boolean;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

const defaultUserData: UserData = {
  flashcardsToReview: [],
  generatedContent: [],
  progress: {
    totalFlashcardsStudied: 0,
    totalContentGenerated: 0,
    studyStreak: 0,
    lastActivity: new Date(),
    subjectsStudied: []
  },
  preferences: {
    defaultLanguage: 'fr',
    studyReminders: true,
    darkMode: false
  }
};

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  // Clé de stockage basée sur l'utilisateur
  const getStorageKey = () => currentUser ? `userData_${currentUser.id}` : 'userData_guest';

  // Charger les données depuis localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(getStorageKey());
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Convertir les dates de string vers Date
        const processedData = {
          ...parsed,
          flashcardsToReview: parsed.flashcardsToReview?.map((card: any) => ({
            ...card,
            markedAt: new Date(card.markedAt),
            lastReviewed: card.lastReviewed ? new Date(card.lastReviewed) : undefined
          })) || [],
          generatedContent: parsed.generatedContent?.map((content: any) => ({
            ...content,
            generatedAt: new Date(content.generatedAt)
          })) || [],
          progress: {
            ...parsed.progress,
            lastActivity: new Date(parsed.progress?.lastActivity || new Date())
          }
        };
        setUserData(processedData);
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur:', error);
        setUserData(defaultUserData);
      }
    }
  }, [currentUser]);

  // Sauvegarder les données dans localStorage
  useEffect(() => {
    localStorage.setItem(getStorageKey(), JSON.stringify(userData));
  }, [userData, currentUser]);

  const addFlashcardForReview = (flashcard: Omit<FlashcardReview, 'markedAt' | 'reviewCount'>) => {
    setUserData(prev => ({
      ...prev,
      flashcardsToReview: [
        ...prev.flashcardsToReview.filter(card => 
          !(card.id === flashcard.id && card.language === flashcard.language)
        ),
        {
          ...flashcard,
          markedAt: new Date(),
          reviewCount: 0
        }
      ]
    }));
  };

  const removeFlashcardFromReview = (id: number, language: string) => {
    setUserData(prev => ({
      ...prev,
      flashcardsToReview: prev.flashcardsToReview.filter(card => 
        !(card.id === id && card.language === language)
      )
    }));
  };

  const addGeneratedContent = (content: Omit<GeneratedContent, 'id' | 'generatedAt'>) => {
    const newContent: GeneratedContent = {
      ...content,
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      generatedAt: new Date()
    };

    setUserData(prev => ({
      ...prev,
      generatedContent: [newContent, ...prev.generatedContent],
      progress: {
        ...prev.progress,
        totalContentGenerated: prev.progress.totalContentGenerated + 1,
        lastActivity: new Date()
      }
    }));
  };

  const updateProgress = (updates: Partial<UserProgress>) => {
    setUserData(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        ...updates,
        lastActivity: new Date()
      }
    }));
  };

  const clearUserData = () => {
    setUserData(defaultUserData);
    localStorage.removeItem(getStorageKey());
  };

  const isFlashcardMarkedForReview = (id: number, language: string) => {
    return userData.flashcardsToReview.some(card => 
      card.id === id && card.language === language
    );
  };

  return (
    <UserDataContext.Provider value={{
      userData,
      addFlashcardForReview,
      removeFlashcardFromReview,
      addGeneratedContent,
      updateProgress,
      clearUserData,
      isFlashcardMarkedForReview
    }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
