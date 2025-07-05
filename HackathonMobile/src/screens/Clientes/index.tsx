import HeaderClientes from "./components/Header";
import ClientList from "./components/ClientList";
import SearchBar from "./components/SearchBar";
import React, { useState } from 'react';

const ClientesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <>
        <HeaderClientes />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <ClientList />
        </>
    )
};

export default ClientesPage;