import {KEY_OF_INTEREST} from "../src/filter";

export const flatObjectStructure = {
    withoutAnyKey: {},
    withoutKeyOfInterest: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
    },
    withKeyOfInterest: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
        [KEY_OF_INTEREST]: "theValueIAmLookingFor",
    },
};

export const flatArrayStructure = {
    withoutAnyKey: [],
    withoutKeyOfInterest: [
        {someKey: "arbitrary", anotherKey: "arbitrary"},
        {someKey: "arbitrary", anotherKey: "arbitrary"},
    ],
    withKeyOfInterest: [
        {someKey: "arbitrary", anotherKey: "arbitrary"},
        {someKey: "arbitrary", anotherKey: "arbitrary", [KEY_OF_INTEREST]: "theValueIAmLookingFor"},
    ],
};

export const nestedStructureWithObjectsOnly = {
    withoutKeyOfInterest: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
        nestedValue: {
            someKey: "arbitrary",
            anotherKey: "arbitrary",
            nestedValue: {
                someKey: "arbitrary",
                anotherKey: "arbitrary",
            },
        },
    },
    withKeysOfInterest: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
        [KEY_OF_INTEREST]: "theValueIAmLookingFor-1",
        nestedValue: {
            someKey: "arbitrary",
            anotherKey: "arbitrary",
            [KEY_OF_INTEREST]: "theValueIAmLookingFor-2",
            nestedValue: {
                someKey: "arbitrary",
                anotherKey: "arbitrary",
                [KEY_OF_INTEREST]: "theValueIAmLookingFor-3",
            },
        },
    },
};

export const nestedStructureWithArrays = {
    withoutKeyOfInterest: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
        nestedValue: [
            {someKey: "arbitrary", anotherKey: "arbitrary"},
            {someKey: "arbitrary", anotherKey: "arbitrary"},
        ]
    },
    withKeysOfInterest: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
        [KEY_OF_INTEREST]: "theValueIAmLookingFor-1",
        nestedValue: [
            {someKey: "arbitrary", anotherKey: "arbitrary", [KEY_OF_INTEREST]: "theValueIAmLookingFor-2"},
            {
                someKey: "arbitrary", anotherKey: "arbitrary", nestedValue: [
                    {someKey: "arbitrary", anotherKey: "arbitrary", [KEY_OF_INTEREST]: "theValueIAmLookingFor-3"},
                    {someKey: "arbitrary", anotherKey: "arbitrary", [KEY_OF_INTEREST]: "theValueIAmLookingFor-4"},
                ]
            },
        ]
    },
};

export const withNullValues = {
    object: {
        someKey: "arbitrary",
        anotherKey: "arbitrary",
        nullValue: null,
    },
    array: [
        {someKey: "arbitrary", anotherKey: "arbitrary"},
        {someKey: "arbitrary", anotherKey: "arbitrary", nullValue: null},
    ]
}
