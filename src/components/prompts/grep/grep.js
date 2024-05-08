import { useWorkSpaceStore } from "stores/workspace-store";

export function grepImpl(phrase) {
  const workSpaceStore = useWorkSpaceStore();
  workSpaceStore.triggerGrep(phrase);
}
