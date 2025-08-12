"use client";

interface NeoButtonProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function NeoButton({
  children,
  className = "",
  active = false,
  onClick,
  type = "button",
}: NeoButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "inline-flex items-center justify-center " +
        "px-5 py-2.5 rounded-xl " +
        "bg-[#31343a] " +
        "text-white font-semibold tracking-wide " +
        "border border-[#23252c] " +
        "shadow-[0_0_18px_#7be8ff66,4px_4px_14px_#23252c,-4px_-4px_10px_#484c56] " +
        "transition-transform duration-150 hover:scale-[1.03] " +
        (active
          ? "border-[#7be8ff] shadow-[0_0_10px_#7be8ff,0_0_20px_#7be8ffcc] "
          : "") +
        className
      }
    >
      {children}
    </button>
  );
}
