import Navbar from "@/components/navbar/Navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
