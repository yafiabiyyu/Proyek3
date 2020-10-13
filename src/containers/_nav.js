import React from 'react'
import CIcon from '@coreui/icons-react'

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
  }
]

