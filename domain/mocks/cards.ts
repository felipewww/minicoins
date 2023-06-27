import {Card} from "../Card";
import {EFrequency} from "../frequency.enum";
import {CardsManager} from "../CardsManager";

const c1 = new Card(
	1,
	'Tamucho',
	EFrequency.COMMON
)

const c2 = new Card(
	2,
	'Veninhu',
	EFrequency.COMMON
)

const c3 = new Card(
	3,
	'Carniça',
	EFrequency.COMMON
)

const c4 = new Card(
	4,
	'Caipira',
	EFrequency.COMMON
)

const c5 = new Card(
	5,
	'Caramelo',
	EFrequency.COMMON
)

const c6 = new Card(
	6,
	'Gatão',
	EFrequency.COMMON
)

export const cardsManagerSingleton = new CardsManager();

cardsManagerSingleton.addCard(c1)
cardsManagerSingleton.addCard(c2)
cardsManagerSingleton.addCard(c3)
cardsManagerSingleton.addCard(c4)
cardsManagerSingleton.addCard(c5)
cardsManagerSingleton.addCard(c6)