export const SITE_NAME = "SparkleClean Pro";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sparklecleanpro.com";
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "1234567890";
export const WHATSAPP_MESSAGE =
  "Hello! I would like to inquire about your cleaning services.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT = {
  phone: "+1 (555) 123-4567",
  email: "hello@sparklecleanpro.com",
  address: "123 Clean Street, Suite 100, New York, NY 10001",
};
