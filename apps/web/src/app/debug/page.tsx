"use client";

import { gql, useQuery } from "@apollo/client";

const Q = gql`
  query Debug($tag: String!) {
    instruments { tag type unit }
    calibrationRecords(instrumentTag: $tag) {
      date
      points { inputLabel inputValue inputUnit outputLabel outputValue outputUnit }
    }
  }
`;

export default function DebugPage() {
    const { data, loading, error } = useQuery(Q, { variables: { tag: "PT-3402-003" } });

    if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
    if (error) return <pre style={{ padding: 24 }}>{error.message}</pre>;

    return (
        <div style={{ padding: 24 }}>
            <h1>CalLog Debug</h1>
            <h2>Instruments</h2>
            <pre>{JSON.stringify(data?.instruments, null, 2)}</pre>

            <h2>Calibration Records (PT-3402-003)</h2>
            <pre>{JSON.stringify(data?.calibrationRecords, null, 2)}</pre>
        </div>
    );
}
