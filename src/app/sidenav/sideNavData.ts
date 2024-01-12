export interface NavObject {
  routeLink: string;
  icon?: string;
  label: string;
  items?: NavObject[];
  expanded?: boolean;
}

export const navBarData: Array<NavObject> = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fal fa-box-open',
    label: 'Products',
    items: [
      {
        routeLink: 'products/addproduct',
        label: 'Add Product',
      },
      {
        routeLink: 'products/productlist',
        label: 'Product List',
      },
    ],
    expanded: false,
  },
  {
    routeLink: 'categories',
    icon: 'fal fa-layer-group',
    label: 'Categories',
    items: [
      {
        routeLink: 'categories/addcategory',
        label: 'Add Category',
      },
      {
        routeLink: 'categories/categorylist',
        label: 'Category List',
      },
    ],
    expanded: false,
  },
  {
    routeLink: 'vendors',
    icon: 'fal fa-users',
    label: 'Vendors',

    items: [
      {
        routeLink: 'vendors/addvendor',
        label: 'Add Vendor',
      },
      {
        routeLink: 'vendors/vendorlist',
        label: 'Vendors List',
      },
    ],
    expanded: false,
  },
];
