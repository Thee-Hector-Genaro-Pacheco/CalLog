import { buildSchema } from "graphql";

export const schema = buildSchema(/* GraphQL */ `
  enum InstrumentType {
    PT
    TE
    OTHER
  }

  type Instrument {
    id: ID!
    tag: String!
    type: InstrumentType!
    description: String
    unit: String
  }

  type CalibrationPoint {
    inputLabel: String!
    inputValue: Float!
    inputUnit: String!
    outputLabel: String!
    outputValue: Float!
    outputUnit: String!
  }

  type CalibrationRecord {
    id: ID!
    instrumentTag: String!
    date: String!
    points: [CalibrationPoint!]!
    notes: String
  }

  type Query {
    health: String!
    instruments: [Instrument!]!
    calibrationRecords(instrumentTag: String!): [CalibrationRecord!]!
  }
`);
