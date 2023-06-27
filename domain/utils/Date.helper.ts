export class DateHelper {
	public static calcDiffDays(startDate: Date, endDate: Date) {
		// @ts-ignore
		const millisecondsDiff = Math.abs(startDate - endDate)
		return ((((millisecondsDiff/1000)/60)/60)/24)
	}
}