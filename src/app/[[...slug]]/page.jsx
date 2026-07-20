import { notFound } from "next/navigation";
import ClientRoutedPage from "./ClientRoutedPage";
import { routePaths } from "../routePaths";
import LandingPage from "../landing/page";

export default async function RoutedPage({ params }) {
  const { slug = [] } = await params;
  const pathname = slug.length ? `/${slug.join("/")}` : "/";

  if (pathname === "/") {
    return <LandingPage />;
  }

  if (!routePaths.has(pathname)) {
    notFound();
  }

  return <ClientRoutedPage pathname={pathname} />;
}
