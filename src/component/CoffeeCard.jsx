import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        // console.log(_id)
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

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })
    }

    return (
        <div className="card w-auto card-side bg-base-100 shadow-xl p-4 my-10">

            <div className="flex justify-between w-full gap-5">
                <figure>
                    <img src={photo} className="rounded-xl w-48" />
                </figure>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>taste: {taste}</p>
                    <p>Category: {category}</p>
                    {/* <p>details: {details}</p> */}
                </div>

                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical gap-4">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffee/${_id}`}> <button className="btn">Edit</button></Link>
                       
                        <button
                            onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCard;