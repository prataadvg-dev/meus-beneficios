import React, { useState } from 'react';
import { Image, Linking, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListGridHome({ navigation }) {
  const number = +558592381003;
  const msg = ''
  const urlNews = 'https://www.prataadv.com.br/#page-four'
  const urlGoogleForm = 'https://docs.google.com/forms/d/e/1FAIpQLScXyvm8qIWF2XYVLt40GhK0Ad8A7hmkUfi5Hk7orF2lgRQy1w/viewform'

  const openNews = () => {
    openURL(urlNews)
  };
  const shareUrlAppPlay = () => {
    let text = '🙋🏻‍♂️Dúvidas sobre INSS? Como funciona, quais regras e principais dúvidas sobre o assunto!\n\n📱Fale conosco e temos a solução rápida e prática 😁\n\n⬇️ Faça o Download App '

    if (Platform.OS === 'android')
      text = text.concat('https://play.google.com/store/apps/details?id=meu.beneficio.com\n\n')
    else
      text = text.concat('\n\n')

    text = text.concat('✅ Disponível apenas no Google Play')

    Share.share({
      subject: 'Download TagWag App Now',
      title: 'Download TagWag App Now',
      message: text,
      url: 'app://tagwag',

    }, {
      // Android only:
      dialogTitle: 'Share TagWag App',
      // iOS only:
      excludedActivityTypes: []
    })
  }

  const openGoogleForm = () => {
    openURL(urlGoogleForm)
  };

  const openBenefit = () => {
    navigation.navigate('Meu Benefício')
  }

  const openAboutCompany = () => {
    navigation.navigate('Sobre a Empresa')
  }

  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${msg}&phone=${number}`)
  }

  const openURL = url => {
    console.log('Notícias')

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const [items, setItems] = useState([
    { name: 'Benefícios', code: '#1abc9c', icon: 'handshake-o', method: openBenefit },
    { name: 'Solicitações', code: '#2ecc71', icon: 'group', method: openGoogleForm },
    { name: 'A Empresa', code: '#3498db', icon: 'building', method: openAboutCompany },
    { name: ' Notícias', code: '#9b59b6', icon: 'newspaper-o', method: openNews },
    { name: 'Compartilhar', code: '#34495e', icon: 'share-alt', method: shareUrlAppPlay },
    { name: 'Fale Conosco', code: '#16a085', icon: 'comments-o', method: openWhatsApp },

  ]);

  return (
    <View style={styles.gridView} >
      <Image
        source={require('../images/splashscreen_image.jpg')}
        style={{ alignSelf: 'center', width: 350, height: 350 }}
      />
      <FlatGrid
        itemDimension={130}
        data={items}
        /* style={{
          borderRight: `blue`,
          borderLeftWidth: `12px`
        }} */
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.itemContainer]} onPress={item.method/* () => {
            console.log(item)
            item.method
          } */}>
            <Icon style={styles.icon} name={item.icon} size={30} />
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    //backgroundColor: "#DDDDDD",
    //padding: 10
  },
  gridView: {
    marginTop: -70,
    flex: 1,
  },
  icon: {
    shadowColor: 'black',
    fontSize: 45,
    alignSelf: 'center',
    color: '#000099'
  },
  itemContainer: {
    alignItems: "center",
    borderEndColor: 'black',
    borderColor: 'black',
    //borderBottomWidth:1,
    borderWidth: 1,
    justifyContent: 'flex-end',
    borderRadius: 5,
    paddingBottom: 40,//10,
    height: 140,
  },
  itemName: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    //color: '#fff',
  },
});