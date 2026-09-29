import "../../index.css";

import { ClientOnly } from "./client";

export function generateStaticParams(): Array<{ slug: string[] }> {
  return [{ slug: [""] }];
}

export default function Page(): React.JSX.Element {
  return <ClientOnly />;
}
