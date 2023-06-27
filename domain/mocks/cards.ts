import {Card} from "../Card";
import {EFrequency} from "../frequency.enum";
import {CardsManager} from "../CardsManager";

const c1 = new Card(
	1,
	'Tamucho',
	// EFrequency.COMMON
	EFrequency.RARE
)

const c2 = new Card(
	2,
	'Veninhu',
	EFrequency.LEGENDARY
)

const c3 = new Card(
	3,
	'Carniça',
	// EFrequency.COMMON
	EFrequency.RARE
)

const c4 = new Card(
	4,
	'Caipira',
	EFrequency.RARE
)

const c5 = new Card(
	5,
	'Caramelo',
	EFrequency.EPIC
)

const c6 = new Card(
	6,
	'Gatão',
	EFrequency.RARE
)

const preCards = [c1,c2,c3,c4,c5,c6]

export const cardsManagerSingleton = new CardsManager(preCards);

// cardsManagerSingleton.addCard(c1)
// cardsManagerSingleton.addCard(c2)
// cardsManagerSingleton.addCard(c3)
// cardsManagerSingleton.addCard(c4)
// cardsManagerSingleton.addCard(c5)
// cardsManagerSingleton.addCard(c6)