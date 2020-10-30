import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Kriteria = React.lazy(() => import('./views/kriteria/kriteria'));
const KriteriaForm = React.lazy(() => import('./views/kriteria/kriteriaform'));
const SubKriteria = React.lazy(() => import('./views/subkriteria/subkriteria'));
const SubKriteriaForm = React.lazy(() => import('./views/subkriteria/subkriteriaform'));
const editform = React.lazy(() => import('./views/kriteria/editform'));
const SawHasil = React.lazy(() => import('./views/hasil/hasil_saw'));
const MSawHasil = React.lazy(() => import('./views/hasil/hasil_saw'));
const MSawProses = React.lazy(() => import('./views/proses/msaw_proses'));
const SawProses = React.lazy(() => import('./views/proses/saw_proses'));
const Alternatif = React.lazy(() => import('./views/alternatif/alternatif'));
const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/dashboard',name: 'Dashboard', component: Dashboard },
  { path: '/kriteria',exact: 'true', name:'Kriteria', component: Kriteria},
  { path: '/kriteria/add', name:'Tambah Kriteria', component: KriteriaForm},
  { path: '/kriteria/subkriteria', exact:'true',name:'Sub Kriteria', component: SubKriteria},
  { path: '/kriteria/subkriteria/add', name:'Tambah Sub Kriteria', component: SubKriteriaForm},
  { path: '/kriteria/edit', name:'Edit Kriteria', component:editform},
  { path: '/hasil/saw', name:'Hasil SAW', component:SawHasil},
  { path: '/hasil/msaw', name:'Hasil M-SAW', component:MSawHasil},
  { path: '/alternatif',exact:'true' ,name:'Alternatif', component:Alternatif},
  { path: '/proses/msaw',name:'Proses M-SAW', component:MSawProses},
  { path: '/proses/saw',name:'Proses SAW', component:SawProses}

];

export default routes;
