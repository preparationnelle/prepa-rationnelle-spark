
import { skemaData } from "./skema";
import { gemData } from "./gem";
import { kedgeData } from "./kedge";
import { neomaData } from "./neoma";

// Export des données des écoles
export {
  skemaData,
  gemData,
  kedgeData,
  neomaData
};

// Add emlyon and edhec to the exports
export const emlyonData = {
  id: "emlyon",
  name: "EM Lyon Business School",
  slug: "emlyon"
};

export const edhecData = {
  id: "edhec", 
  name: "EDHEC Business School",
  slug: "edhec"
};
