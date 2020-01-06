export class QueryStringParameters {
    private paramsAndValues: string[];

    constructor() {
        this.paramsAndValues = [];
    }

    public push(key: string, value: Object): void {
        // Encode queryString value
        value = encodeURIComponent(value.toString());
        const paramAndValue: string = [key, value].join('=');
        this.paramsAndValues.push(paramAndValue);
    }

    public toString(encoded: boolean = false): string {
        const queryString: string = this.paramsAndValues.join('&');
        return encoded ? encodeURIComponent(queryString) : queryString;
    }
}
