import React from 'react';
import ComponentPhoto from './ComponentPhoto';

const components = [
  { name: 'J1_A', image: 'J1_A.png', model: 'MVBLK-ASN-47X-F8WUL-L', qty: 2, unitPrice: '¥7,230', totalPrice: '¥14,460', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY'},
  { name: 'J1_B', image: 'J1_B.png', model: 'MVBLK-ASN-486-16ZD6-L', qty: 2, unitPrice: '¥6,484', totalPrice: '¥12,968', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_C', image: 'J1_C.png', model: 'MVBLK-ASN-47X-7DW6C-L', qty: 2, unitPrice: '¥14,243', totalPrice: '¥28,486', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_D', image: 'J1_D.png', model: 'MVSHM-3N03040-47X-7P2BK-L', qty: 2, unitPrice: '¥1,690', totalPrice: '¥3,380', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_E', image: 'J1_E.png', model: 'MVSHM-3N03040-48A-9B2W6-L', qty: 2, unitPrice: '¥1,590', totalPrice: '¥3,180', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J2_A', image: 'J2_A.png', model: 'MVSHM-3N05042-47X-EZD5K-L', qty: 2, unitPrice: '¥2,401', totalPrice: '¥4,802', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J2_B', image: 'J2_B.png', model: 'MVBLK-ASN-47X-HXB7K-L', qty: 2, unitPrice: '¥11,240', totalPrice: '¥22,480', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J2_C', image: 'J2_C.png', model: 'MVSHM-3N01548-47X-GEMBC-L', qty: 2, unitPrice: '¥1,756', totalPrice: '¥3,512', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_A', image: 'J4_A.png', model: 'MVSHM-3N02048-47X-4RRG8-L', qty: 2, unitPrice: '¥3,235', totalPrice: '¥6,470', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_B', image: 'J4_B.png', model: 'MVTUP-ASN-47X-TMW2D-L', qty: 2, unitPrice: '¥5,930', totalPrice: '¥11,860', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_C', image: 'J4_C.png', model: 'MVTUP-ASN-47X-8NHLF-L', qty: 2, unitPrice: '¥5,418', totalPrice: '¥10,836', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_D', image: 'J4_D.png', model: 'MVSHM-3N02048-48B-TLEAD-L', qty: 2, unitPrice: '¥1,868', totalPrice: '¥3,736', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_E', image: 'J4_E.png', model: 'MVSHM-3N02048-48B-SMRHW-L', qty: 2, unitPrice: '¥2,157', totalPrice: '¥4,314', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J5_A', image: 'J5_A.png', model: 'MVTUP-ASN-487-P4H23-L', qty: 2, unitPrice: '¥11,394', totalPrice: '¥22,788', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_A', image: 'J6_A.png', model: 'MVSHM-3N01548-47X-CME5R-L', qty: 2, unitPrice: '¥1,834', totalPrice: '¥3,668', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_B', image: 'J6_B.png', model: 'MVSHM-3N01548-47X-7DB8J-L', qty: 2, unitPrice: '¥1,745', totalPrice: '¥3,490', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_C_left', image: 'J6_C_left.png', model: 'MVSHM-3N0154A-47X-8YT9J-L', qty: 1, unitPrice: '¥1,901', totalPrice: '¥1,901', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_C_right', image: 'J6_C_right.png', model: 'MVSHM-3N0154A-47X-ABMFW-L', qty: 1, unitPrice: '¥1,901', totalPrice: '¥1,901', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_D', image: 'J6_D.png', model: 'MVSHM-3N03040-47X-73Z68-L', qty: 2, unitPrice: '¥1,556', totalPrice: '¥3,112', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_A', image: 'J7_A.png', model: 'MVTUP-ASN-48A-16H77-L', qty: 2, unitPrice: '¥13,866', totalPrice: '¥27,732', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_B', image: 'J7_B.png', model: 'MVBLK-ASN-48B-1B61U-L', qty: 4, unitPrice: '¥5,611', totalPrice: '¥22,444', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_C', image: 'J7_C.png', model: 'MVBLK-ASN-47X-3A9BT-L', qty: 2, unitPrice: '¥5,674', totalPrice: '¥11,348', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_D_left', image: 'J7_D_left.png', model: 'MVBLK-SUB-47X-U9BBA-L', qty: 1, unitPrice: '¥9,698', totalPrice: '¥9,698', method: 'Metal Cutting (CNC)', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_D_right', image: 'J7_D_right.png', model: 'MVBLK-SUB-47X-J27PB-L', qty: 1, unitPrice: '¥9,698', totalPrice: '¥9,698', method: 'Metal Cutting (CNC)', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_E', image: 'J7_E.png', model: 'MVBLK-SUB-47X-3XCT2-L', qty: 2, unitPrice: '¥9,099', totalPrice: '¥18,198', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J8_A', image: 'J8_A.png', model: 'MVBLK-ASN-48E-Y9ATE-L', qty: 2, unitPrice: '¥7,141', totalPrice: '¥14,282', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J8_B', image: 'J8_B.png', model: 'MVBLK-ASN-47X-PY1XN-L', qty: 2, unitPrice: '¥12,641', totalPrice: '¥25,282', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' }
];

export default function ArmManufacturedTable() {
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
          <th>Manufacturing Method</th>
          <th>Material</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {components.map((comp) => (
          <tr key={comp.name} style={{ height: '10em', textAlign: 'center', backgroundColor: 'transparent' }}>
            <td>{comp.name}</td>
            <td><ComponentPhoto src={require(`@site/static/img/BOM/${comp.image}`).default} alt={comp.name} /></td>
            <td>{comp.model}</td>
            <td>{comp.qty}</td>
            <td>{comp.unitPrice}</td>
            <td>{comp.totalPrice}</td>
            <td>{comp.method}</td>
            <td>{comp.material}</td>
            <td>{comp.manufacturer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
