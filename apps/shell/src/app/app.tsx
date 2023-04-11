import * as React from "react";

import NxWelcome from "./nx-welcome";

import { Link, Route, Routes } from "react-router-dom";

const Account = React.lazy(() => import("account/Module"));

const Card = React.lazy(() => import("card/Module"));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/account">Account</Link>
        </li>

        <li>
          <Link to="/card">Card</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/account" element={<Account />} />

        <Route path="/card" element={<Card />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
