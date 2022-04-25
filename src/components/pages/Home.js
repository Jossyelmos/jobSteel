import React from 'react';
import { Col, Button, Container, Card } from 'react-bootstrap';
import JobItem from '../jobs/JobItem';
import StarRatings from '../layout/StarRatings';
import image1 from '../../images/Capture.PNG';
import image2 from '../../images/Capture2.PNG';
import image3 from '../../images/teams.jpg';
import image4 from '../../images/man-1.jpg';
import image5 from '../../images/raphael.jpg';
import image6 from '../../images/miley.jpg';
import SearchJobs from '../jobs/SearchJobs';

const Home = () => {
  const jobs = [
    {
      'id': '648e9f97-81fc-42c7-b44f-84d291717e29',
      'type': 'Full Time',
      'created_at': 'Fri Jan 18 20:15:16 UTC 2019',
      "company": "Nordic Backup, Inc.",
      "location": "Lake Mary",
      "title": "Experienced C++ developer",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDljIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--95a62d77d7edffd9a332742f9b8f38d215a78471/Nordic-Backup-logo-hi.jpg"
    },
    {
      'id': '8456aec4-865b-41a5-b530-be77a7cff09e',
      'type': 'Full Time',
      'created_at': 'Fri Jan 18 19:18:04 UTC 2019',
      "company": "October Swimmer",
      "location": "Remote",
      "title": "Software Developer",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaGxjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b30edec738a608f3195a236d89ab98f5ba3189fc/October%20Swimmer%20Logo%20Final-01.png"
    },
    {
      'id': 'bb925d29-c34a-4703-b8f4-01b2bed7f61d',
      'type': 'Full Time',
      'created_at': 'Fri Jan 18 17:15:56 UTC 2019',
      "company": "Rebilly Inc.",
      "location": "Montreal, Quebec, CA",
      "title": "Senior PHP Developer",
      "company_logo": null
    },
    {
      'id': '8adcea88-e045-4114-9ce2-6eb7508f719f',
      'type': 'Full Time',
      'created_at': 'Fri Jan 18 16:12:36 UTC 2019',
      "company": "Apple Inc.",
      "location": "Cupertino, CA",
      "title": "Engineer, macOS Installation",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaE5jIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a184497111fa346321bee05ec5ec76eddaefe314/Apple_300x300.jpeg"

    },
    {
      'id': '547abd33-9aeb-4574-9119-403d52d0d37d',
      'type': 'Full Time',
      'created_at': 'Fri Jan 18 13:06:37 UTC 2019',
      "company": "CGM Clinical Deutschland GmbH",
      "location": "Oberessendorf",
      "title": "Junior Softwareentwickler (m/w/d) C# / .NET",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3RjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4cfc91cb674f7207dc59f13435eb63b56c8381a7/Compugroup.jpg"

    },
    {
      'id': 'de930ba0-4f10-46ab-be18-17cfe7e26f47',
      'type': 'Full Time',
      'created_at': 'Fri Jan 18 09:54:10 UTC 2019',
      "company": "Sticker Mule",
      "location": "Remote",
      "title": "Sr. full-stack software engineer - JS + Ruby",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0pjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--35f6201e9066caf57547d2dd9d911004edfa8437/01-sticker-mule-logo-dark-stacked.png"
    }
  ]

  return (
    <div>
      <div className='home-top'>
        <div className="top-container">
          <div className="home-head">
              <h1 className='text-center'>There Are 98.688 Opportunities Here For You!</h1>
          </div>
          <div className="grid-3 home-mid">
            <div className="img1">
              <img src={image2} alt="" />
            </div>
            <SearchJobs />
            <div className="img2">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="home-shows">
            <h1 className='text-center'>Featured Jobs</h1>
            <p className='text-center'>The #1 Job Board For Hiring Creattive Professionals</p>
        </div>
        <div style={userStyle}>
          {jobs.map((job) => (
             <JobItem key={job.id} job={job}/>
          ))}
        </div>
        <div className="grid-2 home-b">
            <div className="text-left home-b1">
                <div className="home-b1-1"></div>
                <div className="home-b1-2">
                  <img src={image3} alt=""/>
                </div>
                <div className="home-b1-3"></div>
            </div>
            <div className="home-b2">
                <div className="grid-2 home-b2-1">
                  <div></div>
                  <div className='home-b2-d'>
                    <p className='text-primary'>Find jobs</p>
                    <h2>Create free account and start apply your dream job</h2>
                    <p className='par-2 py-1'>Your great dream job is awaiting you. You are just few minutes away from your dream job</p>
                    <Col xs="auto" className="my-1">
                      <Button type="submit">Explore More</Button>
                    </Col>
                  </div>
                </div>
            </div>
        </div>
        <div className="home-shows-2">
            <h1 className='text-center'>Our Happy Customer</h1>
            <p className='text-center'>When it comes to choosing the right web hosting, we know how easy to get overwhelmed with numbers</p>
        </div>
        <div style={cardStyle}>
          <Card style={{ borderRadius: '8px' }}>
              <Card.Body className='card_main-2 all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src={image4} 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa'>
                  We were on the hunt for a designer who is exeptional in both making incredible product interfaces. As well as
                  </Card.Text>
                  <StarRatings />
                  <div className="cust">
                    <h6>Sarah Harding</h6>
                    <p className='opa-1'>Visual Designer</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px'}}>
              <Card.Body className='card-body-2  all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src={image5} 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa'>
                  We were on the hunt for a designer who is exeptional in both making incredible product interfaces. As well as
                  </Card.Text>
                  <StarRatings />
                  <div className="cust">
                    <h6>Sarah Harding</h6>
                    <p className='opa-1'>Visual Designer</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='card-body-2  all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src={image6} 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa'>
                  We were on the hunt for a designer who is exeptional in both making incredible product interfaces. As well as
                  </Card.Text>
                  <StarRatings />
                  <div className="cust">
                    <h6>Sarah Harding</h6>
                    <p className='opa-1'>Visual Designer</p>
                  </div>
              </Card.Body>
          </Card>
        </div>
        <div className="home_div all-center">
            <h1 className='text-center'>Browse By Category</h1>
            <p className='text-center'>Find the type of work you need, clearly defined and ready to start. work begins as soon as you puechase and provide requirments.</p>
        </div>
        <div className='grid-4 my-3'>
          <Card style={{ borderRadius: '8px' }}>
              <Card.Body className=' all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                  Marketing & Communications
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>56 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px'}}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                  Content Writer
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>68 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                  Marketing Director
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>73 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                    System Analyst
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>49 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1608474498735-cabbe7461503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                    Business Development
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>49 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1603778509452-a8f8fd963357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                    React Developer
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>49 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                      <img 
                          src='https://images.unsplash.com/photo-1605642634357-80a58f89af26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                          alt="Mojombo..." 
                          className='round-img' 
                          style={{ width: '60px', height: '60px', marginTop: '10px' }} 
                      />
                  </Card.Title>
                  <Card.Text className='card-text opa p2'>
                    Back-End Developer
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>49 Available Vacancies</p>
                  </div>
              </Card.Body>
          </Card>
          <Card className='' style={{ borderRadius: '8px' }}>
              <Card.Body className='all-center'>
                  <Card.Title className='py-3 comp_logo'>
                  </Card.Title>
                  <Card.Text className='card-text p3 comp_logo'>
                    18,265+
                  </Card.Text>
                  <div className="cust">
                    <p className='opa-1'>Jobs are waiting for you</p>
                  </div>
                  <Col xs="auto" className="my-1">
                    <Button type="submit">Explore More</Button>
                  </Col>
              </Card.Body>
          </Card>
        </div>
        <div className="home_div2 all-center">
            <h1 className='text-center'>From Blogs</h1>
            <p className='text-center'>Latest News & Events</p>
        </div>
      </Container>
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
  marginBottom: '4rem'
}

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  marginBottom: '4rem'
}

export default Home;