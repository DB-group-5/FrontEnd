import AxiosInstance from "./AxiosIntance";
import Swal from 'sweetalert2';
import {
    errorMsg,
    getAll,
    getSupply,
    getBolt,
    getPrice
} from './reducers/supply';

export const createSupplier = async(data, dispatch)=>{
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

    try{
        await AxiosInstance.post('/create-suppliers', data);
        Toast.fire({
            icon: 'success',
            title: 'Create successfully'
        });
        dispatch(errorMsg(null));
    } catch(error){
        dispatch(errorMsg(error.response.data[0].message));
        Toast.fire({
            icon: 'error',
            // title: error.response.data[0].message
            title: 'Something wrongs!'
        });
    }
}

export const getALlSupplier = async (dispatch) => {
    AxiosInstance.get(`/supplier`).then((res)=>{
        dispatch(getAll(res.data.data));
    }).catch((error)=>{
        dispatch(errorMsg(error.response.data.message));
    });
}

export const getSupplier = async (id, dispatch) => {
    // get info
    AxiosInstance.get(`/supplier/${id}`).then((res)=>{
        dispatch(getSupply(res.data.data));
        dispatch(errorMsg(undefined));
    }).catch((error)=>{
        dispatch(getSupply(null));
        dispatch(errorMsg(error.response.data.message));
    }); 
}

export const getAllBolt = async (name, sourcecode, dispatch) =>{
    AxiosInstance.get(`/supplier/bolt?name=${name}&source_code=${sourcecode}`)
    .then((res)=>{
        dispatch(getBolt(res.data.data))
    }).catch((error)=>{
        dispatch(errorMsg(error.response.data.message))
    })
}

export const getAllPrice = async (name, sourcecode, dispatch) =>{
    AxiosInstance.get(`/supplier/current-price?name=${name}&source_code=${sourcecode}`)
    .then((res)=>{
        dispatch(getPrice(res.data.data));
    }).catch((error)=>{
        dispatch(errorMsg(error.response.data.message))
    })
}