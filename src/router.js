import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Application from "./pages/Application";
import Dashboard from "./pages/Application/Dashboard";
import Kanban from "./pages/Application/Kanban";
import Inbox from "./pages/Application/Inbox";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />

    },
    {
       path: '/register',
       element: <Register /> 
    },
    {
        path: '/app/',
        element: <Application />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'kanban/',
                element: <Kanban />
            },
            {
                path: 'inbox/',
                element: <Inbox />
            }
        ]

    }
])

export default router