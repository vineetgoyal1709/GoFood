// import React from 'react'

//  import { useCart, useDispatchCart } from '../components/ContextReducer';
// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }
  

//   const handleCheckOut = async () => {
//      let userEmail = localStorage.getItem("userEmail");
//      console.log("User Email:", localStorage.getItem("userEmail"));
//     // console.log(data,localStorage.getItem("userEmail"),new Date())
//      let response = await fetch("http://localhost:5000/api/orderData",{
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: 'POST',
//      headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       })
//      });
//     console.log("JSON RESPONSE:::::", response.status)
//     if (response.status === 200) {
//       dispatch({ type: "DROP" })
//     }
//   }

//   let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div>

      
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col' >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Quantity</th>
//               <th scope='col' >Option</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                <td >
//                  <i
//     className="bi bi-trash fs-5 text-danger"
//     style={{ cursor: "pointer" }}
//     onClick={() => dispatch({ type: "REMOVE", index })}
//   ></i>
//                 </td>
//               </tr>  
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 '  onClick={handleCheckOut}> Check Out </button>
//         </div>
//       </div>



//     </div>
//   )
// }

import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {

  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="container text-center py-5">
        <h1 className="display-4">🛒</h1>
        <h3 className="text-muted mt-3">
          Your Cart is Empty
        </h3>
        <p className="text-secondary">
          Add some delicious food to get started.
        </p>
      </div>
    );
  }

  const handleCheckOut = async () => {

    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch(
      "http://localhost:5000/api/orderData",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date()
        })
      }
    );

    if (response.status === 200) {
      dispatch({ type: "DROP" });
      alert("✅ Order Placed Successfully!");
    }
  };

  let totalPrice = data.reduce(
    (total, food) => total + food.price,
    0
  );

  return (
    <div className="container py-4">

      <h2 className="text-center text-success fw-bold mb-4">
        🛒 My Cart
      </h2>

      <div className="card shadow border-0">

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-success">

                <tr>
                  <th>#</th>
                  <th>Food Item</th>
                  <th>Qty</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {data.map((food, index) => (

                  <tr key={index}>

                    <th>{index + 1}</th>

                    <td className="fw-semibold">
                      {food.name}
                    </td>

                    <td>{food.qty}</td>

                    <td>
                      <span className="badge bg-secondary">
                        {food.size}
                      </span>
                    </td>

                    <td className="fw-bold text-success">
                      ₹{food.price}
                    </td>

                    <td>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE",
                            index
                          })
                        }
                      >
                        <i className="bi bi-trash"></i>
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      <div className="card shadow-sm border-0 mt-4">

        <div className="card-body d-flex justify-content-between align-items-center flex-wrap">

          <h3 className="text-success fw-bold m-0">
            Total: ₹{totalPrice}/-
          </h3>

          <button
            className="btn btn-success btn-lg"
            onClick={handleCheckOut}
          >
            Checkout 🚀
          </button>

        </div>

      </div>

    </div>
  );
}
