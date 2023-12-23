import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { makeFormatDate } from 'helpers/formatData';

export const CryptoHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => (
          <Tr key={id}>
            <Td>{index + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{makeFormatDate(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
