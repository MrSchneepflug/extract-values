export const KEY_OF_INTEREST = "theKeyIAmInterestedIn";

export function filter(json: object): ReadonlyArray<string> {
    if (Array.isArray(json) && json.length === 0) {
        return [];
    }

    // Convert object into array of tuples [[key, value], [key, value], ...]
    const tuples = Object.entries(json);

    return tuples
        .map(([key, value]) => {
            // 1. Filter null values since `typeof null === "object"`
            // 2. Map `undefined` to `null` so it is removed easily with `.filter()`
            if (value === null || value === undefined) {
                return null;
            }

            if (key === KEY_OF_INTEREST) {
                return value;
            }

            if (typeof value === "object") {
                return filter(value);
            }

            // Map `undefined` to `null`
            return null;
        })
        .filter(value => value !== null)
        .flat();
}
