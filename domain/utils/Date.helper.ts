export class DateHelper {
	public static calcDiffDays(startDate: Date, endDate: Date) {
		// @ts-ignore
		const millisecondsDiff = Math.abs(startDate - endDate)
		return ((((millisecondsDiff/1000)/60)/60)/24)
	}
}

export function RandomNumber(min: number, max: number) {
	if (min > max) {
		throw new Error('Min should be greater than Max number.')
	}

	return Math.round(Math.random() * (max - min) + min);
}