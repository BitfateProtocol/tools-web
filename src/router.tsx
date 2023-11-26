import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import HowTo from "./pages/HowTo.tsx";
import TokenLocker from "./pages/TokenLocker.tsx";
import LockToken from "./pages/LockToken.tsx";
import TokenLockerDetails from "./pages/TokenLockerDetails.tsx";
import TokenLockerRecord from "./pages/TokenLockerRecord.tsx";
import TokenLockerForUser from "./pages/TokenLockerForUser.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "token-locker",
        element: <TokenLocker />,
      },
      {
        path: "token-locker/lock",
        element: <LockToken />,
      },
      {
        path: "token-locker/my",
        element: <TokenLockerForUser />,
      },
      {
        path: "token-locker/details/:address",
        element: <TokenLockerDetails />,
      },
      {
        path: "token-locker/record/:lockId",
        element: <TokenLockerRecord />,
      },
      {
        path: "how-to",
        element: <HowTo />,
      },
    ],
  },
]);
