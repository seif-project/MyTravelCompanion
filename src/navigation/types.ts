// src/navigation/types.ts

// Définir les types pour vos routes
export type RootStackParamList = {
  Home: undefined; // La route 'Home' n'a pas de paramètres
  Login: undefined; // La route 'Login' n'a pas de paramètres
  Register: undefined; // La route 'Register' n'a pas de paramètres
  Profile: { userId: string }; // La route 'Profile' a un paramètre 'userId' de type string
};
