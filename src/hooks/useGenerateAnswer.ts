
import { useStreamingAnswer } from './useStreamingAnswer';

export const useGenerateAnswer = (currentUserId?: string) => {
  return useStreamingAnswer(currentUserId);
};
