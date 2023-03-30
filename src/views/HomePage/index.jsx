import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { loginStyles } from "../Login";
import { SafeAreaView } from "react-native";
import MoviesSwiper from "../MoviesSwiper";

export default function HomePage() {
  useEffect(()=> {
    console.log('render')
  },[])
    return (
        <SafeAreaView style={loginStyles.safeAreaView}>
            <MoviesSwiper />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
