
// This file re-exports everything from the questions directory
// to maintain backwards compatibility with existing imports

export * from './questions/types';
export * from './questions/categories';
export * from './questions/additionalQuestions';

// Re-export the question categories as questionCategories for backward compatibility
import { questionCategories } from './questions/categories';
export { questionCategories };
