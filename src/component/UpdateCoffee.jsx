import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
    const coffee =useLoaderData();
    const  {id, name, quantity, supplier, taste, category, details, photo } =coffee;

    const handleUpdateCoffee= event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        //send data to the server
        fetch(`http://localhost:5000/coffee${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Coffee Updated!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
              
            }
        })
    }


    return (
        <div className='bg-[#F4F3F0] p-24 container mx-auto'>
        <h2 className='text-5xl mb-10 text-center'>Update coffee {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
            {/* form name row */}
            <div className='md:flex mb-8'>
                <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                        <span className="label-text">Coffee name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={name} placeholder="Coffee Name"
                            name="name"
                            className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text"  placeholder="Available Quantity"
                            name="quantity" defaultValue={quantity}
                            className="input input-bordered w-full" required/>
                    </label>
                </div>

            </div>
            {/* form supplier row */}
            <div className='md:flex mb-8'>
                <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Supplier Name"
                            name="supplier" defaultValue={supplier}
                            className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Taste"
                            name="taste" defaultValue={taste}
                            className="input input-bordered w-full" required/>
                    </label>
                </div>

            </div>
            {/* form supplier row */}
            <div className='md:flex mb-8'>
                <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Category"
                            name="category" defaultValue={category}
                            className="input input-bordered w-full" required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Details"
                            name="details" defaultValue={details}
                            className="input input-bordered w-full" required/>
                    </label>
                </div>

            </div>
            {/* form category row */}
            <div className='mb-8 mx-4'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo URL"
                            name="photo" defaultValue={photo}
                            className="input input-bordered w-full" required/>
                    </label>
                </div>


            </div>

            <div className="mb-8 mx-4"> <input type="submit" className="btn  bg-slate-600 text-white btn-block " value="Update" /></div>

        </form>
    </div>
    );
};

export default UpdateCoffee;