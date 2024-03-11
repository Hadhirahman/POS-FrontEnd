import { Card, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import instance from "../../api/axios";

const Stafflist = () => {
    const navigate = useNavigate();
    const [staffList, setStaffList] = useState([]);

    const handleDelete = async (index) => {
        try {
            await instance.delete(`/deletestaff/${staffList[index]._id}`);
            const updatedStaffList = [...staffList];
            updatedStaffList.splice(index, 1);
            setStaffList(updatedStaffList);
        } catch (error) {
            console.error('Error deleting staff member:', error);
        }
    };

    const handleAddProfile = () => {
        navigate("/owner/staffdetaies");
    };

    const handleEdit = (id) => {
        navigate(`/owner/staffdetaies/${id}`);
    };

    useEffect(() => {
        const fetchStaffList = async () => {
            try {
                const response = await instance.get('/addstaff');
                setStaffList(response.data);
            } catch (error) {
                console.error('Error fetching staff list:', error);
            }
        };
        fetchStaffList();
    }, []);

    return (
        <div className="bg-black text-white min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex justify-center w-7/12 md:w-7/12 rounded-lg">
            {staffList.length > 0 ? (
            
                    <Card className="w-full overflow-scroll bg-gray-900">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="border-b border-gray-700 bg-gray-800 p-4">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Name
                                        </Typography>
                                    </th>
                                    <th className="border-b border-gray-700 bg-gray-800 p-4">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Job
                                        </Typography>
                                    </th>
                                    <th className="border-b border-gray-700 bg-gray-800 p-4">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Employed
                                        </Typography>
                                    </th>
                                    <th className="border-b border-gray-700 bg-gray-800 p-4">
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Actions
                                        </Typography>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffList.map(({ _id, fullName, position, joiningDate }, index) => (
                                    <tr key={_id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                                        <td className="p-4">
                                            <Typography variant="small" color="white" className="font-normal">
                                                {fullName}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="white" className="font-normal">
                                                {position}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="white" className="font-normal">
                                                {joiningDate}
                                            </Typography>
                                        </td>
                                        <td className="p-4 space-x-2">
                                            <Button
                                                color="red"
                                                buttonType="filled"
                                                size="regular"
                                                onClick={() => handleDelete(index)}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                color="blue"
                                                buttonType="filled"
                                                size="regular"
                                                onClick={() => handleEdit(_id)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                color="green"
                                                buttonType="filled"
                                                size="regular"
                                            >
                                                View Full Details
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-4">
                            <Button
                                color="green"
                                buttonType="filled"
                                size="regular"
                                onClick={handleAddProfile}
                            >
                                Add Profile
                            </Button>
                        </div>
                    </Card>
             
            ) : (
                <div className="text-center">
                    <Typography variant="heading3" color="white">No staff members found</Typography>
                </div>
            )}
        </div>
    );
};

export default Stafflist;
