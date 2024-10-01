import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LoginSuccess } from '@store/slices/authSlice';
import { useTranslation } from 'react-i18next';
import { styled } from 'nativewind';

interface LoginFormData {
  email: string;
  password: string;
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (data: LoginFormData) => {
    const token = 'fakeToken';
    const user = { id: '1', name: 'foulen ben foulen', email: data.email };
    dispatch(LoginSuccess({ token, user }));
  };

  return (
    <StyledView className="flex-1 justify-center items-center bg-gray-100">
      <StyledView className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
        <StyledText className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t('login.title')}
        </StyledText>

        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: t('login.email_required') },
          }}
          render={({ field: { onChange, value } }) => (
            <StyledTextInput
              placeholder={t('login.email')}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              className="mb-4 border border-gray-300 rounded-md p-4 text-base text-gray-700 focus:border-blue-500"
            />
          )}
        />
        {errors.email && (
          <StyledText className="text-red-500 text-sm mb-2">
            {errors.email.message}
          </StyledText>
        )}

        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: t('login.password_required') },
          }}
          render={({ field: { onChange, value } }) => (
            <StyledTextInput
              placeholder={t('login.password')}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              className="mb-4 border border-gray-300 rounded-md p-4 text-base text-gray-700 focus:border-blue-500"
            />
          )}
        />
        {errors.password && (
          <StyledText className="text-red-500 text-sm mb-2">
            {errors.password.message}
          </StyledText>
        )}

        <StyledTouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-blue-600 p-4 rounded-lg items-center mt-6"
        >
          <StyledText className="text-white text-lg font-semibold">
            {t('login.submit')}
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default LoginScreen;
