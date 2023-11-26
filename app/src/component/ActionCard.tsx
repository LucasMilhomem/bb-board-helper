import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export enum ActionType {
    BASIC = "BÁSICO",
    SPECIAL = "ESPECIAL",
    ABILITY = "HABILIDADE",
}
 
type ActionCardProp = PropsWithChildren<{
    action?: ActionType,
    size?: string,
}>;

export default function ActionCard({action, size = "md"}:ActionCardProp):JSX.Element{

    return (
        <View style={[styles.container, (size=="md"?styles.mdContainer:styles.lgContainer)]}>
            <Text
            style={[
                size=="md"?styles.mdSectionTitle:styles.lgSectionTitle,
            ]}>
            {action}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 15,
        borderBottomWidth: 20,
        borderTopWidth: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        borderColor: "#464140",
        backgroundColor: "white",
        alignItems: "center",
        marginHorizontal: '1%',
        marginBottom: 6,
    },
    mdContainer: {
        minWidth: '48%',
    },
    lgContainer: {
        width: 300
    },
    mdSectionTitle: {
        fontSize: 20,
        fontFamily: 'Cochin',
    },
    lgSectionTitle: {
        fontSize: 40,
        fontFamily: 'Cochin',
    },
});