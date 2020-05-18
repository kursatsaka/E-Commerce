interface RegistryItem {
  componentName: string;
  modulePath: string;
  moduleName: string;
}

export const DynamicContentOutletRegistry: RegistryItem[] = [
  {
    componentName: 'ProductComponent',
    modulePath: 'src/app/product/product.module',
    moduleName: 'ProductModule'
  },
  {
    componentName: 'CustomerComponent',
    modulePath: 'src/app/customer/customer.module',
    moduleName: 'CustomerModule'
  },
  {
    componentName: 'CategoryComponent',
    modulePath: 'src/app/category/category.module',
    moduleName: 'CategoryModule'
  }
];
