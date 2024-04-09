import React from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import sprite from "../../../sprite.svg";

interface Order {
	order: {
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
		};
		CargoType: {
			typeName: string;
		};
	};
	status: string;
}

export const ElementTable: React.FC<Order> = ({ order }) => {
	const navigate = useNavigate();

	let content;

	if (order.status === "Создан") {
		content = (
			<tr>
				<td>{order.ID}</td>
				<td>{order.status}</td>
				<td>{order.CargoType.typeName}</td>
				<td>{order.orderPrice} рублей</td>
				<td>{`${order.Client.firstName} ${order.Client.lastName}`}</td>
				<td>
					<svg
						height={14}
						width={8}
						style={{ cursor: "pointer" }}
						onClick={() => navigate("/create-order")}
					>
						<use xlinkHref={sprite + "#arrow_detail"}></use>
					</svg>
				</td>
			</tr>
		);
	} else if (order.status === "В процессе") {
		content = (
			<tr>
				<td
					style={{
						color: "#000",
						fontSize: "15px",
						fontWeight: "600",
					}}
				>
					{order.ID}
				</td>
				<td>{order.destinationAddress}</td>
				<td>{order.sendingAddress}</td>
				<td>{order.orderPrice}</td>
				<td>
					{order.Client.firstName} {order.Client.lastName}
				</td>
				<td>{order.recipient}</td>
				<td>
					<svg
						height={14}
						width={8}
						style={{ cursor: "pointer" }}
						onClick={() => navigate("/create-order")}
					>
						<use xlinkHref={sprite + "#arrow_detail"}></use>
					</svg>
				</td>
			</tr>
		);
	} else {
		content = (
			<tr>
				<td
					style={{
						color: "#000",
						fontSize: "15px",
						fontWeight: "600",
					}}
				>
					{order.ID}
				</td>
				<td>
					{order.Client.firstName} {order.Client.lastName}
				</td>
				<td>{order.recipient}</td>
				<td>{order.orderPrice}</td>
				<td>{order.deliveryDate}</td>
				<td>
					<svg
						height={14}
						width={8}
						style={{ cursor: "pointer" }}
						onClick={() => navigate("/create-order")}
					>
						<use xlinkHref={sprite + "#arrow_detail"}></use>
					</svg>
				</td>
			</tr>
		);
	}

	return content;
};
