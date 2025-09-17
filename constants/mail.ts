export const mailtrapConfig = {
  token: process.env.MAILTRAP_TOKEN ?? "",
  senderEmail: process.env.MAILTRAP_SENDER_EMAIL ?? "",
  senderName: process.env.MAILTRAP_SENDER_NAME ?? "Portfolio Contact",
  // Where contact form messages will be delivered (usually your inbox)
  recipientEmail: process.env.MAILTRAP_RECIPIENT_EMAIL ?? "",
} as const;

export function assertMailtrapEnv(): void {
  const missing: string[] = [];
  if (!mailtrapConfig.token) missing.push("MAILTRAP_TOKEN");
  if (!mailtrapConfig.senderEmail) missing.push("MAILTRAP_SENDER_EMAIL");
  if (!mailtrapConfig.recipientEmail) missing.push("MAILTRAP_RECIPIENT_EMAIL");
  if (missing.length) {
    throw new Error(
      `Missing Mailtrap environment variables: ${missing.join(", ")}`
    );
  }
}


