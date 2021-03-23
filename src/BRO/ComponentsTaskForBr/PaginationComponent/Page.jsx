import React from "react";

export const Page = (props) => {

    const pagePage = [];

    for (let i = 1; i <= props.page; i++) {
        pagePage.push(i)
    }

    return (
        <div>
            {pagePage.map(page => <span onClick={() => props.handlerDataPage(page)}>{page}</span>)}
            <ul>
                {props.dataPage.map(data => <li>{data.title}</li>)}
            </ul>

        </div>
    )
}
