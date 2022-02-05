import React from "react";
import { useLocation } from "react-router-dom";

//gets query params from current url
export function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}