export interface IStorageItem {
	key: string;
	value: any;
}
export declare class StorageItem {
	key: string;
	value: any;
	constructor(data: IStorageItem);
}
declare const LocalStorage: {
	localStorageSupported: boolean;
	set(key: string, value: any): void;
	getAllItems(): Array<StorageItem>;
	getAllValues(): Array<any>;
	get(key: string): string | null;
	remove(key: string): void;
	clear(): void;
};
export default LocalStorage;
