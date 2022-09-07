
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { List, Provider } from "react-native-paper";
import { benefitsList } from "./benefitsList";

function MeuBeneficio({ navigation }) {
    const [listItens, setListItens] = useState([]);

    const renderListItens = () => {
        let list = []
        benefitsList.map((item, index) => {
            list.push(<TouchableOpacity key={index} onPress={() =>
                navigation.navigate('Visualizar', { benefitItem: item })
            }>
                <List.Item
                    /* style={styles.item} */
                    titleStyle={{ color: 'black' }}
                    title={item.label}
                    description={`${item.whats}`}
                    descriptionStyle={{ color: 'grey' }}
                    left={() => <List.Icon icon={require("../images/info_icon.png")} />}
                />
            </TouchableOpacity>)
            // console.log(list.length)
        })
        setListItens(list)
    }

    useEffect(() => {
        renderListItens()
    }, [])

    return (
        <Provider>
            <View>
                <List.Section>
                    <ScrollView>
                        {/* <List.Subheader>Some title</List.Subheader> */}
                        {listItens}
                    </ScrollView>
                </List.Section>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    // item: {
    //     /* borderBottomColor: `black`,
    //     borderBottomWidth: 3 */
    //     color: 'red'
    // },
    // containerStyle: {
    //     //flex: 1,
    // },
    spacerStyle: {
        marginBottom: 15,
    },
    // safeContainerStyle: {
    //     //flex: 1,
    //     // margin: 50,
    //     //justifyContent: "center",
    // },
});

export default MeuBeneficio;