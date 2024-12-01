import {Outlet} from "react-router-dom";
import './main-layout.css'

export const MainLayout = () => {
    return (
        <div className={'main-layout'}>
            <header className={'main-header'}>
                <h1>
                    Music Recognition
                </h1>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}