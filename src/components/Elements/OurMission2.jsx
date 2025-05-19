import React from 'react';

class OurMission2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, phone, message } = this.state;
        try {
            const response = await fetch(`https://agha-builders-email.vercel.app/api/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, phone, message }),
            });
            if (response.ok) {
                alert('Email sent successfully!');
                this.setState({ username: '', email: '', phone: '', message: '' });
            } else {
                alert('Failed to send Email.');
            }
        } catch (error) {
            // console.log(error)
            alert('An error occurred.');
        }
    };

    render() {
        return (
            <>
                <div className="section-full bg-dark ">
                    <div className="section-content">
                        <div className="container get-in-touch-form">
                            
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="contact-home1-left contact-home1-left-v2 bg-dark p-a30 m-b30 p-t50">
                                        <h3 className="text-white m-t0"><span className="font-weight-100">Get In</span> Touch</h3>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="" onSubmit={this.handleSubmit}>
                                            <div className="input input-animate">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" name="username" id="name" required value={this.state.username} onChange={this.handleChange} />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" id="email" required value={this.state.email} onChange={this.handleChange} />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="Phone">Phone</label>
                                                <input type="text" name="phone" id="Phone" required value={this.state.phone} onChange={this.handleChange} />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="message">Textarea</label>
                                                <textarea name="message" id="message" required value={this.state.message} onChange={this.handleChange} />
                                                <span className="spin" />
                                            </div>
                                            <div className="text-left p-t10">
                                                <button type="submit" className="site-button btn-effect ">
                                                    Submit Now
                    </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="get-in-touch-form-section">
                                    <div className="get-in-touch-form-section-img"><img src={require('./../../images/s-1.png')} alt="" /></div>
                                    <div className="get-in-touch-info arrow-animation">
                                        <div className="mt-icon-box-wraper  p-a20 left bg-white hover-shadow">
                                            <div className="icon-md m-b20 scale-in-center">
                                                <span className="icon-cell text-secondry"><img src={require('./../../images/icon/icon-img-01.png')} alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b0">Great Experience for Building Constrction &amp; Renovation</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>Get in Touch</strong>
                    </div> */}
                </div>
            </>
        );
    }
};

export default OurMission2;