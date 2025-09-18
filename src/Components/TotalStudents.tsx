
type StudentAttendance = {
    student: string;
    roll: number;
    classPresence: number;
    totalAttendance: number;
};

const sampleData: StudentAttendance[] = [
    { student: "Harshit", roll: 1, classPresence: 18, totalAttendance: 20 },
    { student: "Amit", roll: 2, classPresence: 15, totalAttendance: 20 },
    { student: "Priya", roll: 3, classPresence: 20, totalAttendance: 20 },
];

export function StudentAttendanceTable() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-4 py-2 border">Student</th>
                        <th className="px-4 py-2 border">Roll</th>
                        <th className="px-4 py-2 border">Class Presence</th>
                        <th className="px-4 py-2 border">Total Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleData.map((row, idx) => (
                        <tr key={idx} className="text-center">
                            <td className="px-4 py-2 border">{row.student}</td>
                            <td className="px-4 py-2 border">{row.roll}</td>
                            <td className="px-4 py-2 border">{row.classPresence}</td>
                            <td className="px-4 py-2 border">{row.totalAttendance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}