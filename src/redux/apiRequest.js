import AxiosInstance from "./AxiosIntance";
import Swal from 'sweetalert2';
import {
    errorMsg,
    getAll,
    getSupply,
    getBolt,
    getPrice
} from './reducers/supply';

import {
    loginAction,
    getUser,
    logoutAction,
    errorMessage
} from './reducers/user';

import {
    All_Customers,
    getReport,
    getReportError
} from './reducers/report'

export const loginUser = async (user, dispatch, navigate) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });  
    try {
        const res = await AxiosInstance.post(`/api/v1/login`, user);      
        localStorage.setItem('token', res.data.token);
        dispatch(loginAction());
        navigate('/');
    } catch (error) {
        dispatch(errorMessage(error.response.data.message));
        Toast.fire({
            icon: 'error',
            title: error.response.data.message
        });
    }
}

export const getProfile = async (username, dispatch) => {
    try {
        const res = await AxiosInstance.get(`/profiles/${username}` );
        dispatch(getUser(res.data));
    } catch (error) {
        dispatch(getUser(null));
    }
}

export const logoutUser = async (dispatch, navigate) => {
    try {
        
        localStorage.clear();
        dispatch(logoutAction());
        navigate('/login');
    } catch (error) {
        dispatch(errorMessage("Error"));
    }
}

export const createSupplier = async(data, dispatch, isCreate)=>{
    try{
        await AxiosInstance.post('api/v1/create-suppliers', data);
        Swal.fire({
            icon: 'success',
            title: 'Create Successfully...',
          })
        dispatch(errorMsg(null));
        isCreate(false);
    } catch(error){
        dispatch(errorMsg('error'));
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const createSupplierPartner = async (dispatch) => {

}

export const getALlSupplier = async (dispatch) => {
    await AxiosInstance.get(`/api/v1/supplier`).then((res)=>{
        dispatch(getAll(res.data.data));
    }).catch((error)=>{
        dispatch(errorMsg('Error'));
    });
}

export const getSupplier = async (id, dispatch) => {
    // get info
    await AxiosInstance.get(`/api/v1/supplier/${id}`).then((res)=>{
        dispatch(getSupply(res.data.data));
        dispatch(errorMsg(undefined));
    }).catch((error)=>{
        dispatch(getSupply(null));
        dispatch(errorMsg());
    }); 
}

export const getAllBolt = async (name, sourcecode, dispatch) =>{
    AxiosInstance.get(`/api/v1/supplier/bolt?name=${name}&source_code=${sourcecode}`)
    .then((res)=>{
        dispatch(getBolt(res.data.data))
    }).catch((error)=>{
        dispatch(errorMsg())
    })
}

export const getAllPrice = async (name, sourcecode, dispatch) =>{
    await AxiosInstance.get(`/api/v1/supplier/current-price?name=${name}&source_code=${sourcecode}`)
    .then((res)=>{
        dispatch(getPrice(res.data.data));
    }).catch((error)=>{
        dispatch(errorMsg())
    })
}

export const getAllCustomers = async (dispatch) => {
    await AxiosInstance.get(`/api/v1/customers`).then((res)=>{
        dispatch(All_Customers(res.data.data));
    }).catch((error)=>{
        dispatch(getReportError());
    })
}

export const getCustomer = async (id, dispatch) => {
    await AxiosInstance.get(`/api/v1/report?id=${id}`).then((res)=>{
        dispatch(getReport(res.data.data));
    }).catch((error)=>{
        dispatch(getReportError());
    })
}