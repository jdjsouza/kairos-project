import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

class BrowseActivitiesPage extends Component {
  state = {
    selectedCauseId: 0,
  };

  componentDidMount() {
    console.log(this.props.match.params.id);

    this.props.dispatch({
      type: 'GET_POSTINGS_FOR_SELECTED_CAUSE',
      payload: this.props.match.params.id,
    });

    this.props.dispatch({
      type: 'GET_CAUSES',
    });
  }
  render() {
    return (
      <Container>
        <h1>Browse these activities!</h1>
        <Grid container spacing={2}>
          <Grid item xl={4}>
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel>Cause Type</InputLabel>
              <Select value={this.state.selectedCauseId}>
                <MenuItem value={0}>-please select-</MenuItem>
                {this.props.store.causes.map((item, index) => {
                  return <MenuItem value={item.id}>{item.cause}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl={4}>
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel>Activity Type</InputLabel>
              <Select></Select>
            </FormControl>
          </Grid>
          <Grid item xl={4}>
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel>Age Range</InputLabel>
              <Select></Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(BrowseActivitiesPage);
