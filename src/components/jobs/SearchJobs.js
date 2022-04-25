import React, { useContext, useEffect, useState } from 'react';
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import {BiSearch} from 'react-icons/bi';
import JobContext from '../../context/job/jobContext';

const SearchJobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, searchJobs } = jobContext;

    // useEffect(() => {
    //     searchJobs();
    // }, []);

    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            console.log('Please enter something', 'light');
        } else {
            searchJobs(jobs);
            setText('');
            console.log(jobs);
        }
    }

  return (
    <div className="home-form text-center">
        <Form style={{ paddingLeft: '2.5rem' }} onSubmit={onSubmit}>
        <Row className="align-items-center">
            <Col xs={4} className="my-4 px-1">
            <InputGroup>
                <FormControl 
                id="inlineFormInputGroupUsername" 
                placeholder="Job title"
                name='text'
                value={text}
                onChange={onChange} 
                />
                <InputGroup.Text><BiSearch /></InputGroup.Text>
            </InputGroup>
            </Col>
            <Col xs={4} className='mt'>
            <Form.Select aria-label="Default select example">
                <option>Region</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Col>
            <Col xs="auto" className="my-1">
            <Button type="submit">Find Now</Button>
            </Col>
        </Row>
        </Form>
        <p><span>Popular Searches:</span> Designer, Developer, Web, Engineer, Senior</p>
        {/* { jobs.length > 0 && <button className="btn btn-light btn-block" >Clear</button> } */}
    </div>
  );
};

export default SearchJobs;