import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Color} from "../../common";
import {useState} from "react";
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import TextInput from "../../components/TextInput";

export default function Home() {
    const [todoTitle, setTodoTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const saveTodo = () => {
        setTodos([...todos, { id: `${todoTitle}1`, title: todoTitle}]);
        setTodoTitle('');
    }

    const finishTask = () => {
        alert('Working')
    }

    return <View style={styles.home}>
        <Text style={styles.title}>Hi Bera!</Text>
        <Text style={styles.subtitle}>Focus on your day and start setting goals</Text>
        <View style={styles.cardsContainer}>
            <View style={styles.dailyStatsCard}>
                <Text style={styles.dailyStatsCardTitle}>Your Daily Stats</Text>
                <View style={styles.dailyStats}>
                    <View style={styles.dailyStatItem}>
                        <Text style={styles.dailyStatTitle}>Task Completed</Text>
                        <Text style={styles.dailyStat}>3</Text>
                    </View>
                    <View>
                        <Text style={styles.dailyStatTitle}>Tasks Given</Text>
                        <Text style={styles.dailyStat}>5</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoCards}>
                <View style={styles.streakCard}>
                    <MaterialIcons name="local-fire-department" size={20} color="#001E87" />
                    <Text>You are on 3 days streak</Text>
                </View>
                <View style={styles.unfinishedTasksCard}>
                    <MaterialCommunityIcons name="book-cancel" size={20} color="#6E463E" />
                    <Text>32 unfinished tasks</Text>
                </View>
            </View>
        </View>
        <View style={styles.todoInputView}>
            <TextInput focusedBorderColor={Color.CORNFLOWER_BLUE} value={todoTitle} onChangeText={setTodoTitle} placeholder="Write something you want to finish today" />
            <TouchableHighlight onPress={saveTodo}>
                <View style={styles.saveTodoButton}>
                    <Text style={styles.saveTodoButtonText}>Add a New Goal</Text>
                </View>
            </TouchableHighlight>
        </View>
        <FlatList
            style={{ margin: 0 }}
            data={todos}
            renderItem={({ item }) => <View style={styles.todoItem}><Text style={styles.todoItemLabel}>{item.title}</Text><TouchableWithoutFeedback onPress={finishTask}><View><Feather name="circle" size={24} color={Color.PRIMARY} /></View></TouchableWithoutFeedback></View>}
            keyExtractor={item => item.id}
        />
    </View>
}

const styles = StyleSheet.create({
    home: {
        flexGrow: 1,
    },
    title: {
        fontSize: 64,
        color: Color.PRIMARY,
        fontWeight: '500'
    },
    addTodoIcon: {
        width: 64,
        height: 64,
        alignItems: 'center',
        borderRadius: 32,
        justifyContent: "center",
        backgroundColor: Color.SECONDARY,
        borderStyle: 'solid',
        borderColor: Color.PRIMARY,
        borderWidth: 1,
        alignSelf: 'center',
    },
    addTodoModal: {
        position: "absolute",
        top: -24,
        left: -24,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 48,
    },
    todoModalTitle: {
        color: Color.PRIMARY,
        fontWeight: '500',
        fontSize: 32,
    },
    subtitle: {
        color: Color.PRIMARY,
        fontSize: 24,
        fontWeight: '600',
    },
    cardsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 32,
    },
    dailyStatsCard: {
        flex: 1,
        backgroundColor: Color.TEAL,
        padding: 24,
        borderRadius: 24,
    },
    dailyStatsCardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#384B42'
    },
    dailyStats: {
        marginTop: 24,
    },
    dailyStatTitle: {
        fontWeight: '700',
        color: '#384B42',
        textTransform: 'uppercase'
    },
    dailyStat: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#384B42'
    },
    infoCards: {
        flex: 1,
        gap: 12,
    },
    dailyStatItem: {
        marginBottom: 8,
    },
    streakCard: {
        flex: 1,
        backgroundColor: Color.CORNFLOWER_BLUE,
        paddingHorizontal: 24,
        paddingVertical: 18,
        borderRadius: 24,
        gap: 6,
    },
    unfinishedTasksCard: {
        flex: 1,
        backgroundColor: Color.GOLD,
        paddingHorizontal: 24,
        paddingVertical: 18,
        borderRadius: 24,
        gap: 6,
    },
    todoInputView: {
        marginVertical: 24,
        gap: 8
    },
    saveTodoButton: {
        alignItems: 'center',
        backgroundColor: Color.CORNFLOWER_BLUE,
        padding: 10,
        paddingVertical: 18,
        borderRadius: 12,
    },
    saveTodoButtonText: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: Color.PRIMARY
    },
    todoItem: {
        borderRadius: 12,
        backgroundColor: 'rgba(104, 126, 255, 1)',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    todoItemLabel: {
        color: Color.PRIMARY,
        fontWeight: '500'
    }
})