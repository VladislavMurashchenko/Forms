import React, { Component } from 'react';
import './FormsList.css';
import { connect } from 'react-redux';

import { FormInfo } from '../FormInfo/FormInfo';

class FormsList extends Component {

  render() {
    return (
      <ul className="forms-list">
        {
          this.props.formsInfo && this.props.formsInfo.map(form => {
            return (
              <FormInfo key={form.id}
                        id={form.id}
                        name={form.name}
                        description={form.description}
                        image={form.image}
                        currentPath={this.props.pathname}/>
            );
          })
        }
      </ul>
    );
  }
}

export default connect(
  state => ({
    formsInfo: state.formsInfo,
    pathname: state.routing.locationBeforeTransitions.pathname
  })
)(FormsList);
