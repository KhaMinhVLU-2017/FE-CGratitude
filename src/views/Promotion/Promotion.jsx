import React, { Component, Fragment } from 'react'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import Button from 'components/CustomButtons/Button'
import GridContainer from "components/Grid/GridContainer"
import TableCheck from 'components/Table/TableCheck'
import { Modal } from 'antd'

const styles = {
	cardTitle: {
		marginTop: "0",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},
	btnCirl: {
		background: "#56b65ae6"
	},
	divCard: {
		background: "#e8e6e1",
		borderRadius: "20px",
		boxShadow: "3px 3px 6px 0px",
		padding: "5px 12px"
	}

}

class Promotion extends Component {
	constructor(props) {
    super(props)
    this.state = {stModal: false}
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    console.log(this.state.stModal)
    this.setState({stModal: !this.state.stModal})
  }
  evenCloseModal() {
    this.state({stModal: false})
  }
	render() {
		const { classes } = this.props
		return (
			<Fragment>
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="success">
							<h4 className={classes.cardTitle}><strong>Khuyến mãi hè về</strong></h4>
							<p>Chương trình kéo dài 2018-2019</p>
						</CardHeader>
						<CardBody>
							<div className={classes.divCard}>
								<GridContainer >
									<GridItem xs={3} sm={3} md={3}>
										<Button onClick={this.toggleModal} className={classes.btnCirl} justIcon round color='info' >10% </Button>
									</GridItem>
									<GridItem xs={3} sm={3} md={3}>
										<Button onClick={this.toggleModal} className={classes.btnCirl} justIcon round color='info' >5% </Button>
									</GridItem>
									<GridItem xs={3} sm={3} md={3}>
										<Button onClick={this.toggleModal} className={classes.btnCirl} justIcon round color='info' >5% </Button>
									</GridItem>
									<GridItem xs={3} sm={3} md={3}>
										<Button onClick={this.toggleModal} className={classes.btnCirl} justIcon round color='info' >5% </Button>
									</GridItem>
									<GridItem xs={12} sm={12} md={12}>
										<ul style={{ padding: 15 }}>
											<li>Mỗi ô trị giá 200k. Tích đủ 10 ô được giảm giá 10% cho lần thứ nhất, 5% cho 4 lần tiếp theo</li>
											<li>Trước sinh nhật 3 ngày được giảm giá 10% chỉ 1 lần</li>
											<li><strong><em>** Lưu ý</em></strong>: Thẻ ngày không có giá trị quy đổi thành tiền mặt, không áp dụng với các chương trình khuyến mãi khác</li>
										</ul>
									</GridItem>
								</GridContainer>
							</div>
						</CardBody>
					</Card>
				</GridItem>
      </Fragment>
		)
	}
}

export default withStyles(styles)(Promotion)