import React, { useEffect, useState } from 'react'
import axios from "axios"
const Product = () => {

const [data, setData]=useState([])
const [data1, setData1]=useState([])

function getData(){
    axios.get("https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json")
         .then((res)=>setData(res.data.products))
        // .then((res) => {
        //     var arrListdata = [];
        //     for (let key in res.data.products) {
        //       arrListdata.push({ key });
        //     }
        //     setData(arrListdata);
        //   })
         .catch((err)=>console.log(err))
}

useEffect(()=>{
    getData() 
},[])
let A=Object.values(data)
console.log("A",A[0])
// setData1(A)
//console.log(Object.values(object1));
console.log("Data",Object.values(data))
  return (
    <div>
      <div className='main'>
        <table border={1}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Subcategory</th>
                    <th>Price</th>
                    <th>Popularity</th>

                </tr>
            </thead>

<tbody>
    {
        A.map((e) =>(
            <tr >
            <td>{e.title}</td>
            <td>{e.subcategory}</td>
            <td>{e.price}</td>
            <td>{e.popularity}</td>
            </tr>
        ))
    }
</tbody>



        </table>
      </div>
    </div>
  )
}

export default Product
