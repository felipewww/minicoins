import {StyleSheet} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';
import {Desire} from "../../domain/Desire";
import {desiresMock} from "../../domain/mocks/desires";
import {cardsManagerSingleton} from "../../domain/mocks/cards";
import {tasksMock} from "../../domain/mocks/tasks";

export default function TabOneScreen() {


	// console.log(desiresMock)
	// console.log(cardsManagerSingleton)
	console.log(tasksMock)

	/**
	 * tem 4 goals. 5 dias, 10 dias, 25 dias e 70 dias.
	 */
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Teste</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
			<EditScreenInfo path="app/(tabs)/index.tsx"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
