import { Button, Card, FAB } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import ActionCard, { ActionType } from "../component/ActionCard";
import { useState } from "react";

export default function Home (): JSX.Element{
    const [unselectedActions, setUnselectedActions] = useState(initActionList());
    const [selectedActions, setSelectedActions] = useState([] as ActionType[]);
    const [selectedAction, setSelectedAction] = useState<ActionType>();

    let keyU = 0;
    let keyS = 0;

    const onCardPickPress = () => {
        let indexToRemove = Math.floor(Math.random() * unselectedActions.length);
        let selectedAction = unselectedActions.splice(indexToRemove, 1)[0];
        if(selectedAction){
            selectedActions.push(selectedAction);
            setSelectedAction(selectedAction);
            setSelectedActions([...selectedActions]);
            setUnselectedActions([...unselectedActions,]);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card>
                    <Card.Title>AÇÕES DISPONÍVEIS</Card.Title>
                    <Card.Divider/>
                    <View style={styles.cards}>
                        {unselectedActions.map(action => (
                            <ActionCard action={action} key={++keyU}></ActionCard>
                        ))}
                    </View>
                </Card>
                <Card>
                    <Card.Title>AÇÃO SELECIONADA</Card.Title>
                    <View style={styles.selectedCard}>
                        <ActionCard size="lg" action={selectedAction}></ActionCard>
                    </View>
                </Card>
                <Card>
                    <Card.Title>AÇÕES INDISPONÍVEIS</Card.Title>
                    <Card.Divider/>
                    <View style={styles.cards}>
                        {selectedActions.map(action => (
                            <ActionCard action={action} key={++keyS}></ActionCard>
                        ))}
                    </View>
                </Card>
            </ScrollView>
            <View style={styles.actions}>
                <Button size="lg" onPress={onCardPickPress}>Pegar Carta</Button>
                {/*<FAB icon={{ name: 'add', color: 'white' }} color="green" size="large"/>*/}
            </View>
        </View>
    );
}

function initActionList () : ActionType[]{
    return [
        ActionType.BASIC,
        ActionType.BASIC,
        ActionType.BASIC,
        ActionType.SPECIAL,
        ActionType.SPECIAL,
        ActionType.ABILITY,
    ]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    selectedCard:{
        alignItems: "center",
    },
    actions: {
        bottom: 20,
        position: "absolute",
        alignSelf: "center",
        flexDirection: "row",
    }
});