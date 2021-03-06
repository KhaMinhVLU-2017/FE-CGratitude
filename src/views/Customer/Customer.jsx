import React, { Component, Fragment } from 'react'
import Grid from "@material-ui/core/Grid";
import GridItem from '../../components/Grid/GridItem'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import Table from "components/Table/Table.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Tooltip from "@material-ui/core/Tooltip"
import { Modal as ModalAnt } from 'antd'
import {
  Form, Row, Input, DatePicker, Col
} from 'antd'

// style
import withStyles from "@material-ui/core/styles/withStyles"
import People from "@material-ui/icons/People"
import Add from '@material-ui/icons/Add'
import * as myFunc from '../../func'

var styles = {
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "bold",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  fontButton: {
    fontWeight: "bold",
    fontSize: '100px'
  }
}

class Customer extends Component {
  constructor(props) {
    super(props)
    this.state = { SModal: false }
    this.onEventModal = this.onEventModal.bind(this)
  }
  onEventModal() {
    this.setState({ SModal: !this.state.SModal })
  }
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Grid>
          <GridItem xs={12} sm={12} md={6}>
            <Tooltip id="tooltip-top"
              title="Thêm thành viên"
              placement="top"
              classes={{ tooltip: classes.tooltip }}>
              <Button className={classes.fontButton} onClick={this.onEventModal} justIcon round color="success"><Add /></Button>
            </Tooltip>
            <ModalAnt
              title={<h3><People /> Thêm thành viên</h3>}
              visible={this.state.SModal}
              onCancel={this.onEventModal}
              onOk={this.onEventModal}
              okText='Lưu'
              cancelText='Hủy'
            >
              <Row>
                <Row>
                  <Col span={12}>
                    <Form.Item label="Họ và tên" >
                      <Input name='txt_fullname' placeholder='Nguyễn Pessi'/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Điện thoại" >
                      <Input name='txt_phone' placeholder='0937999999'/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item label="Ngày sinh" >
                      <DatePicker name='txt_date' placeholder="Chọn ngày sinh" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Email" >
                      <Input name='txt_email' placeholder='pessi@gmail.com'/>
                    </Form.Item>
                  </Col>
                </Row>
              </Row>
            </ModalAnt>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info">
                <h3 className={classes.cardTitle}><People /> Danh sách thành viên</h3>
                <p>{myFunc.CorvertDateMeo(new Date())}</p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="info"
                  tableHead={['STT', 'Họ & Tên', 'Điện thoại', 'Ngày sinh']}
                  tableData={[
                    ['1', "Nguyễn Lí", "0937785858", "23/2"],
                    ['2', "Nguyễn Lí", "0937785858", "23/2"],
                    ['3', "Nguyễn Lí", "0937785858", "23/2"],
                    ['4', "Nguyễn Lí", "0937785858", "23/2"],
                    ['5', "Nguyễn Lí", "0937785858", "23/2"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Customer)