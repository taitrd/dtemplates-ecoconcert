// import { subscribeToNewsletterServer } from "@/lib/actions/subscribe";
import { isStaticExport } from "@/lib/constants/app";

async function subscribeToNewsletterStub(email: string) {
  // Client-side stub for static export — no server action available
  console.log("Newsletter subscription (static mode):", email);
  return { success: true };
}

export const subscribeToNewsletter = isStaticExport
  ? subscribeToNewsletterStub
  : () => ({ success: true });
// subscribeToNewsletterServer
