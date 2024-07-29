import { Outlet } from "react-router-dom";
import Header from "../pages/Exercise/Header";


export default function RootLayout() {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    );
}