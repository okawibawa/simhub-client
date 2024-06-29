import { useState } from "react";

export const useEsimPlansFilterHook = () => {
  const [planType, setPlanType] = useState<"roaming" | "local">("roaming");

  return { planType, setPlanType };
};
