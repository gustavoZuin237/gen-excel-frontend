import { Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";

import { RootLayout } from "@components/RootLayout";
import { Dashboard } from "@pages/Dashboard";
import { Master } from "@pages/Master";
import { Search } from "@pages/Search";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/master" element={<Master />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}
