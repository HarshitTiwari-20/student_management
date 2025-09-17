import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Firstpage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-92 min-h-60 p-8">
            <div className="text-2xl font-bold text-center">
                Select Your Role
            </div>
            <div className="flex justify-center pt-4"></div>
            <div className="flex justify-center pt-4">
                <Button onClick={() => navigate("/signin")} loading={false} variant="primary" text="Student" fullWidth={true} />
            </div>
            <div className="flex justify-center pt-4">
                <Button onClick={() => navigate("/signin")} loading={false} variant="primary" text="Teacher" fullWidth={true} />
            </div>
        </div>
        </div>
    );
}