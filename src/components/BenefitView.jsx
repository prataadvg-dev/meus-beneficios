import React from 'react'
import { Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Headline, List, Paragraph, Surface, Text, Title } from 'react-native-paper'

function BenefitView({ route, navigation }) {
    const number = +558592381003;
    const msg = ''

    const openWhatsApp = () => {
        Linking.openURL(`whatsapp://send?text=${msg}&phone=${number}`)
    }

    return (
        <ScrollView>
            <Surface style={styles.surface}>
                <Headline style={{ marginTop: 70 }}>
                    <Title>O que é ?</Title>
                </Headline>
                <Paragraph style={styles.paragraph}>{route.params.benefitItem.whats}</Paragraph>
                <Headline style={{ marginTop: 40 }}>
                    <Title>Quem tem direito ?</Title>
                </Headline>
                <Paragraph style={styles.paragraph}>{route.params.benefitItem.whosRight}</Paragraph>

                <TouchableOpacity onPress={openWhatsApp}>
                    <View style={{
                        width: 200,
                        marginTop: 20,
                        backgroundColor: 'blue',
                        //paddingTop: .1,
                        //borderWidth: .5,
                        borderRadius: 80,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>

                        <List.Item
                            style={styles.item}
                            titleStyle={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}
                            title={`Consulte aqui!`}
                            /* description={`Consulte aqui!`}
                            descriptionStyle={{ color: 'blue', fontSize: 16 }} */
                            left={() => <List.Icon style={{ textAlign: `center` }} icon={require("../images/whatsapp_icon.png")} />}
                        />
                    </View>
                </TouchableOpacity>

            </Surface>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row"
    },
    surface: {
        height: '100 %',
        width: '100 %',
        alignItems: 'center',
    },
    paragraph: {
        padding: 10,
        textAlign: 'justify'
    }
});

export default BenefitView
