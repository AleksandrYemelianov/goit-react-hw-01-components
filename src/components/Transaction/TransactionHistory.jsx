import { TransactionRow } from 'components/TransactionsRow/TransactionsRow'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.header}>Type</th>
                    <th className={css.header}>Amount</th>
                    <th className={css.header}>Currency</th>
                </tr>
            </thead>

            <tbody>
                <TransactionRow items={items} />
            </tbody>
        </table>  
    )
}