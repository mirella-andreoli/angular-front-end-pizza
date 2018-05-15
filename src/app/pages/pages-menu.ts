import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Pedidos',
    icon: 'fa fa-edit',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Registrar pedido',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Consultar pedidos',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Entregas',
        link: '/pages/ui-features/icons',
        children: [
          {
            title: 'Conferência',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Google Maps',
            link: '/pages/maps/gmaps',
          }
        ]
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Financeiro',
    icon: 'ion-social-usd',
    children: [
      {
        title: 'Movimentação',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Contas a Receber',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Contas a Pagar',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Fidelização',
    icon: 'ion-ios-people',
    children: [
      {
        title: 'Cadastros',
        link: '/pages/components/tree',
        children: [
          {
            title: 'Campanhas',
            link: '/pages/components/notifications',
          },
          {
            title: 'Fidelizados',
            link: '/pages/components/notifications',
          },
        ]
      },
      {
        title: 'Consultar pontuação',
        link: '/pages/components/notifications',
      },
      {
        title: 'Cupons',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Cadastros',
    icon: 'ion-clipboard',
    link: '/pages/cadastros',
    children: [
      {
        title: 'Produtos',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Pessoas',
        link: '/pages/cadastros/pessoas',
      },
      {
        title: 'Taxas',
        link: '/pages/maps/searchmap',
      },
      {
        title: 'Funcionários',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Motoboys',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Relatórios',
    icon: 'ion-arrow-graph-up-right',
    children: [
      {
        title: 'Fechamento Diário',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Vendas',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Entregas',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Utilitários',
    icon: 'fa fa-cogs',
    children: [
      {
        title: 'Acessos',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'Câmeras',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
