// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {

//     const [orderData, setorderData] = useState({});

//     const fetchMyOrder = async () => {
//         await fetch("http://localhost:5000/api/myOrderData", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: localStorage.getItem('userEmail')
//             })
//         }).then(async (res) => {
//             let response = await res.json();
//             setorderData(response);
//         });
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     return (
//         <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>

//             <Navbar />

//             <div className="container py-4">

//                 <h1
//                     className="text-center mb-5 fw-bold text-success"
//                     style={{ letterSpacing: "1px" }}
//                 >
//                     🍽️ My Orders
//                 </h1>

//                 <div className="row">

//                     {orderData !== {} ?
//                         Array(orderData).map((data) => {

//                             return (
//                                 data.orderData ?

//                                     data.orderData.order_data
//                                         .slice(0)
//                                         .reverse()
//                                         .map((item, index) => {

//                                             return (

//                                                 <React.Fragment key={index}>

//                                                     {item.map((arrayData, i) => {

//                                                         if (arrayData.Order_date) {
//                                                             return (
//                                                                 <div
//                                                                     key={i}
//                                                                     className="col-12 mt-4"
//                                                                 >
//                                                                     <div
//                                                                         className="bg-success text-white p-3 rounded shadow"
//                                                                         style={{
//                                                                             fontSize: "1.1rem",
//                                                                             fontWeight: "600"
//                                                                         }}
//                                                                     >
//                                                                         <span>
//                                                                             📅{" "}
//                                                                             {new Date(
//                                                                                 arrayData.Order_date
//                                                                             ).toLocaleDateString(
//                                                                                 "en-GB",
//                                                                                 {
//                                                                                     day: "numeric",
//                                                                                     month: "long",
//                                                                                     year: "numeric"
//                                                                                 }
//                                                                             )}
//                                                                         </span>

//                                                                         <span className="mx-4">
//                                                                             |
//                                                                         </span>

//                                                                         <span>
//                                                                             🕒{" "}
//                                                                             {new Date(
//                                                                                 arrayData.Order_date
//                                                                             ).toLocaleTimeString(
//                                                                                 "en-US",
//                                                                                 {
//                                                                                     hour: "numeric",
//                                                                                     minute: "2-digit",
//                                                                                     hour12: true
//                                                                                 }
//                                                                             )}
//                                                                         </span>
//                                                                     </div>

//                                                                     <hr className="border-success border-2" />
//                                                                 </div>
//                                                             );
//                                                         }

//                                                         return (
//                                                             <div
//                                                                 key={i}
//                                                                 className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
//                                                             >
//                                                                 <div
//                                                                     className="card h-100 shadow-sm border-0"
//                                                                     style={{
//                                                                         borderRadius: "15px",
//                                                                         overflow: "hidden"
//                                                                     }}
//                                                                 >
//                                                                     <img
//                                                                         src={arrayData.img}
//                                                                         className="card-img-top"
//                                                                         alt={arrayData.name}
//                                                                         style={{
//                                                                             height: "180px",
//                                                                             objectFit: "cover"
//                                                                         }}
//                                                                     />

//                                                                     <div className="card-body">

//                                                                         <h5 className="card-title fw-bold">
//                                                                             {arrayData.name}
//                                                                         </h5>

//                                                                         <div className="mb-3">

//                                                                             <span className="badge bg-success me-2">
//                                                                                 Qty: {arrayData.qty}
//                                                                             </span>

//                                                                             <span className="badge bg-secondary">
//                                                                                 {arrayData.size}
//                                                                             </span>

//                                                                         </div>

//                                                                         <h5 className="text-success fw-bold">
//                                                                             ₹{arrayData.price}/-
//                                                                         </h5>

//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         );
//                                                     })}

//                                                 </React.Fragment>
//                                             );
//                                         })

//                                     : ""
//                             );
//                         })

//                         : ""}

//                 </div>

//             </div>

//             <Footer />

//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({});

    const fetchMyOrder = async () => {
        await fetch("http://localhost:5000/api/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            setorderData(response);
        });
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#121212",
                color: "white"
            }}
        >
            <Navbar />

            <div className="container py-5">

                <h1
                    className="text-center text-success fw-bold mb-5"
                    style={{
                        letterSpacing: "2px",
                        textTransform: "uppercase"
                    }}
                >
                    🍽️ My Orders
                </h1>

                <div className="row">

                    {orderData !== {} ?

                        Array(orderData).map((data) => {

                            return (
                                data.orderData ?

                                    data.orderData.order_data
                                        .slice(0)
                                        .reverse()
                                        .map((item, index) => {

                                            return (

                                                <React.Fragment key={index}>

                                                    {item.map((arrayData, i) => {

                                                        if (arrayData.Order_date) {
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className="col-12 mt-4 mb-3"
                                                                >
                                                                    <div
                                                                        className="bg-success text-white p-3 rounded shadow-lg"
                                                                        style={{
                                                                            fontSize: "1.1rem",
                                                                            fontWeight: "600"
                                                                        }}
                                                                    >
                                                                        📅{" "}
                                                                        {new Date(
                                                                            arrayData.Order_date
                                                                        ).toLocaleDateString(
                                                                            "en-GB",
                                                                            {
                                                                                day: "numeric",
                                                                                month: "long",
                                                                                year: "numeric"
                                                                            }
                                                                        )}

                                                                        <span className="mx-4">
                                                                            |
                                                                        </span>

                                                                        🕒{" "}
                                                                        {new Date(
                                                                            arrayData.Order_date
                                                                        ).toLocaleTimeString(
                                                                            "en-US",
                                                                            {
                                                                                hour: "numeric",
                                                                                minute: "2-digit",
                                                                                hour12: true
                                                                            }
                                                                        )}
                                                                    </div>

                                                                    <hr className="border-success border-2" />
                                                                </div>
                                                            );
                                                        }

                                                        return (
                                                            <div
                                                                key={i}
                                                                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                                                            >
                                                                <div
                                                                    className="card h-100 shadow border-success"
                                                                    style={{
                                                                        borderRadius: "15px",
                                                                        overflow: "hidden",
                                                                        backgroundColor: "#1e1e1e",
                                                                        color: "white"
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={arrayData.img}
                                                                        className="card-img-top"
                                                                        alt={arrayData.name}
                                                                        style={{
                                                                            height: "180px",
                                                                            objectFit: "cover"
                                                                        }}
                                                                    />

                                                                    <div className="card-body">

                                                                        <h5 className="card-title fw-bold text-white">
                                                                            {arrayData.name}
                                                                        </h5>

                                                                        <div className="mb-3">

                                                                            <span className="badge bg-success me-2">
                                                                                Qty: {arrayData.qty}
                                                                            </span>

                                                                            <span className="badge bg-secondary">
                                                                                {arrayData.size}
                                                                            </span>

                                                                        </div>

                                                                        <h5 className="text-success fw-bold">
                                                                            ₹{arrayData.price}/-
                                                                        </h5>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}

                                                </React.Fragment>
                                            );
                                        })

                                    : ""
                            );
                        })

                        : ""}

                </div>
            </div>

            <Footer />
        </div>
    );
}