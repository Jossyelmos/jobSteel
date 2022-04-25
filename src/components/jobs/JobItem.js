import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { BiBriefcase } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsShieldCheck, BsBookmark } from 'react-icons/bs';
import Moment from 'react-moment';
import image from '../../images/comp-logo.jpg';
import PropTypes from 'prop-types';

const JobItem = ({ job: { title, company, created_at, type, location } }) => {

  return (
    <Card style={{ borderRadius: '8px' }}>
        <Card.Body className='card_main opa'>
            <Card.Title className='grid-3 py-1 comp_logo'>
                <div className="">
                    <img 
                        src={image} 
                        alt="Mojombo..." 
                        className='round-img' 
                        style={{ width: '50px' }} 
                    />
                </div>
                <div className='job_desc'>
                    <h6>{title}</h6>
                    <p className='text-primary' style={{ fontSize: '11px' }}>
                        {company}
                        <span className='text-grey'><IoLocationOutline style={{ marginTop: '-2px' }} /> {location} 
                        <span><BiBriefcase style={{ marginTop: '-3px' }} /> {type}</span> <span><AiOutlineClockCircle style={{ marginTop: '-3px' }} /> <Moment fromNow>{created_at}</Moment></span></span>
                    </p>
                </div>
            </Card.Title>
            <Card.Text className='card-text'>
            We want someone who has been doing this for a solid 2-3 years.
            We want someone who can demonstrate an extremely strong portfolio.
            </Card.Text>
            <div className="gris-2">
                <div>
                    <Button variant="danger" size="sm">Urgent</Button> 
                    <Button variant="info" size="sm">Senior</Button>{' '}
                    <Button variant="light" size="sm"><GoPrimitiveDot /> {type}</Button>
                    <div style={{ float: 'right', margin: '8px' }}>
                        <BsShieldCheck />
                        <BsBookmark style={{ marginLeft: '7px' }}/>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
};

JobItem.propTypes = {
    job: PropTypes.object.isRequired
}

export default JobItem;