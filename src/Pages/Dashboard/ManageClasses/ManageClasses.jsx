import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageClasses = () => {


    const { data: newClasses = [], refetch } = useQuery(['newClasses'], async () => {
        const res = await fetch('http://localhost:5000/newCourse');
        return res.json();
    });

    const handleApprove = (newClass) => {
        fetch(`http://localhost:5000/newCourse/${newClass._id}/approve`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast('Class Approved');
                    refetch();
                }
            });
    };

    const handleDeny = (newClass) => {
        fetch(`http://localhost:5000/newCourse/${newClass._id}/deny`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast('Class Denied');
                    refetch();
                }
            });
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Overview</th>
                        <th>Course Name</th>
                        <th>Instructor&apos;s Info</th>
                        <th>Price</th>
                        <th>State</th>
                        <th>Confirm Class</th>
                        <th>Deny Class</th>
                        <th>Send Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {newClasses.map(newClass => (
                        <tr key={newClass._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={newClass.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Available Seats: {newClass.availableSeat}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{newClass.course}</td>
                            <td>
                                {newClass.newCourse}
                                <br />
                                <span className="badge badge-ghost badge-sm">{newClass.email}</span>
                            </td>
                            <td>$ {newClass.price}</td>
                            <td>{newClass.courseStatus}</td>
                            <th>
                                <button
                                    onClick={() => handleApprove(newClass)}
                                    className="btn btn-ghost btn-xs"
                                    disabled={newClass.courseStatus === 'Denied'}
                                >
                                    Approve
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => handleDeny(newClass)}
                                    className="btn btn-ghost btn-xs"
                                    disabled={newClass.courseStatus === 'Approved'}
                                >
                                    Deny
                                </button>
                            </th>
                            <th>
                                <Link
                                    to={`/dashboard/feedback/${newClass._id}`}
                                    state={{newClass}}
                                    className="btn btn-ghost btn-xs"
                                    disabled={newClass.courseStatus === 'Approved'}
                                >
                                    Feedback
                                </Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;
