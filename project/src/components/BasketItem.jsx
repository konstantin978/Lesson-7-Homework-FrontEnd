export const BasketItem = ({ id, title, price, count, onMove, onDecrement, onDelete }) => {
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{price * count}</td>
        <td>
            <button onClick={() => {onMove(id)}}>+</button>
            <button onClick={() => {onDecrement(id)}}>-</button>
            <button onClick={() => {onDelete(id)}}>x</button>
        </td>
    </tr>
}