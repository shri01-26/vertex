import Link from "next/link";

export default function AppLink({ to, href, children, ...props }) {
  return (
    <Link href={href ?? to ?? "/"} {...props}>
      {children}
    </Link>
  );
}
