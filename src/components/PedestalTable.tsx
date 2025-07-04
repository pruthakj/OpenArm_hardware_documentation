import React from 'react';
import ComponentPhoto from './ComponentPhoto';

const components = [
  { name: '60x60 850mm Aluminum Extrusion', image: 'J1_A.png', model: 'HFSB6-6060-850', qty: 1, unitPrice: '¥3,120', totalPrice: '¥3,120', supplier: 'MiSUMi'},
  { name: '30x60 60 Degrees Aluminum Extrusion Reinforcement Bracket', image: 'J1_A.png', model: 'HFBL30A6-3060-123-SSP', qty: 1, unitPrice: '¥4,069', totalPrice: '¥4,069', supplier: 'MiSUMi'},
  { name: 'M6 30/60 Angle Brackets + Bolt and Nut Set', image: 'J1_A.png', model: 'HBLFSDW6-SEP', qty: 2, unitPrice: '¥888', totalPrice: '¥1,776', supplier: 'MiSUMi'},
  { name: '60x60 Black Polyamide HFS Aluminum Extrusion Caps', image: 'J1_A.png', model: 'HFC6-6060-B', qty: 1, unitPrice: '¥211', totalPrice: '¥211', supplier: 'MiSUMi'},
  { name: 'Hexagonal Socket Head Bolts, Nickel Plated', image: 'J1_A.png', model: 'CBM6-12', qty: 8, unitPrice: '¥148', totalPrice: '¥1,184', supplier: 'MiSUMi'},
  { name: 'Post-insertion spring nuts for aluminum frames for 6 series (groove width 8 mm)', image: 'J1_A.png', model: 'HNTP6-6', qty: 8, unitPrice: '¥44', totalPrice: '¥352', supplier: 'MiSUMi'},
];

export default function ManufacturedTable() {
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
            <td><ComponentPhoto src={`/img/BOM/${comp.image}`} alt={comp.name} /></td>
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
