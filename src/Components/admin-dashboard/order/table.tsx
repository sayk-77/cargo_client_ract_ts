import React, { useEffect, useState } from 'react'
// @ts-ignore
import sprite from '../../../sprite.svg'
import axios from 'axios';
import { HeaderTable } from './headerTable';
import { BodyTable } from './bodyTable';

interface TableProps {
    status: string;
}

interface Order {
    ID: number;
    status: string;
    cargoType: string;
    recipient: string;
    orderDate: string;
    destinationAddress: string;
    sendingAddress: string;
    deliveryDate: string;
    orderPrice: number;
    customer: string;
    Client: {
        firstName: string;
        lastName: string;
    }
    CargoType: {
        typeName: string;
    }
}

export const TableOrder:React.FC<TableProps> = ({status}) => {
    const [orders, setOrders] = useState<Order[]>([])
    const filteredOrders = orders.filter(order => order.status === status);

    useEffect(() => {
        const getAllOrder = async (): Promise<void> => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/order/all`)
                
                if (response?.status === 200) {
                    setOrders(response?.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getAllOrder()
    }, [])

    return (
        <table style={{"minWidth": "900px"}}>
            <HeaderTable status={status}/>
            <BodyTable orders={filteredOrders} />
        </table>
    )
}