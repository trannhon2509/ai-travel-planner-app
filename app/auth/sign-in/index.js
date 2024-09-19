import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

const SignIn = () => {
    const navigation = useNavigation();
    const router = useRouter();

    const [user_name, setuser_name] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://travelmateapp.azurewebsites.net/odata/Auth/login', {
                username: user_name,
                password: password
            });

            if (response.status === 200) {
                // Đăng nhập thành công
                console.log('Đăng nhập thành công:', response.data);
                // Lưu thông tin đăng nhập và chuyển hướng
                router.push('/mytrip'); // Ví dụ chuyển đến màn hình 'home'
            } else {
                // Đăng nhập thất bại
                console.log('Đăng nhập thất bại:', response.data);
                alert('Email hoặc mật khẩu không đúng');
            }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    };

    return (
        <View style={{
            padding: 25,
            marginTop: 20
        }}>
            <TouchableOpacity onPress={() => {
                router.back();
            }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                fontWeight: 'bold',
                marginTop: 30
            }}>Let's Sign You In</Text>

            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
                marginTop: 20
            }}>Welcome Back</Text>

            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
                marginTop: 20
            }}>You've been missed</Text>

            <View style={{
                marginTop: 50
            }}>
                <Text>Username</Text>
                <TextInput
                    placeholder="Enter your username"
                    onChangeText={(value) => setuser_name(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }}
                />
            </View>

            <View style={{
                marginTop: 20
            }}>
                <Text>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }}
                />
            </View>

            <View>
                <Text style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: Colors.PRIMARY
                }}>Forgot Password?</Text>
            </View>

            <TouchableOpacity onPress={handleSignIn}>
                <Text style={{
                    padding: 15,
                    borderRadius: 99,
                    backgroundColor: Colors.PRIMARY,
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                    marginTop: 50
                }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
            >
                <Text style={{
                    textAlign: 'center',
                    marginTop: 20,
                    color: Colors.GRAY
                }}>Don't have an account? <Text style={{
                    color: Colors.PRIMARY
                }}>Sign Up</Text></Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignIn;
