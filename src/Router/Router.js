const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../pages/Login/Login");
const { default: SignUp } = require("../pages/SignUp/SignUp");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
]);

