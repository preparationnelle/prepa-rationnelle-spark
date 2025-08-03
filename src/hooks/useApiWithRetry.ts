import { useState, useCallback } from 'react';

export const useApiWithRetry = () => {
  const [isRetrying, setIsRetrying] = useState(false);
  
  const callWithRetry = useCallback(async (
    apiCall: () => Promise<any>,
    maxRetries = 3,
    delay = 1000
  ) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await apiCall();
      } catch (error) {
        if (attempt === maxRetries) throw error;
        
        setIsRetrying(true);
        await new Promise(resolve => setTimeout(resolve, delay * attempt));
        setIsRetrying(false);
      }
    }
  }, []);

  return { callWithRetry, isRetrying };
}; 