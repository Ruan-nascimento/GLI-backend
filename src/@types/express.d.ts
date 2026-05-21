declare namespace Express {
  export interface Request {
    user?: {
      id: string | number;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}