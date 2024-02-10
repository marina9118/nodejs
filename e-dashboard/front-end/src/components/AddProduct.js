import React from 'react';
import {useNavigate} from 'react-router-dom';

const AddProduct=()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    // const [userId,setUserId] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState(false);
    const auth = localStorage.getItem('user');
    const userId = JSON.parse(auth)._id;
    const navigate = useNavigate();

    const addProduct =async () =>{
        if(name=='' || price=='' || category=='' || userId=='' || company==''){
            // console.warn(name);
            setError(true);
            return false;
        }
        // console.log(name,price,category,userId,company);
        let result = await fetch('http://localhost:5000/add-product',{
            method:"POST",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'content-type' : 'Application/json'
            }
        });

        result = await result.json();
        if(result){
            
            // console.log("Product added successfully");
        }
    }
    return (<div className='productForm'>
        <p id="alert_msg"></p>
        <h3>Add Product</h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Proudct Name'/>
        {error && !name && <span className='error'>Invalid Name</span>}
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Proudct Price'/>
        {error && !price && <span className='error'>Invalid Price</span>}
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Proudct Category'/>
        {error && !category && <span className='error'>Invalid Category Name</span>}
        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Proudct Campany'/>
        {error && !company && <span className='error'>Invalid Company Name</span>}
        <br></br><button onClick={addProduct}>Add</button>
    </div>)
}

export default AddProduct