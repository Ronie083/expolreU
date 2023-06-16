import { useQuery } from "@tanstack/react-query";
import { BsPersonSquare, BsPersonVideo3 } from "react-icons/bs";
import { toast } from "react-toastify";



const ManageUser = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://explore-u-summer-camp-server.vercel.app/users')
        return res.json();
    })

    const handleAdminMaker = user => {
        fetch(`https://explore-u-summer-camp-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast(`From today ${user.name} is also Admin`)
                }
            })
    }

    const handleInstructorMaker = user => {
        fetch(`https://explore-u-summer-camp-server.vercel.app/users/${user._id}`, {
          method: 'PATCH',
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              refetch();
              toast(`From today ${user.name} is also an Instructor`);
            }
          });
      };
      

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Sign as Admin</th>
                        <th>Sign as Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <th>
                                {
                                    user.role === 'admin' ? 'admin' : <button onClick={() => handleAdminMaker(user)} className="btn btn-ghost btn-lg"><BsPersonSquare></BsPersonSquare></button>
                                }
                            </th>
                            <th>
                                {
                                    user.role === 'instructor' ? 'instructor' : <button onClick={() => handleInstructorMaker(user)} className="btn btn-ghost btn-lg"><BsPersonVideo3></BsPersonVideo3></button>
                                }
                            </th>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ManageUser;