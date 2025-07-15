import React from 'react';
import ComponentPhoto from './ComponentPhoto';
import useBaseUrl from '@docusaurus/useBaseUrl';

const components = [
  { name: 'USB2CANFD converter', image: 'usb2can.jpg', model: 'USB2CANFD-X2', qty: 2, unitPrice: '¥25,000', totalPrice: '¥50,000', supplier: 'Pibiger'},
  { name: 'J1/J2 to Hub Cable', image: '', model: 'XL2506130075-3', qty: 4, unitPrice: '¥384', totalPrice: '¥1,536', supplier: 'LCSC'},
  { name: 'J3+J4 to Hub Cable', image: 'j3_j4.png', model: 'XL2506130075-2', qty: 2, unitPrice : '¥806', totalPrice: '¥1,612', supplier: 'LCSC'},
  { name: 'J4+J5+J6+J7 to Hub Cable', image: 'j4_j7.png', model: 'XL2506130075-1', qty: 2, unitPrice: '¥1,515', totalPrice: '¥3,030', supplier: 'LCSC'},
  { name: 'J7 to J8 Cable', image: '', model: 'Undecided', qty: 2, unitPrice: '¥450', totalPrice: '¥900', supplier: 'LCSC'},
  { name: 'Communication Cable', image: '', model: 'Undecided', qty: 2, unitPrice: '¥450', totalPrice: '¥900', supplier: 'LCSC'},
  { name: 'Power Supply', image: 'power_supply.png', model: '', qty: 2, unitPrice: '¥14,634', totalPrice: '¥29,268', supplier: 'AliExpress'},

];

export default function ElectricalTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ height: '8em', textAlign: 'center', borderBottom: '5px solid #ccc' }}>
          <th>Name</th>
          <th>Photo</th>
          <th>Model Number</th>
          <th>Quantity</th>
          <th>Unit Price (JPY)</th>
          <th>Total Price (JPY)</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {components.map((comp) => (
          <tr key={comp.name} style={{ height: '10em', textAlign: 'center', backgroundColor: 'transparent' }}>
            <td>{comp.name}</td>
            <td><ComponentPhoto src={useBaseUrl(`/img/BOM/electrical/${comp.image}`)} alt={comp.name} /></td>
            <td>{comp.model}</td>
            <td>{comp.qty}</td>
            <td>{comp.unitPrice}</td>
            <td>{comp.totalPrice}</td>
            <td>{comp.supplier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
