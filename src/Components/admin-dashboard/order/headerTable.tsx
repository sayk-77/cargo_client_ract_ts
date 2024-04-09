import React from "react";
// @ts-ignore
import styles from "./header.module.css";

interface headerTableProps {
	status: string;
}

export const HeaderTable: React.FC<headerTableProps> = ({ status }) => {
	let headers;

	if (status === "Создан") {
		headers = (
			<tr>
				<th>ID заказа</th>
				<th>Статус</th>
				<th>Тип груза</th>
				<th>Стоимость</th>
				<th>Заказчик</th>
				<th></th>
			</tr>
		);
	} else if (status === "В процессе") {
		headers = (
			<tr>
				<th>ID заказа</th>
				<th>Адрес доставки</th>
				<th>Адрес отправления</th>
				<th>Цена</th>
				<th>Заказчик</th>
				<th>Получатель</th>
				<th></th>
			</tr>
		);
	} else {
		headers = (
			<tr>
				<th>ID заказа</th>
				<th>Заказчик</th>
				<th>Получатель</th>
				<th>Дата получения</th>
				<th></th>
			</tr>
		);
	}

	return <thead className={styles.tableOrder}>{headers}</thead>;
};
