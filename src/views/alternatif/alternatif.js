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

export default class Alternatif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:[],
      fields: [
        {key:'_id',label:'ID',_style: { width: '20%'}},
        {key:'nama_mahasiswa',label:'Nama Mahasiswa'},
        {key:'alamat',label:'Nilai',_style: { width: '20%'}},
        {key:'jenis_kelamin',label:'Rank'},
        {key:'status'}
      ]
    }
  }

  removeAlternatif(nim){
    AlternatifService.deleteAlternatif(nim).then(
      () => {
        window.location.reload();
      },
      error => {
        console.log(error.response);
      }
    )
  }

  componentDidMount() {
    AlternatifService.getAlternatif().then(
      response => {
        this.setState({
          content:response.data.data
        });
        console.log(response.data.data);
      },
      error => {
        console.log(error);
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
                Alternatif
              </CCardHeader>
              <CCardBody>
              <Link to='/alternatif/add'>
                <CButton color="info" className="float-right m-2">Tambah Data</CButton>
              </Link>
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
                          <Link to={{pathname:"/alternatif/edit",
                        data:item._id}}>
                            <CButton className="m-2" color="success">Edit</CButton>
                          </Link>
                          <CButton className="m-2" onClick={() => this.removeAlternatif(item._id)} color="danger">Delete</CButton>
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
