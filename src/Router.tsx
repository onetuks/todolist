import { createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RecoilRoot><App /></RecoilRoot>,
    }
]);
export default Router;