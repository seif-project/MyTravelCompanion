import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { LoginSuccess } from '@store/slices/authSlice'; // Assurez-vous que c'est bien importé
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '@services/api';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/types'; // Importez votre fichier types.ts

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Typage navigation
  const dispatch = useDispatch();

  // Schéma de validation avec des messages d'erreur traduits via `i18n`
  const schema = yup.object().shape({
    name: yup.string().required(t('validation.name_required')),
    email: yup
      .string()
      .email(t('validation.invalid_email'))
      .required(t('validation.email_required')),
    password: yup
      .string()
      .min(6, t('validation.password_min'))
      .required(t('validation.password_required')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t('validation.passwords_mismatch'))
      .required(t('validation.confirm_password_required')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await api.post('/register', data); // Remplacez par votre endpoint réel
      const { token, user } = response.data;

      // Utilisation correcte de dispatch avec l'action
      dispatch(LoginSuccess({ token, user }));

      // Navigation correcte vers 'Home'
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(t('error.title'), t('error.registration_failed'));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 24, textAlign: 'center' }}>
        {t('register.title')}
      </Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={t('register.name')}
            onChangeText={onChange}
            value={value}
            style={{
              marginBottom: 12,
              borderWidth: 1,
              padding: 8,
              borderRadius: 4,
            }}
          />
        )}
      />
      {errors.name && (
        <Text style={{ color: 'red', marginBottom: 8 }}>
          {errors.name.message}
        </Text>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={t('register.email')}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            style={{
              marginBottom: 12,
              borderWidth: 1,
              padding: 8,
              borderRadius: 4,
            }}
          />
        )}
      />
      {errors.email && (
        <Text style={{ color: 'red', marginBottom: 8 }}>
          {errors.email.message}
        </Text>
      )}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={t('register.password')}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            style={{
              marginBottom: 12,
              borderWidth: 1,
              padding: 8,
              borderRadius: 4,
            }}
          />
        )}
      />
      {errors.password && (
        <Text style={{ color: 'red', marginBottom: 8 }}>
          {errors.password.message}
        </Text>
      )}

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={t('register.confirm_password')}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            style={{
              marginBottom: 12,
              borderWidth: 1,
              padding: 8,
              borderRadius: 4,
            }}
          />
        )}
      />
      {errors.confirmPassword && (
        <Text style={{ color: 'red', marginBottom: 8 }}>
          {errors.confirmPassword.message}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{
          backgroundColor: '#007bff',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 16,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>
          {t('register.submit')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ marginTop: 16, alignItems: 'center' }}
      >
        <Text style={{ color: '#007bff' }}>
          {t('register.already_have_account')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
