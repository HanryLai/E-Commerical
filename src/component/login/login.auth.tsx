import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import axios from "axios";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IAccountEntity } from "../../interfaces";
import { NavigationProp } from "@react-navigation/native";
import { Props } from "../../common/types/props.type";

export const Login = ({ navigation }: Props) => {
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [account, setAccount] = useState<IAccountEntity>({} as IAccountEntity);
    function onPresLogin() {
        axios
            .post("http://10.0.2.2:3030/api/auth/login", {
                username: user,
                email: user,
                password: password,
            })
            .then((response) => response.data.data)
            .then((data: IAccountEntity) => {
                setAccount(data);
                navigation.navigate("homepage", {
                    id: data.id,
                    username: data.username,
                });
            })
            .catch((err) => Alert.alert("wrong username,email or password"));
    }
    return (
        <View>
            <View>
                <View style={styles.bg_ellipse_in}>
                    <Text></Text>
                </View>
                <View style={styles.bg_ellipse_out}></View>
                <View></View>
                <View></View>
            </View>
            <View
                style={{
                    alignItems: "center",
                    marginTop: 80,
                }}
            >
                <Text
                    style={{
                        color: "#1F41BB",
                        fontSize: 30,
                        fontWeight: 600,
                    }}
                >
                    Login here
                </Text>
                <Text
                    style={{
                        width: "50%",
                        textAlign: "center",
                        marginTop: 12,
                        marginBottom: 64,
                        fontSize: 20,
                        fontWeight: 600,
                    }}
                >
                    Welcome back you've been missed
                </Text>
            </View>
            <View>
                <TextInput
                    onChangeText={(text) => setUser(text)}
                    placeholder="Username"
                    style={[styles.textInput]}
                ></TextInput>
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={[styles.textInput]}
                ></TextInput>
            </View>
            <View style={{ width: "100%" }}>
                <Text
                    style={{
                        textAlign: "right",
                        paddingHorizontal: 12,
                        paddingVertical: 24,
                        color: "#1F41BB",
                        fontWeight: 600,
                    }}
                >
                    Forgot your password?
                </Text>
                <TouchableOpacity
                    style={{
                        alignSelf: "center",
                        alignItems: "center",
                        width: "94%",
                        borderRadius: 10,
                        marginVertical: 24,
                        marginHorizontal: 12,
                        paddingVertical: 15,
                        backgroundColor: "#1F41BB",
                    }}
                    onPress={() => onPresLogin()}
                >
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 20,
                            fontWeight: 600,
                        }}
                    >
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("register", { name: "register" })}>
                <Text style={{ textAlign: "center", fontWeight: 600 }}>Create new account</Text>
            </TouchableOpacity>

            <View
                style={{
                    marginVertical: 100,
                }}
            >
                <Text style={{ textAlign: "center" }}>Or continue with</Text>
                <View
                    style={{
                        marginTop: 32,
                        flexDirection: "row",
                        width: "48%",
                        justifyContent: "space-around",
                        alignSelf: "center",
                    }}
                >
                    <TouchableOpacity style={styles.container_LoginMethod}>
                        <AntDesign name="google" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container_LoginMethod}>
                        <FontAwesome5 name="facebook" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container_LoginMethod}>
                        <FontAwesome name="apple" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    center_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        marginHorizontal: 12,
        marginVertical: 4,

        paddingHorizontal: 12,
        paddingVertical: 4,

        borderWidth: 1,
        borderRadius: 8,

        backgroundColor: "#f1f4ff",
    },

    container_LoginMethod: {
        width: 52,
        height: 36,
        backgroundColor: "#ececec",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    bg_ellipse_in: {
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: "#f8f9ff",
        position: "absolute",
        top: -140,
        right: -140,
    },

    bg_ellipse_out: {
        width: 500,
        height: 500,
        borderRadius: 250,
        position: "absolute",
        borderColor: "#F8F9FF",
        borderWidth: 3,
        top: -140,
        right: -140,
    },
});
