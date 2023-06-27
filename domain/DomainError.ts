export abstract class DomainError extends Error {

}

export class DuplicatedCardNameError extends DomainError {
	constructor() {
		super();
		this.message = "Card's cant have duplicated name"
	}
}