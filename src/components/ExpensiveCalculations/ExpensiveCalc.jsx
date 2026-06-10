import React, { useState, useMemo } from "react";

function ExpensiveCalc() {

    const users = Array.from({ length: 10000 }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        department: ["Engineering", "Marketing", "Sales", "HR"][
            index % 4
        ],
        isActive: index % 2 === 0,
    }));

    const [input, setInput] = useState(0);
    const [otherState, setOtherState] = useState(0);
    const [search, setSearch] = useState("");

    const expensiveResult = useMemo(() => {
        console.log('Running the expensive calculations');
        let result = 0;
        for(let i = 0; i<1e9 ; i++) {
            result += i;
        }
        return result + input;
    }, [input])

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            return (
                user.name.toLowerCase().includes(search.toLowerCase()) && user.isActive
            );
        });
    }, [search]);

    return (
        <div>
            <p>Expensive Computation Result: {expensiveResult}</p>
            <button onClick={() => setInput((prev) => prev + 1)}>Change Input</button>
            <button onClick={() => setOtherState((prev) => prev + 1)}>
                Change Other State
            </button>
            <div>
                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <ul>
                    {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExpensiveCalc;
