export type AuthStackType = {
  'login'?: {};
  'register'?: {};
};

export type MainStackType = {
  'tabs'?: {};
  'details': { id: number; type: string };
  'reserve'?: {};
};

export type AppNavigationProps = AuthStackType & MainStackType;
