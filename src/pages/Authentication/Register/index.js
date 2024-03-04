import { Button, FloatingLabel } from "flowbite-react";
import BaseTheme from "../../../components/BaseTheme";
import { useDispatch, useSelector } from "react-redux";
import { storeUser } from "../authSlice";
import { useState } from "react";

export default function Register() {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })

    return (
        <BaseTheme center={true}>
            <div className="flex flex-col gap-2">
                <FloatingLabel variant="outlined" label="First Name" />
                <FloatingLabel variant="outlined" label="Last name" />
                <FloatingLabel variant="outlined" label="Email" />
                <Button>Register</Button>
            </div>
        </BaseTheme>
    )
}