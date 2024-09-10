import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Imagify",
  description: "Ai powered image transformation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
