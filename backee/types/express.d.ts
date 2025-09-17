// backee/types/express.d.ts
declare global {
  namespace Express {
    interface UserPayload {
      id: string;
      role: string;
      email?: string;
    }
    interface Request {
      user?: UserPayload;
    }
  }
}

export {};