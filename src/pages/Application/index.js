import { Outlet } from "react-router-dom";
import BaseTheme from "../../components/BaseTheme";
import SideBarTheme from "./component/SideBarTheme";

export default function Application() {
    return (
        <BaseTheme>
            <SideBarTheme />
            <div className="h-full w-full p-5">
                <Outlet />
            </div>
        </BaseTheme>
    )
}