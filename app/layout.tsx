import "./globals.css";

export const metadata = {
  title: "Shreya — Portfolio",
  description: "CS & Web Developer | AR | CV | ML Researcher",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}
