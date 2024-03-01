import { Card, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import instance from "../../api/axios";

const Stafflist = () => {
    const navigate=useNavigate()
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
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching staff list:', error);
            }
        };

        fetchStaffList();
    }, []);

    return (
        <div className="justify-center bg-white w-7/12 rounded-lg p-4">
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Name
                                </Typography>
                            </th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Job
                                </Typography>
                            </th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Employed
                                </Typography>
                            </th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    Actions
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.map(({ _id, fullName, position, joiningDate }, index) => (
                            <tr key={_id} className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {fullName}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {position}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
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
                                        onClick={()=>handleEdit(_id)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        className="bg-slate-500"
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
        </div>
    );
};

export default Stafflist;
