/*    Imports    */
import axios from "axios";
import CEvent from "../../types/classes/event/CEvent";
import queryparser from "../queryparser";

// get infomation by id through api
const getById = async (id: string, select: any = {}, loadingCallback: (loading: boolean) => void, options: any = {}): Promise<CEvent | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events?${queryparser.Build({ _id: id }, select)}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.get(url, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.data && response?.data.values.length > 0 && response?.status == 200) return response?.data.values[0] as CEvent;
    return null;
};
// get all infomation through api
const getAll = async (
    select: any = {},
    count: boolean = false,
    countonly: boolean = false,
    loadingCallback: (loading: boolean) => void,
    options: any = {}
): Promise<{ values: CEvent[]; count: number; itemsperpage: number; page: number } | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events?${queryparser.Build({}, select)}&count=${count}&countonly=${countonly}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.get(url, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return response?.data;
    return null;
};
// get infomation according to query through api
const get = async (
    search: any = {},
    select: any = {},
    count: boolean = false,
    countonly: boolean = false,
    items: number = 10,
    page: number = 0,
    sort: any = { createdAt: -1 },
    loadingCallback: (loading: boolean) => void,
    options: any = {}
): Promise<{ values: CEvent[]; count: number; itemsperpage: number; page: number } | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events?${queryparser.Build(search, select, items, page, sort)}&count=${count}&countonly=${countonly}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.get(url, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return response?.data;
    return null;
};
// create new infomation through api
const create = async (user: CEvent, draft: boolean = false, loadingCallback: (loading: boolean) => void, options: any = {}): Promise<CEvent | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events?draft=${draft}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.post(url, user, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return response?.data;
    return null;
};
// update infomation through api
const update = async (user: CEvent, draft: boolean = false, loadingCallback: (loading: boolean) => void, options: any = {}): Promise<CEvent | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events?draft=${draft}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.put(url, user, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return response?.data;
    return null;
};
// update many infomation through api
const updateProps = async (search: any = {}, job: CEvent, draft: boolean = false, loadingCallback: (loading: boolean) => void, options: any = {}): Promise<CEvent | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events?${queryparser.Build(search)}&draft=${draft}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.patch(url, job, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return response?.data;
    return null;
};
// delete infomation through api
const remove = async (id: string, permanent: boolean = false, loadingCallback: (loading: boolean) => void, options: any = {}): Promise<any> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
    const body: any = { ids: [id], permanent: permanent }; // remove request payload
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.delete(url, { ...options, data: body });
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return true;
    return false;
};
// delete given infomation trough ids from api
const removeBulk = async (ids: string[], permanent: boolean = false, loadingCallback: (loading: boolean) => void, options: any = {}): Promise<any> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
    const body: any = { ids: ids, permanent: permanent }; // remove request payload
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.delete(url, { ...options, data: body });
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return true;
    return false;
};

const get_Public = async (
    search: any = {},
    select: any = {},
    count: boolean = false,
    countonly: boolean = false,
    items: number = 10,
    page: number = 0,
    sort: any = { createdAt: -1 },
    loadingCallback: (loading: boolean) => void,
    options: any = {}
): Promise<{ values: CEvent[]; count: number; itemsperpage: number; page: number } | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events/public?${queryparser.Build(search, select, items, page, sort)}&count=${count}&countonly=${countonly}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.get(url, options);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.status == 200) return response?.data;
    return null;
};

const getById_Public = async (id: string, select: any = {}, loadingCallback: (loading: boolean) => void): Promise<CEvent | null> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/events/public?${queryparser.Build({ _id: id }, select)}`;
    loadingCallback(true); // set loading callback of parent function to 'true'
    let response = null;
    try {
        response = await axios.get(url);
    } catch (e) {
        console.log(e);
    }
    loadingCallback(false); // set loading callback of parent function to 'false'
    if (response?.data && response?.data.values.length > 0 && response?.status == 200) return response?.data.values[0] as CEvent;
    return null;
};

export default {
    getById,
    getAll,
    get,
    create,
    update,
    updateProps,
    remove,
    removeBulk,

    get_Public,
    getById_Public,
};
