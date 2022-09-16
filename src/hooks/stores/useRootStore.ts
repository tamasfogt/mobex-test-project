import { StoreContext } from "../../context/storeContext";
import { useContext } from "react";

export default function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}
