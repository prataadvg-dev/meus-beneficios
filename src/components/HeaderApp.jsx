import { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Appbar, DefaultTheme, Provider, ThemeProvider } from 'react-native-paper';

export default HeaderApp = ({ navigation, back }) => {
    const [nightMode, setNightmode] = useState(false);

    return (
        <Provider theme={nightMode ? DarkTheme : DefaultTheme}>
            <ThemeProvider theme={nightMode ? DarkTheme : DefaultTheme}>
                <StatusBar
                    backgroundColor={
                        nightMode ? DarkTheme.colors.surface : DefaultTheme.colors.primary
                    }
                    barStyle={"light-content"}
                />
                <Appbar.Header style={{ backgroundColor: '#0052cc' }}>
                    {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                    <Appbar.Content title="My awesome app" subtitle="Subtitle" />
                </Appbar.Header>
            </ThemeProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //marginTop: -70,
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});