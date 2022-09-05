import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Headline, Paragraph, Surface, Title } from 'react-native-paper'

function AboutCompany({ route, navigation }) {
    return (

        <ScrollView>

            <Surface style={styles.surface}>

                {/* <Headline style={{ marginTop: 70 }}>
                    <View style={styles.container}>
                        <Image
                            style={styles.stretch}
                            source={{
                                uri: 'https://www.prataadv.com.br/wp-content/themes/merakiartsbrasil-spjadv/images/logo.png',
                            }}
                        />
                    </View>
                </Headline> */}
                {/* <Headline style={{ marginTop: 40 }}>
                    <Title style={{ alignContent: 'center' }}>Prata, Linhares, Alves e Azevedo</Title>
                </Headline> */}
                <Headline style={{ marginTop: 40 }}>
                    <Title style={{ alignContent: 'center', color: `grey` }}>Meu Benefício</Title>
                </Headline>
                <Paragraph style={styles.paragraph}>Olá, nós somos da assessoria previdenciária MEU BENEFÍCIO especialistas em Previdência Social, buscando sempre assegurar aos nossos clientes a percepção do melhor benefício previdenciário a que tem direito. Nossa equipe de especialistas tem amplo conhecimento da na área, e é capaz de prestar serviços com excelência e agilidade.</Paragraph>
                <Paragraph style={styles.paragraph}>Nossa equipe de especialistas tem amplo conhecimento da na área, e é capaz de prestar serviços com excelência e agilidade.  Através do nosso escritório digital você não precisa sair de casa para resolver as questões previdenciárias que estão fazendo você ‘perder o sono’.</Paragraph>
                <Paragraph style={styles.paragraph}>Nossos profissionais estão capacitados para atender você online. Teve algum benefício do INSS negado ou ainda não requereu?! Temos a solução para o seu caso. Entre em contato com nossa equipe para tirar suas dúvidas. Nos conheça também através nosso Instagram @plaa_advogados_associados e descubra todos seus direitos.</Paragraph>

            </Surface>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    stretch: {
        width: 350,
        height: 80,
        resizeMode: 'stretch',
    },
    logo: {
        width: 300,
        height: 50,
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

export default AboutCompany
