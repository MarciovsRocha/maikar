// src/components/Layout.js
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <div style={{ padding: 24 }}>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
