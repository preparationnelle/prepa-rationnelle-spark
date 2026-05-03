export class ConnectionError extends Error {
  constructor(message: string, public retryAfter?: number) {
    super(message);
    this.name = 'ConnectionError';
  }
}

export const handleApiError = (error: any) => {
  if (error.code === 'NETWORK_ERROR') {
    throw new ConnectionError('Problème de connexion réseau', 5000);
  }
  if (error.status === 429) {
    throw new ConnectionError('Trop de requêtes, réessayez plus tard', 10000);
  }
  throw error;
}; 