import { Button, Card, Dialog, Text } from "@rneui/themed";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ActionCard, { ActionType } from "../component/ActionCard";

export default function Home (): JSX.Element{
    const [unselectedActions, setUnselectedActions] = useState(initActionList());
    const [selectedActions, setSelectedActions] = useState([] as ActionType[]);
    const [selectedAction, setSelectedAction] = useState<ActionType>();
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [actionToConfirm, setActionToConfirm] = useState<undefined|(() => any)>(undefined);

    let keyU = 0;
    let keyS = 0;

    const toggleConfirmDialog = (isVisible?:boolean) => {
        setConfirmModalVisible(isVisible != undefined ? isVisible : !confirmModalVisible);
    };

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

    const onReturnCardPress = () =>{
        setActionToConfirm(()=>returnCard);
        toggleConfirmDialog();
    }

    const returnCard = () => {
        if(selectedAction){
            selectedActions.splice(selectedActions.indexOf(selectedAction), 1);
            setSelectedActions([...selectedActions]);

            unselectedActions.push(selectedAction);
            unselectedActions.sort(sortActionType);
            setUnselectedActions([...unselectedActions]);

            setSelectedAction(selectedActions.length > 0? selectedActions[selectedActions.length-1]:undefined);
        }

        toggleConfirmDialog(false);
    };

    const onResetPress = () => {
        setActionToConfirm(()=>reset);
        toggleConfirmDialog();
    }

    const reset = () => {
        setUnselectedActions(initActionList());
        setSelectedActions([]);
        toggleConfirmDialog(false);
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
                <Dialog isVisible={confirmModalVisible} onBackdropPress={toggleConfirmDialog} >
                <Dialog.Title title="Deseja continuar?"/>
                <Dialog.Actions>
                    <Dialog.Button title="Confirmar" onPress={actionToConfirm}/>
                    <Dialog.Button title="Cancelar" onPress={()=>toggleConfirmDialog()}/>
                </Dialog.Actions>
                </Dialog>
            </ScrollView>
            <View style={styles.actions}>

                <View><Button size="lg" onPress={()=>{onReturnCardPress()}}>DEVOLVER</Button></View>
                <View><Button size="lg" onPress={onCardPickPress}>PEGAR</Button></View>
                <View><Button size="lg" onPress={onResetPress}>RESETAR</Button></View>
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

const sortActionType = (a:ActionType, b:ActionType) => {
    const map : any = {};
    map[ActionType.BASIC] = 1;
    map[ActionType.SPECIAL] = 2;
    map[ActionType.ABILITY] = 3;

    if (map[a] < map[b]) {
        return -1;
    }

    if (map[a] > map[b]) {
        return 1;
    }

    return 0;
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
        width: "100%",
        flex:1,
        bottom: 0,
        paddingBottom: 20,
        paddingTop: 10,
        position: "absolute",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "silver",
    }
});