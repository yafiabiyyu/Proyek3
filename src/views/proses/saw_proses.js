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
// import konversi_saw from '../dumy/konversi_saw';
// import normalisasi_saw from '../dumy/normalisasi_saw';
import HasilService from '../../service/hasil.service';

export default class ProsesSaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content_konversi:[],
      content_normalisasi:[],
      // fields: [
      //   {key:'kode',label:'ID',_style: { width: '20%'}},
      //   {key:'nama',label:'Nama Mahasiswa'},
      //   {key:'nilai',label:'Nilai',_style: { width: '20%'}},
      //   {key:'rank',label:'Rank'},
      // ]
      fields: [
        {key:'_id', label:'ID'},
        {key:'nama_mahasiswa',label:'Nama'},
        {key:'k1',lable:'K1'},
        {key:'k2',lable:'K2'},
        {key:'k3',lable:'K3'},
        {key:'k4',lable:'K4'},
        {key:'k5',lable:'K5'},
      ]
    }
  }

  componentDidMount() {
    HasilService.getKonversi().then(
      response => {
        this.setState({
          content_konversi:response.data
        })
      }
    )
    HasilService.getNormalisasi().then(
      response => {
        this.setState({
          content_normalisasi:response.data
        })
      }
    );
  }

  render(){
    return(
      <div className="animated fadeIn">
        <CRow className="d-flex justify-content-between">
          <CCol>
            <CCard>
              <CCardHeader>
                Proses M-SAW
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
                        items={this.state.content_konversi}
                        fields={this.state.fields}
                        itemsPerPage={4}
                        pagination
                      />
                    </CTabPane>
                    <CTabPane>
                      <CDataTable
                        items={this.state.content_normalisasi}
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
