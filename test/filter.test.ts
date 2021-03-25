import {filter} from "../src/filter";
import {
    flatArrayStructure,
    flatObjectStructure,
    nestedStructureWithArrays,
    nestedStructureWithObjectsOnly, withNullValues
} from "./fixtures";

describe("extracting values", () => {
    describe("returns empty array if key is not found", () => {
        const testCases = [
            {name: "without arrays: flat structure without any key", subject: flatObjectStructure.withoutAnyKey},
            {name: "without arrays: flat structure without key of interest", subject: flatObjectStructure.withoutKeyOfInterest},
            {name: "without arrays: nested structure without key of interest", subject: nestedStructureWithObjectsOnly.withoutKeyOfInterest},
            {name: "without arrays: with null values", subject: withNullValues.object},
            {name: "with arrays: flat structure without any key", subject: flatArrayStructure.withoutAnyKey},
            {name: "with arrays: flat structure without key of interest", subject: flatArrayStructure.withoutKeyOfInterest},
            {name: "with arrays: nested structure without key of intest", subject: nestedStructureWithArrays.withoutKeyOfInterest},
            {name: "with arrays: with null values", subject: withNullValues.array},
        ];

        testCases.forEach(testCase => {
            test(testCase.name, () => {
                const actual = filter(testCase.subject);
                expect(actual).toBeInstanceOf(Array);
                expect(actual).toHaveLength(0);
            })
        });
    });

    describe("flat json-structure", () => {
        describe("returns array with found value", () => {
            const testCases = [
                {name: "without arrays", subject: flatObjectStructure.withKeyOfInterest},
                {name: "with arrays", subject: flatArrayStructure.withKeyOfInterest},
            ]

            testCases.forEach(testCase => {
                test(testCase.name, () => {
                    const actual = filter(testCase.subject);

                    expect(actual).toBeInstanceOf(Array);
                    expect(actual).toHaveLength(1);
                    expect(actual).toContain("theValueIAmLookingFor");
                });
            });
        });
    });

    describe("nested json-structure", () => {
        describe("returns array with found values", () => {
            test("without arrays", () => {
                const actual = filter(nestedStructureWithObjectsOnly.withKeysOfInterest);

                expect(actual).toBeInstanceOf(Array);
                expect(actual).toHaveLength(3);
                expect(actual).toEqual(["theValueIAmLookingFor-1", "theValueIAmLookingFor-2", "theValueIAmLookingFor-3"])
            });

            test("with arrays", () => {
                const actual = filter(nestedStructureWithArrays.withKeysOfInterest);

                expect(actual).toBeInstanceOf(Array);
                expect(actual).toHaveLength(4);
                expect(actual).toEqual(["theValueIAmLookingFor-1", "theValueIAmLookingFor-2", "theValueIAmLookingFor-3", "theValueIAmLookingFor-4"])
            });
        });
    });
});
