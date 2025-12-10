import { DashboardHeader } from '@/components/ui/dashboard-header';
import { DashboardSidebar } from '@/components/ui/dashboard-sidebar';
// import { AuthProvider } from '@/contexts/AuthContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {/* <DashboardSidebar /> */}
        <div className="">
          <DashboardHeader />
          <main className="py-8">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    // </AuthProvider>
  );
}