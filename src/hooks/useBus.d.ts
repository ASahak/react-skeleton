export declare const dispatch: (event: any) => void;
declare const useBus: (
	type: any,
	callback: any,
	deps?: never[]
) => (event: any) => void;
export default useBus;
