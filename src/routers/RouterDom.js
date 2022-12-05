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

const DetailReport = lazy(()=>
    import('../pages/Report/DetailReport')
);

class RouterDom extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" exact element={<Home></Home>} />
                        <Route path="/login" element={<Login></Login>} />
                        <Route path="/report" element={<Report></Report>} />
                        <Route path="/profile" element={<Profile></Profile>} />
                        <Route path="/supplier" element={<Supplier></Supplier>} />
                        <Route path="/supplier/:id" element={<DetailSupplier></DetailSupplier>} />
                        <Route path="/report/:id" element={<DetailReport></DetailReport>} />
                    </Routes>
                </Suspense>
            </>
        );
    }
}

export default RouterDom;