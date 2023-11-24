import { Button, StyleSheet, View } from "react-native";
import ActionCard, { ActionType, IAction } from "../component/ActionCard";

export default function Home (): JSX.Element{
    let actions = getActionList();
    let actionCards = [];

    for(let i = 0; i<actions.length;i++){
        actionCards.push(
            <ActionCard action={actions[i]} key={i}></ActionCard>
        );
    }

    return (
        <View style={styles.container}>
            {actionCards}
            <Button title="Pegar" color="#841584"/>
        </View>
    );
}

function getActionList () : IAction[]{
    return [
        { type : ActionType.BASIC, selected : false},
        { type : ActionType.BASIC, selected : false},
        { type : ActionType.BASIC, selected : false},
        { type : ActionType.SPECIAL, selected : false},
        { type : ActionType.SPECIAL, selected : false},
        { type : ActionType.ABILITY, selected : false},
    ]
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "silver",
        alignItems: "center",
    },
});