import React from 'react';
import ComponentPhoto from './ComponentPhoto';

const components = [
  { name: 'J1_A', image: 'J1_A.png', model: 'MVBLK-ASN-47D-CJD1P-L', qty: 2, unitPrice: '¥7,230', totalPrice: '¥14,460', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY'},
  { name: 'J1_B', image: 'J1_B.png', model: 'MVSHM-3N03002-47D-KWYCR-L', qty: 2, unitPrice: '¥2,257', totalPrice: '¥4,514', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_C', image: 'J1_C.png', model: 'MVBLK-ASN-47A-SFY92-L', qty: 2, unitPrice: '¥5,054', totalPrice: '¥10,108', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_D', image: 'J1_D.png', model: 'MVBLK-ASN-47A-JUMZC-L', qty: 2, unitPrice: '¥14,243', totalPrice: '¥28,486', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_E', image: 'J1_E.png', model: 'MVSHM-3N03000-47D-349WW-L', qty: 2, unitPrice: '¥1,456', totalPrice: '¥2,912', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J1_F', image: 'J1_F.png', model: 'MVSHM-3N03000-47D-MSPLS-L', qty: 2, unitPrice: '¥1,412', totalPrice: '¥2,824', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J2_A', image: 'J2_A.png', model: 'MVSHM-3N05002-47D-FTBFE-L', qty: 2, unitPrice: '¥2,179', totalPrice: '¥4,358', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J2_B', image: 'J2_B.png', model: 'MVBLK-ASN-47D-81FJ7-L', qty: 2, unitPrice: '¥11,240', totalPrice: '¥22,480', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J2_C', image: 'J2_C.png', model: 'MVSHM-3N01550-47D-L2W98-L', qty: 2, unitPrice: '¥1,523', totalPrice: '¥3,046', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_A', image: 'J4_A.png', model: 'MVSHM-3N02050-47D-G1LM1-L', qty: 2, unitPrice: '¥3,002', totalPrice: '¥6,004', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_B', image: 'J4_B.png', model: 'MVTUP-ASN-47D-RKKRG-L', qty: 2, unitPrice: '¥5,930', totalPrice: '¥11,860', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_C', image: 'J4_C.png', model: 'MVTUP-ASN-47D-WRK6Z-L', qty: 2, unitPrice: '¥5,418', totalPrice: '¥10,836', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J4_D', image: 'J4_D.png', model: 'MVSHM-3N02050-47E-PHBBA-L', qty: 2, unitPrice: '¥2,857', totalPrice: '¥5,714', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J5_A', image: 'J5_A.png', model: 'MVTUP-ASN-47D-75W5W-L', qty: 2, unitPrice: '¥11,394', totalPrice: '¥22,788', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_A', image: 'J6_A.png', model: 'MVSHM-3N01550-47A-K6JTF-L', qty: 2, unitPrice: '¥1,612', totalPrice: '¥3,224', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_B', image: 'J6_B.png', model: 'MVSHM-3N01550-47A-TC28K-L', qty: 2, unitPrice: '¥1,512', totalPrice: '¥3,024', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_C_left', image: 'J6_C_left.png', model: 'MVSHM-3N01552-47A-2N5TR-L', qty: 1, unitPrice: '¥1,645', totalPrice: '¥1,645', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_C_right', image: 'J6_C_right.png', model: 'MVSHM-3N01552-47D-LJZW5-L', qty: 1, unitPrice: '¥1,645', totalPrice: '¥1,645', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J6_D', image: 'J6_D.png', model: 'MVSHM-3N03000-47D-9JXKX-L', qty: 2, unitPrice: '¥1,323', totalPrice: '¥2,646', method: 'Sheet Metal Fabrication', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_A', image: 'J7_A.png', model: 'MVTUP-ASN-47F-ZH3RJ-L', qty: 2, unitPrice: '¥16,657', totalPrice: '¥33,314', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_B', image: 'J7_B.png', model: 'MVBLK-ASN-47D-JU5Y3-L', qty: 4, unitPrice: '¥6,724', totalPrice: '¥26,896', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_C', image: 'J7_C.png', model: 'MVBLK-ASN-47D-3AY2R-L', qty: 2, unitPrice: '¥5,674', totalPrice: '¥11,348', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_D_left', image: 'J7_D_left.png', model: 'MVBLK-SUB-47M-2R7XE-L', qty: 1, unitPrice: '¥9,636', totalPrice: '¥9,636', method: 'Metal Cutting (CNC)', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_D_right', image: 'J7_D_right.png', model: 'MVBLK-SUB-47M-XJ975-L', qty: 1, unitPrice: '¥9,636', totalPrice: '¥9,636', method: 'Metal Cutting (CNC)', material: 'SUS304', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J7_E', image: 'J7_E.png', model: 'MVBLK-SUB-47D-MAB44-L', qty: 2, unitPrice: '¥9,099', totalPrice: '¥18,198', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J8_A', image: 'J8_A.png', model: 'MVBLK-ASN-47R-LS336-L', qty: 2, unitPrice: '¥7,172', totalPrice: '¥14,344', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' },
  { name: 'J8_B', image: 'J8_B.png', model: 'MVBLK-ASN-47L-GG3NB-L', qty: 2, unitPrice: '¥12,641', totalPrice: '¥25,282', method: 'Metal Cutting (CNC)', material: 'Al6061', manufacturer: 'MiSUMi MEVIY' }
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
          <th>Manufacturing Method</th>
          <th>Material</th>
          <th>Manufacturer</th>
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
            <td>{comp.method}</td>
            <td>{comp.material}</td>
            <td>{comp.manufacturer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
