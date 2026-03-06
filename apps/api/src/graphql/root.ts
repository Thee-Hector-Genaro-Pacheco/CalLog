type InstrumentType = "PT" | "TE" | "OTHER";

const instruments = [
    { id: "PT-3402-003", tag: "PT-3402-003", type: "PT" as InstrumentType, unit: "kPa → mA" },
    { id: "PT-3402-004", tag: "PT-3402-004", type: "PT" as InstrumentType, unit: "kPa → mA" },
    { id: "PT-3402-005", tag: "PT-3402-005", type: "PT" as InstrumentType, unit: "kPa → mA" },

    { id: "TE-3402-003B", tag: "TE-3402-003B", type: "TE" as InstrumentType, unit: "°F (Ref/TC)" },
];

const calRecords = [
    {
        id: "cal-pt-3402-003-2026-03-03",
        instrumentTag: "PT-3402-003",
        date: "2026-03-03",
        points: [
            { inputLabel: "Pressure", inputValue: -100, inputUnit: "kPa", outputLabel: "Output", outputValue: 4.01, outputUnit: "mA" },
            { inputLabel: "Pressure", inputValue: 1596, inputUnit: "kPa", outputLabel: "Output", outputValue: 11.99, outputUnit: "mA" },
            { inputLabel: "Pressure", inputValue: 3290, inputUnit: "kPa", outputLabel: "Output", outputValue: 19.99, outputUnit: "mA" },
        ],
    },

    {
        id: "cal-te-3402-003b-2026-03-03",
        instrumentTag: "TE-3402-003B",
        date: "2026-03-03",
        points: [
            { inputLabel: "Ref", inputValue: 61.6, inputUnit: "F", outputLabel: "TC", outputValue: 59.9, outputUnit: "F" },
        ],
    },
];

export const rootValue = {
    health: () => "ok",
    instruments: () => instruments,
    calibrationRecords: ({ instrumentTag }: { instrumentTag: string }) =>
        calRecords.filter((c) => c.instrumentTag === instrumentTag),
};
