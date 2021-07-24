import { fork, serialize, Scope, Domain } from "effector-root";
import { useMemo } from "react";

let scope: Scope;

function initializeScope(domain: Domain, initialData: unknown) {
  console.info("[initializeScope]");
  const _scope = fork(domain, {
    values: {
      ...(scope ? serialize(scope, { onlyChanges: true }) : {}),
      ...(typeof initialData === "object" ? initialData : {}),
    },
  });

  if (typeof window !== "undefined") {
    scope = _scope;
  }

  return _scope;
}

export function useScope(domain: Domain, initialState: unknown) {
  return useMemo(
    () => initializeScope(domain, initialState),
    [domain, initialState]
  );
}
