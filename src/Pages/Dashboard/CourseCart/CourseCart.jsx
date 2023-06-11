import Swal from "sweetalert2";
import useEnrollCart from "../../../Hooks/useEnrollCart";


const CourseCart = () => {

    const [coursesCart, refetch] = useEnrollCart();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/enrolledCart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    });
            }
        })
    };
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Overview</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Confirm</th>
                        <th>Remove from Curt</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coursesCart.map(coursCart =>
                            <tr key={coursCart._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={coursCart.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Number Of Students: {coursCart.numberOfStudents}</div>
                                            <div className="font-bold">Available Seats: {coursCart.availableSeats}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{coursCart.name}</td>
                                <td>{coursCart.instructor}</td>
                                <td>$ {coursCart.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Pay</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(coursCart._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CourseCart;