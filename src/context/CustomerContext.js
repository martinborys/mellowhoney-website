import React, { useContext, useState } from "react";

const CustomerContext = React.createContext();
const CustomerUpdateContext = React.createContext();

export function useCustomer() {
  return useContext(CustomerContext);
}

export function useCustomerUpdate() {
  return useContext(CustomerUpdateContext);
}

export function CustomerProvider({ children }) {
  const [Customer, setCustomer] = useState("");

  function changeCustomer(newCustomer) {
    setCustomer(newCustomer);
  }

  return (
    <CustomerContext.Provider value={Customer}>
      <CustomerUpdateContext.Provider value={changeCustomer}>
        {children}
      </CustomerUpdateContext.Provider>
    </CustomerContext.Provider>
  );
}
