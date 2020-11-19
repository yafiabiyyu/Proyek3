import React from 'react'
import {Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

// import KriteriaService from '../../service/kriteria.service';
import AlternatifService from '../../service/alternatif.service';

export default class HasilSeleksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:[],
      fields: [
        {key:'_id',label:'NIM'},
        {key:'nama_mahasiswa',label:'Nama Mahasiswa'},
        {key:'pendapatan_ortu',label:'Jumlah Pendapatan Orang Tua'},
        {key:'tanggungan_ortu',label:'Jumlah Tanggungan Orang tua'},
        {key:'status_ortu',label:'Status Orang Tua'},
        {key:'semester',label:'Semester'},
        {key:'ipk',label:'IPK'},
      ]
    }
  }
  componentDidMount() {
    AlternatifService.getHasilSeleksi().then(
      response => {
        this.setState({
          content:response.data.data
        });
      },
      error => {
        console.log(error.response);
      }
    )
  }
  render(){
    return(
      <div className="animated fadeIn">
        <CRow className="d-flex justify-content-between">
          <CCol>
            <CCard>
              <CCardHeader>
                Data Hasil Seleksi
              </CCardHeader>
              <CCardBody>
              {/* <Link to='/kriteria/add'>
                <CButton color="info" className="float-right m-2">Tambah Data</CButton>
              </Link> */}
              <CDataTable
                items={this.state.content}
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
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    )
  }
}
