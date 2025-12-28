import DashboardHeader from "@/components/ui/dashboard";

export default function DashboardHeaderLayout(props) {
  return (
    <div className="  w-full min-h-screen mt-12 py-6 bg-gradient-to-br from-gray-900 to-gray-700 space-y-4">
      <DashboardHeader />
      {props.children}
    </div>
  );
}
