"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
};

export function Logo({
  className,
  showText = true,
  variant = "default",
  size = "md",
}: LogoProps) {
  const t = useTranslations("brand");
  const iconSizes = { sm: 32, md: 40, lg: 48 };
  const iconSize = iconSizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect width="48" height="48" rx="10" fill="#3D4F2E" />
        <path
          d="M14 12V36M18 12V36M22 12V36M26 12V36"
          stroke="#C9A227"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 12H30"
          stroke="#C9A227"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 28C30 28 32 26 36 26C38 26 40 27 40 29C40 33 36 36 32 36H28"
          stroke="#F0EBE3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 28V36"
          stroke="#F0EBE3"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="29" r="1.5" fill="#C9A227" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-heading font-semibold tracking-tight",
              size === "sm" && "text-base",
              size === "md" && "text-lg",
              size === "lg" && "text-xl",
              variant === "light" ? "text-white" : "text-primary"
            )}
          >
            {t("name")}{" "}
            <span className="text-secondary">{t("tagline")}</span>
          </span>
        </div>
      )}
    </div>
  );
}
