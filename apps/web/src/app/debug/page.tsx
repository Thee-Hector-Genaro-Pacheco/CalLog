"use client";

import { gql, useQuery } from "@apollo/client";

const HEALTH_QUERY = gql`
  query Health {
    health
  }
`;

export default function DebugPage() {
    const { data, loading, error } = useQuery(HEALTH_QUERY);

    if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
    if (error)
        return (
            <div style={{ padding: 24 }}>
                <h2>Error</h2>
                <pre>{error.message}</pre>
            </div>
        );

    return (
        <div style={{ padding: 24 }}>
            <h1>CalLog Debug</h1>
            <p>
                <strong>health:</strong> {data?.health}
            </p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
