import React, {useEffect, useState} from "react";
import {Page} from "./Page";
import {requestApiUserForLogger} from "../api/axis";


export const PaginationComponent = (props) => {

    const [page, setPage] = useState(5);
    const [dataPage, setDataPage] = useState([]);

    const handlerDataPage = async (page) => {

        let data =
            await requestApiUserForLogger.getReqPage(page);

        setDataPage(data.data);
    };


    useEffect(async () => {

        let data = await requestApiUserForLogger.getReq();

        setDataPage(data.data);
    }, []);

    return (
        <div>
            <Page page={page} handlerDataPage={handlerDataPage} dataPage={dataPage}/>
        </div>
    )

}
