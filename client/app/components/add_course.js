import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

// import '../styles/App.css';
import { AddCourses } from './ManageCourses';

const AddCourse = () => (
<div>
	<Segment>
		<Header as='h3' 
		textAlign='center'
		>
			Add your courses
		</Header>
	</Segment>
	<AddCourses />
</div>
);

export default AddCourse;


