import React, { useState } from "react";

export default function Pagination(props) {
    const { page, setPage } = props;
    const [number, setNumber] = useState(1);

    return (
        <div className="pagination">
            <button onClick={() => { setPage(page - 10); setNumber(number - 1) }} disabled={number === 1}>Prev</button>
            <input type="text" disabled value={number} />
            <button onClick={() => { setPage(page + 10); setNumber(number + 1) }} disabled={number === 10}>Next</button>
        </div>
    );
}