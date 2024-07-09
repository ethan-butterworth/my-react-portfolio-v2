import "./globals.css";

export const metadata = {
  title: "Ethan Butterworth | Portfolio",
  description: "Welcome to my Portfolio Website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
