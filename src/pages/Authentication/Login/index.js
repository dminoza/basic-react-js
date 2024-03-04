import { Button, FloatingLabel } from "flowbite-react";
import BaseTheme from "../../../components/BaseTheme";

export default function Login() {

    return (
        <BaseTheme center={true}>
            <form>
                <div className="flex flex-col gap-2">
                    <FloatingLabel variant="outlined" label="Email" />
                    <FloatingLabel variant="outlined" label="Password" type="password" />
                    <Button>Login</Button>
                </div>
            </form>
        </BaseTheme>
    )
}