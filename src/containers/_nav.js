import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'


export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Alternatif',
    to: '/alternatif',
    icon: <CIcon content={freeSet.cilUser} customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Hasil Seleksi',
    to: '/hasil/seleksi',
    icon: <CIcon content={freeSet.cilList} customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Bobot',
    to: '/bobot',
    icon: <CIcon content={freeSet.cilLineWeight} customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Kriteria',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Data Kriteria',
        to: '/kriteria',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sub Kriteria',
        to: '/kriteria/subkriteria',
      }

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SAW',
    icon: <CIcon content={freeSet.cilEducation}customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Proses SAW',
        to: '/proses/msaw',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Hasil SAW',
        to: '/hasil/saw',
      }
    ]
  },{
    _tag: 'CSidebarNavDropdown',
    name: 'M-SAW',
    icon: <CIcon content={freeSet.cilEducation}customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Proses M-SAW',
        to: '/proses/msaw',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Hasil M-SAW',
        to: '/hasil/msaw',
      }
    ]
  }
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Hasil',
  //   icon: <CIcon content={freeSet.cilEducation}customClasses="c-sidebar-nav-icon"/>,
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Hasil SAW',
  //       to: '/hasil/saw',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Hasil M-SAW',
  //       to: '/hasil/msaw',
  //     }

  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Proses',
  //   icon: <CIcon content={freeSet.cilControl}customClasses="c-sidebar-nav-icon"/>,
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Proses SAW',
  //       to: '/proses/saw',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Proses M-SAW',
  //       to: '/proses/msaw',
  //     }

  //   ]
  // }
]

