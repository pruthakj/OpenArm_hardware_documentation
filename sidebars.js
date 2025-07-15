/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  hardware: [
    'intro',
    {
      type: 'category',
      label: 'Bill of Materials',
      collapsed: true,
      items: [
        'parts-list',
        'arm-BOM',
        'arm-offtheshelf',
        'pedestal-BOM',
        'ee-BOM',
        'electrical-BOM',
      ],
    },
    {
      type: 'category',
      label: 'Assembly Guide',
      collapsed: true,
      items: [
        'pedestal-assembly',
        'J1-J2-sub-assembly',
        'J2-J3-sub-assembly',
        'J3-J4-sub-assembly',
        'J4-J5-sub-assembly',
        'J5-J6-J7-sub-assembly',
        'ee-sub-assembly',
        'ee-customization',
        'final-assembly',
        'final-checks',
      ],
    },
    'gripper-specs',
    'installation',
    'troubleshooting',
  ],
};
