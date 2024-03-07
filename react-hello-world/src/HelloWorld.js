import React, { useState, useEffect } from 'react';

function HelloWorld() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/clients')
            .then(response => response.json())
            .then(data => setClients(data))
            .catch(error => console.error('Error fetching clients:', error));
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <h2>Clients:</h2>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default HelloWorld;
