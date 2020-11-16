import React from 'react'
import {Link} from 'react-router-dom'
import {
  CSelect,
  CCard,
  CButton,
  CLabel,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import KriteriaService from '../../service/kriteria.service';

export default class SubKriteria extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      content:[],
      contentSub:[],
      kode_kriteria:"",
      fields:[
        {key:'_id',label:'ID',_style: { width: '20%'}},
        {key:'nama_subkriteria',label:'Nama Subkriteria'},
        {key:'nilai',label:'Nilai',_style: { width: '20%'}},
        {key:'status'}
      ]
    }
  }
  componentDidMount() {
    KriteriaService.getKriteriaContent().then(
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

  handleSelect(e) {
    KriteriaService.getSubkriteria(e.target.value).then(
      response => {
        this.setState({
          contentSub:response.data.data
        })
        console.log(response.data.data);
      },
      error => {
        console.log(error);
      }
    )
    // this.setState({
    //   kode_kriteria:e.target.value
    // });
    // console.log(e.target.value);
  }

  render() {
    return(
      <div className="animated fadeIn">
        <CRow className="d-flex justify-content-between">
          <CCol>
            <CCard>
              <CCardHeader>
                Data Kriteria
              </CCardHeader>
              <CCardBody>
              <Link to='/kriteria/subkriteria/add'>
                <CButton color="info" className="float-right m-2">Tambah Data</CButton>
              </Link>
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-md-6">
                    <CLabel htmlFor="select" className="mr-4">Kriteria</CLabel>
                    <CSelect custom name ="kriteria" onChange={this.handleSelect} id="kriteria" className="w-75">
                        <option value="">Please Select</option>
                        {this.state.content.map(data => (
                          <option key={data._id} value={data._id}>{data.nama_kriteria}</option>
                        ))}
                      </CSelect>
                  </div>
                </div>
              </div>
              <CDataTable
                items={this.state.contentSub}
                fields={this.state.fields}
                itemsPerPage={4}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <div className="row mx-md-n5">
                          <Link to={{pathname:"/kriteria/edit",
                        data:item._id}}>
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
