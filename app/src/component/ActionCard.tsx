import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export enum ActionType {
    BASIC = "BÁSICO",
    SPECIAL = "ESPECIAL",
    ABILITY = "HABILIDADE",
}

export interface IAction {
    type : ActionType,
    selected : boolean,
}
 
type ActionCardProp = PropsWithChildren<{
    action: IAction;
}>;

export default function ActionCard({action}:ActionCardProp):JSX.Element{

    return (
        <View style={styles.container}>
            <Text
            style={[
                styles.sectionTitle,
            ]}>
            {action.type}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: '48%',
        paddingVertical: 10,
        borderBottomWidth: 20,
        borderTopWidth: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        borderColor: "grey",
        backgroundColor: "white",
        alignItems: "center",
        marginHorizontal: '1%',
        marginBottom: 6,

    },
    sectionTitle: {
        fontSize: 25,
        fontFamily: 'Cochin',
    },
});