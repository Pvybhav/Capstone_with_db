import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import ProductRow from './ProductRow';

export default class UpdateCoursesTable extends React.Component {

  render() {
    var onUpdateCoursesTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var course = this.props.courses.map(function (course) {
      if (course.name.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onUpdateCoursesTableUpdate} course={course} onDelEvent={rowDel.bind(this)} key={course.id} />)
    });
    return (
      <div>

        {/*<div className="ui horizontal divider">
          Available Courses
        </div>*/}
        <Table celled>
          <Table.Header>
	      <Table.Row textAlign='center'>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>price</Table.HeaderCell>
          <Table.HeaderCell>category</Table.HeaderCell>
          <Table.HeaderCell>description</Table.HeaderCell>
	      </Table.Row>
	    </Table.Header>
          <Table.Body>
            {course}
          </Table.Body>       
        </Table>
	<Button color="green" className="btn btn-success pull-right">Update</Button>
      </div>
    );
  }
}