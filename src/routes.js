import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Kriteria = React.lazy(() => import('./views/kriteria/kriteria'));
const KriteriaForm = React.lazy(() => import('./views/kriteria/kriteriaform'));
const SubKriteria = React.lazy(() => import('./views/subkriteria/subkriteria'));
const SubKriteriaForm = React.lazy(() => import('./views/subkriteria/subkriteriaform'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard',name: 'Dashboard', component: Dashboard },
  { path: '/kriteria',exact: 'true', name:'Kriteria', component: Kriteria},
  { path: '/kriteria/add', name:'Tambah Kriteria', component: KriteriaForm},
  { path: '/kriteria/subkriteria', exact:'true',name:'Sub Kriteria', component: SubKriteria},
  { path: '/kriteria/subkriteria/add', name:'Tambah Sub Kriteria', component: SubKriteriaForm}
];

export default routes;
