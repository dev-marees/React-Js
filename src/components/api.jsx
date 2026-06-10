import React, { useState, useCallback, useEffect } from "react";
import "../style/api.css";

function Api() {

    const [datas, setData] = useState(null)
    const [fetchUsers, setFetchUsers] = useState(false)

    useEffect(() => {
        // const controller = new AbortController()
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((apiData) => {
            console.log('apiData::', apiData);
            setData(apiData)
        })
        // return () => controller.abort();
    },[])

    return (
        <div className="api-app">
            <div className="api-container">
                <h1 className="api-title">Users Directory</h1>
                <div className="api-toolbar">
                    <button className="fetch-btn" onClick={()=>{setFetchUsers(true)}}>Fetch Users</button>
                </div>
                <p className="api-status loading">Loading users...</p>
                <p className="api-status error">Something went wrong. Please try again.</p>
                <div className="users-grid">
                    <div className="user-card">
                        <div className="user-info">
                            {fetchUsers && datas?.map((data, idx) => (
                                <React.Fragment key={idx}>
                                    {/* <div className="user-avatar">L</div> */}
                                    <h2 className="user-name">{data.name}</h2>
                                    <p className="user-email">{data.email}</p>
                                    <p className="user-detail"><span className="user-icon">📞</span>{data.phone}</p>
                                    <p className="user-detail"><span className="user-icon">🌐</span>{data.website}</p>
                                    <p className="user-detail"><span className="user-icon">🏢</span>{data.address.street}</p>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="api-empty">No users to show. Click "Fetch Users" to load.</p>
            </div>
        </div>
    );
}

export default Api;
