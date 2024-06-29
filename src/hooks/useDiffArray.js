function findArrayDifference(currentArray, previousArray) {
	const currentSet = new Set(currentArray);
	const previousSet = new Set(previousArray);
	const added = [];
	const removed = [];
	for (const element of currentArray) {
		if (!previousSet.has(element)) {
			added.push(element);
		}
	}
	for (const element of previousArray) {
		if (!currentSet.has(element)) {
			removed.push(element);
		}
	}
	return {
		added,
		removed,
		emitted: currentArray,
	};
}
export const useDiffArray = (arr, prevArr) => {
	return findArrayDifference(arr, prevArr);
};
