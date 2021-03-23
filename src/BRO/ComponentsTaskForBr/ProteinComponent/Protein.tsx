import React from "react";
import {FieldForField} from "./FieldForField";
import style from "./Protein.module.css";

type TypeProtein = {
    currentPage: string,
    pageSize: number,
    totalSize: number,
    broObject: TypebroObject
    storeDataForm: string,
    storeDataFormReq: Array<TypeStoreDataFormReq>,
    onSubmit?: undefined,
    handleSubmit: () => void,
    dataPreloader: Array<ObjectPreloader>,
    functionCurrentPage: (number: number) => void;
};

type ObjectPreloader = {
    userId: number,
    id: number,
    title: string,
}

export type TypeStoreDataFormReq = {
    id: number,
    email: string
}
export type TypebroObject = {
    id: number,
    name: string
}
debugger
export const Protein: React.FC<TypeProtein> = React.memo(({currentPage, pageSize, totalSize, broObject: {id, name}, storeDataForm, storeDataFormReq, onSubmit, ...props}) => {
    //useState + useEffect + useCallback
    console.log("bro");
    const pageCount = Math.ceil(totalSize / pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    debugger
    return (
        <>
            <div>
                {/*TODO*/}
                {page.map(p => <span className={style.page}>{p}</span>)}
                {/*{page.map(page => <span className={currentPage === page && style.page} onClick={() => props.functionCurrentPage(page)}>{page}</span>)}*/}
            </div>
            <h1>{name}</h1>
            {/*<h3>{props.dataPreloader.map(value=><div>{value}</div>)}</h3>*/}
            <fieldset>
                <legend>{storeDataForm}</legend>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        {/*<Field component={'input'} name={'name'} placeholder={'name'}/>*/}
                        {FieldForField('input', 'name', 'name')}
                        {FieldForField('input', 'password', 'password')}
                        {/*<Field component={"input"} name={'password'} placeholder={'password'}/>*/}
                        <button>REG for bro</button>
                    </div>
                </form>
            </fieldset>
            <ul>{[...storeDataFormReq].slice(1).reverse().map((value) =>
                <li>{value["id"] + '+' + value.email}</li>)}</ul>
            {props.dataPreloader.map(value => <div>{value.userId} + {value.id}+ {value.title}</div>)}

        </>
    )
});
