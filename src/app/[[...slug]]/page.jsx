import { notFound } from "next/navigation";
import ClientRoutedPage from "./ClientRoutedPage";
import { routePaths } from "../routePaths";

export default async function RoutedPage({ params }) {
  const { slug = [] } = await params;
  const pathname = slug.length ? `/${slug.join("/")}` : "/";

  if (!routePaths.has(pathname)) {
    notFound();
  }

  return <ClientRoutedPage pathname={pathname} />;
}
