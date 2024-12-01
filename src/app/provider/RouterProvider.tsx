import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage, MusicRecognition} from "../../pages";
import {MainLayout} from "../../shared/layouts";

export function BrowserRouter() {
    return <RouterProvider router={browserRouter}/>
}

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/music-recognition',
                element: <MusicRecognition/>
            }
        ]
    }
])