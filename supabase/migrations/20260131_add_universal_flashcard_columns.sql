-- Migration: Add universal flashcard columns
-- Run this in your Supabase SQL Editor

-- Step 1: Add new columns for universal flashcard format
ALTER TABLE flashcards 
ADD COLUMN IF NOT EXISTS front TEXT,
ADD COLUMN IF NOT EXISTS back TEXT,
ADD COLUMN IF NOT EXISTS hint TEXT,
ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'Vocabulaire',
ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'ai_generated';

-- Step 2: Migrate legacy vocabulary data to new format
UPDATE flashcards 
SET 
  front = word_fr,
  back = word_en,
  hint = CASE 
    WHEN sentence_fr IS NOT NULL AND sentence_en IS NOT NULL 
    THEN sentence_fr || ' / ' || sentence_en 
    ELSE COALESCE(sentence_fr, sentence_en) 
  END,
  category = 'Vocabulaire',
  source = 'ai_generated'
WHERE front IS NULL AND word_fr IS NOT NULL;

-- Step 3: Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_flashcards_category ON flashcards(category);
CREATE INDEX IF NOT EXISTS idx_flashcards_user_category ON flashcards(user_id, category);
