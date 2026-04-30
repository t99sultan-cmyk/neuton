import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return <Tag className={cn("container-app", className)}>{children}</Tag>;
}
