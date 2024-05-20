import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { CustomButton, FormField } from '@components';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeText = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center min-h-[82vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode="contain"
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'>Sign up to Aora</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: string) => handleChangeText('username', e)}
            otherStyles="mt-10"
            placeholder="username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => handleChangeText('email', e)}
            otherStyles="mt-7"
            placeholder="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => handleChangeText('password', e)}
            otherStyles="mt-7"
          />

          <CustomButton
            title='Sign Up'
            handlePress={handleSubmit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Have an account already?</Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
