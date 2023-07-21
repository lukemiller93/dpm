import { PropsWithChildren, ReactNode } from "react";

export default function StudioLayout({ children }:{children: ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin: 0, minHeight:`100dvh` }}>
        <div className="bg-red-400">{children}</div>
      </body>
    </html>
  );
}
