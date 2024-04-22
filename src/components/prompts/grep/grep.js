import { useWorkSpaceStore } from "stores/workspace-store";

export function grepImpl(phrase) {
  const workSpaceStore = useWorkSpaceStore();
  var phraseRegexp = new RegExp(phrase, "i");

  let newIndex = workSpaceStore.getHighestIndex + 1;
  workSpaceStore.addWorkspace({
    index: newIndex,
    label: workSpaceStore.getCurrentLabel + " " + phrase,
    content: workSpaceStore.getCurrentWorkspace.content.filter((elem) => {
      return phraseRegexp.test(elem.line);
    }),
  });

  workSpaceStore.setCurrentWorkspaceIndex(newIndex);
}
