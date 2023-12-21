import React from 'react'

interface TransactionProperties {
    type: string,
    tofrom: string,
    details: string,
    amount: string,
}

const Transaction: React.FC<TransactionProperties> = ({ type, tofrom, amount, details }) => {
    if (type === "Invoice") {
        return (
            <li>{`${type} ${tofrom} owes ${amount} for ${details}`}</li>
        );
    } else if (type === "Payment") {
        return (
            <li>{`${type} ${tofrom} owned Rs.${amount} for ${details}`}</li>
        );
    } else {
        return null;
    }
}

export default Transaction