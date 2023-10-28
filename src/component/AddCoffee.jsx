import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset()
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl text-center'>Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name"
                                name="name"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity"
                                name="quantity"
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
                                name="supplier"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Taste"
                                name="taste"
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
                                name="category"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Details"
                                name="details"
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
                                name="photo"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>


                </div>

                <div className="mb-8 mx-4"> <input type="submit" className="btn  bg-slate-600 text-white btn-block " value="Add" /></div>

            </form>
        </div>
    );
};

export default AddCoffee;