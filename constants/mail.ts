export const mailtrapConfig = {
  // Mailtrap Send API token provided via env
  token: process.env.MAILTRAP_TOKEN ?? "12f7cc9bf1af8304946157801dacb676",
  // Defaults aligned with Mailtrap Send API sample
  senderEmail: process.env.MAILTRAP_SENDER_EMAIL ?? "hello@demomailtrap.co",
  senderName: process.env.MAILTRAP_SENDER_NAME ?? "Mailtrap - Prashan Portfolio",
  // Where contact form messages will be delivered (usually your inbox)
  recipientEmail: process.env.MAILTRAP_RECIPIENT_EMAIL ?? "pprashan8@gmail.com",
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


