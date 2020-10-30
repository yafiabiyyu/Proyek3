import React from 'react'
import {Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CTabContent,
  CTabs,
  CTabPane,
  CRow, CNav, CNavItem, CNavLink
} from '@coreui/react'

// import KriteriaService from '../../service/kriteria.service';
import konversi_saw from '../dumy/konversi_saw';
import normalisasi_saw from '../dumy/normalisasi_saw';

export default class ProsesSaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // content:[],
      // fields: [
      //   {key:'kode',label:'ID',_style: { width: '20%'}},
      //   {key:'nama',label:'Nama Mahasiswa'},
      //   {key:'nilai',label:'Nilai',_style: { width: '20%'}},
      //   {key:'rank',label:'Rank'},
      // ]
      fields: [
        {key:'kode', label:'ID'},
        {key:'nama',label:'Nama'},
        {key:'K01',lable:'K01'},
        {key:'K02',lable:'K02'},
        {key:'K03',lable:'K03'},
        {key:'K04',lable:'K04'},
        {key:'K05',lable:'K05'},
      ]
    }
  }
  // componentDidMount() {
  //   KriteriaService.getKriteriaContent().then(
  //     response => {
  //       this.setState({
  //         content:response.data.data
  //       });
  //       console.log(response.data.data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }
  render(){
    return(
      <div className="animated fadeIn">
        <CRow className="d-flex justify-content-between">
          <CCol>
            <CCard>
              <CCardHeader>
                Proses SAW
              </CCardHeader>
              <CCardBody>
                <CTabs>
                  <CNav variant="tabs">
                    <CNavItem>
                      <CNavLink>
                        Konversi
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>
                        Normalisasi
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                  <CTabContent>
                    <CTabPane>
                      <CDataTable
                        items={konversi_saw}
                        fields={this.state.fields}
                        itemsPerPage={4}
                        pagination
                        scopedSlots = {{
                          'status':
                            (item)=>(
                              <td>
                                <div className="row mx-md-n5">
                                  <Link to={{pathname:"/kriteria/edit",
                                data:item.kode}}>
                                    <CButton className="m-2" color="success">Edit</CButton>
                                  </Link>
                                  <CButton className="m-2" color="danger">Delete</CButton>
                                </div>
                              </td>
                            )
                        }}
                      />
                    </CTabPane>
                    <CTabPane>
                      <CDataTable
                        items={normalisasi_saw}
                        fields={this.state.fields}
                        itemsPerPage={4}
                        pagination
                        scopedSlots = {{
                          'status':
                            (item)=>(
                              <td>
                                <div className="row mx-md-n5">
                                  <Link to={{pathname:"/kriteria/edit",
                                data:item.kode}}>
                                    <CButton className="m-2" color="success">Edit</CButton>
                                  </Link>
                                  <CButton className="m-2" color="danger">Delete</CButton>
                                </div>
                              </td>
                            )
                        }}
                      />
                    </CTabPane>
                  </CTabContent>
                </CTabs>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}
