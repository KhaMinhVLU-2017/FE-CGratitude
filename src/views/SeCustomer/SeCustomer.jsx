import React, { Component } from 'react'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import CustomInput from '../../components/CustomInput/CustomInput'
import InputAdornment from "@material-ui/core/InputAdornment"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import People from "@material-ui/icons/People"
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Info from "components/Typography/Info.jsx";
import AttachMoney from "@material-ui/icons/AttachMoney"
import Person from "@material-ui/icons/Person"
import {
	cardTitle,
	cardSubtitle,
	cardLink
} from "assets/jss/material-dashboard-react.jsx"

const styles = {
	cardTitle,
	cardSubtitle,
	cardLink
}

class SeCustomer extends Component {
	render() {
		const { classes } = this.props
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<CustomInput
						labelText="Tìm kiếm qua số  điện thoại"
						id="material"
						formControlProps={{
							fullWidth: true
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<People />
								</InputAdornment>
							)
						}}
					/>
				</GridItem>
				<GridItem xs={12} sm={12} md={12}>
					<Card style={{ width: "20rem" }}>
						<CardBody>
							<h4 className={classes.cardTitle}><Info><h3><strong>Nguyễn Tô Yến Nhi</strong></h3></Info></h4>
							<Muted>
								<h6 className={classes.cardSubtitle}>Thành viên</h6>
							</Muted>
							<p>
								<strong>Số lần quy đổi: </strong> <span>2</span>
							</p>
							<p>
								<strong>Tổng số điểm: </strong> <span>150</span>
							</p>
							<GridContainer>
								<GridItem xs={6} sm={6} md={6}>
									<Button type='button' style={{width:130}} color='rose' round><AttachMoney />Add Poin</Button>
								</GridItem>
								<GridItem xs={6} sm={6} md={6}>
									<Button type='button' style={{width:130}} color='info' round><Person />Info</Button>
								</GridItem>
							</GridContainer>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer >
		)
	}
}

export default withStyles(styles)(SeCustomer)