import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      <Outlet />
    </div>
  );
}
