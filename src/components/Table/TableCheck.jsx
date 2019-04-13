import React, { Component, Fragment } from 'react'
import Button from '../CustomButtons/Button'
import Grid from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'

class TableCheck extends Component {
  render() {
    return (
      <Fragment>
        <Grid xs={12} md={12} sm={12}>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
        </Grid>
        <Grid xs={12} md={12} sm={12}>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
          <GridItem xs={2} md={2} sm={2}>
            <Button justIcon round color='warning'></Button>
          </GridItem>
        </Grid>
      </Fragment>
    )
  }
}

export default TableCheck