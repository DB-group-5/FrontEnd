import React, { Component, lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const Home = lazy(()=>
    import('../pages/Home')
);

const Login = lazy(()=>
    import('../pages/Login')
);

const Report = lazy(()=>
   import('../pages/Report') 
);

const Profile = lazy(()=>
    import('../pages/Profile')
);

const Supplier = lazy(()=>
    import('../pages/Supplier')
);

const DetailSupplier = lazy(()=>
    import('../pages/Supplier/Detail')
);

const AddSupplier = lazy(()=>
    import('../pages/Supplier/AddSupply.js')
);

class RouterDom extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" exact element={<Home></Home>} />
                        <Route path="/login" exact element={<Login></Login>} />
                        <Route path="/report" exact element={<Report></Report>} />
                        <Route path="/profile" exact element={<Profile></Profile>} />
                        <Route path="/supplier" exact element={<Supplier></Supplier>} />
                        <Route path="/supplier/addnew" exact element={<AddSupplier></AddSupplier>} />
                        <Route path="/supplier/:supplier" exact element={<DetailSupplier></DetailSupplier>} />
                    </Routes>
                </Suspense>
            </>
        );
    }
}

export default RouterDom;