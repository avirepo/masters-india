export const COLUMNS_CONFIG = [
  {
    title: 'Product name',
    dataIndex: 'name',
    width: '30%'
  },
  {
    title: 'Category',
    dataIndex: 'category',
    sorter: (a, b) => a.category > b.category ? 1 : a.category < b.category ? -1 : 0,
  },
  {
    title: 'SubCategory',
    dataIndex: 'subCategory',
    sorter: (a, b) => a.subCategory > b.subCategory ? 1 : a.subCategory < b.subCategory ? -1 : 0,
  }
];