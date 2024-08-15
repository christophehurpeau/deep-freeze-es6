import { createCheckPackage } from "check-package-dependencies";

await createCheckPackage({
  isLibrary: true,
})
  .checkRecommended()
  .run();
