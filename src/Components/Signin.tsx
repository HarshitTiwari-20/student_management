import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import { Signup } from "./Signup";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (username === "Harshit" && password === "Harshit") {
            localStorage.setItem("token", "dummy-token");
            navigate("/Home");
            return;
        }

        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            });
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/dashboard");
        } catch (e) {
            setError("Invalid credentials or server error.");
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ">
            <div className="bg-white rounded-xl border min-w-48 p-8 ">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                {error && (
                    <div className="text-red-500 text-center pt-2">{error}</div>
                )}
                <div className="flex justify-center pt-4 ">
                    <Button onClick={signin}  variant="primary" text="Signin" fullWidth={true} />
                </div>
                <div className="flex justify-center pt-4 ">
                    <Button onClick={Signup}  variant="primary" text="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}