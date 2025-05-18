import React from 'react';
import { Link } from 'react-router-dom';
const services = [
    {
        count: 1,
        title: 'General Contracting',
        flaticon: 'flaticon-city',
        description: 'We handle full-scale projects with precision, ensuring quality and timely delivery for every client. Our comprehensive services include:',
        details: [
            'Pre-Construction Planning – Site analysis, budgeting, and feasibility studies.',
            'Project Management – End-to-end oversight for seamless execution.',
            'Cost Estimation & Control – Transparent pricing and budget adherence.',
            'Subcontractor Coordination – Vetted partners for specialized trades.',
            'Quality Assurance Inspections – Rigorous checks at every phase.'
        ],
    },
    {
        count: 2,
        title: 'Renovation',
        flaticon: 'flaticon-paint',
        description: 'We transform existing spaces with innovative solutions, blending functionality and aesthetics to meet modern needs. Our renovation expertise covers:',
        details: [
            'Kitchen & Bathroom Upgrades – Modern layouts with premium finishes',
            'Structural Modifications – Safe alterations for open-concept living',
            'Historic Preservation – Period-accurate restorations',
            'Commercial Space Reconfigurations – Optimizing workflows and branding',
            'Accessibility Remodeling – ADA-compliant designs for inclusive spaces'
        ],
    },
    {
        count: 3,
        title: 'Construction',
        flaticon: 'flaticon-crane',
        description: 'We deliver robust, code-compliant structures from ground-up, combining engineering excellence with practical functionality. Our construction services include:',
        details: [
            'Commercial Builds - Office complexes, retail spaces, and mixed-use developments',
            'Residential Communities - Single-family homes to high-density housing',
            'Institutional Projects - Schools, hospitals, and government facilities',
            'Industrial Facilities - Warehouses, factories, and processing plants',
            'Foundation Systems - Slabs, piles, and earthquake-resistant designs'
        ],
    },
    {
        count: 4,
        title: 'Interior Finishes',
        flaticon: 'flaticon-decorating',
        description: 'We perfect every surface with premium materials and craftsmanship, ensuring flawless results that stand the test of time. Our finishing expertise includes:',
        details: [
            'Drywall & Plastering - Seamless walls and decorative finishes',
            'Flooring Systems - Hardwood, tile, epoxy, and specialty surfaces',
            'Façade Cladding - Brick, stone, metal, and composite exteriors',
            'Trim & Millwork - Custom carpentry for doors, windows, and moldings',
            'Protective Coatings - Weather-resistant paints and sealants'
        ],
    },
    {
        count: 5,
        title: 'Specialty Contracting',
        flaticon: 'flaticon-worker',
        description: 'We deliver precision solutions for complex project requirements through specialized skills and cutting-edge techniques. Our niche services include:',
        details: [
            'Concrete Formwork & Precasting - Custom molds and structural components',
            'Steel Fabrication & Erection - Industrial-grade metal frameworks',
            'Glazing Systems - Curtain walls and energy-efficient glass installations',
            'Ornamental Metals - Decorative gates, railings, and architectural features',
            'Demolition & Deconstruction - Controlled teardowns with material recovery'
        ],
    },
    {
        count: 6,
        title: 'Electric Automation',
        flaticon: 'flaticon-rss',
        description: 'We integrate intelligent systems that optimize energy use, enhance safety, and future-proof your property. Our automation expertise includes:',
        details: [
            'Smart Lighting Systems - Motion-activated and daylight-responsive controls',
            'HVAC Automation - AI-driven climate management for peak efficiency',
            'Security Integration - Unified surveillance, access control and alarm systems',
            'Industrial PLCs - Programmable logic controllers for manufacturing',
            'Voice/App-Controlled Environments - Seamless residential & commercial automation'
        ],
    },
    {
        count: 7,
        title: 'Civil & Site Work',
        flaticon: 'flaticon-builder',
        description: 'We transform raw land into fully prepared development sites through precision grading and infrastructure expertise. Our earthwork services include:',
        details: [
            'Site Preparation - Clearing, grubbing, and demolition',
            'Grading & Excavation - Precision earthmoving for proper drainage',
            'Utility Installation - Water, sewer, and stormwater systems',
            'Roadwork & Paving - Asphalt and concrete roadway construction',
            'Erosion Control - Silt fencing, sediment basins, and stabilization'
        ],
    },
    {
        count: 8,
        title: 'MEP Works',
        flaticon: 'flaticon-drill',
        description: 'We engineer high-performance mechanical, electrical, and plumbing systems that optimize building efficiency and occupant comfort. Our integrated solutions include:',
        details: [
            'HVAC Systems - Energy-efficient heating, cooling, and ventilation design',
            'Electrical Distribution - Panel upgrades, sub-stations, and load calculations',
            'Plumbing Networks - Water supply, waste removal, and gas line installations',
            'Fire Protection - Sprinkler systems and emergency lighting',
            'Building Automation - Smart controls for unified MEP operation'
        ],
    },
    {
        count: 9,
        title: 'Demolition & Removal',
        flaticon: 'flaticon-crane-1',
        description: 'We execute safe, strategic dismantling of structures with precision debris management and site recovery. Our specialized services include:',
        details: [
            'Selective Demolition - Targeted removal of specific building components',
            'Interior Strip-Outs - Complete clearing of mechanical systems and finishes',
            'Structural Teardowns - Full building collapses using implosion techniques',
            'Hazardous Material Abatement - Asbestos, lead, and mold remediation',
            'Site Recycling - 90%+ material recovery for sustainable disposal'
        ],
    },
    {
        count: 10,
        title: 'Paving & Surfacing',
        flaticon: 'flaticon-road',
        description: 'We deliver durable, high-performance surfaces for all traffic needs using premium materials and precision installation. Our paving expertise includes:',
        details: [
            'Asphalt Paving - Hot-mix applications for roads and parking lots',
            'Concrete Flatwork - Reinforced slabs and decorative finishes',
            'Permeable Pavements - Eco-friendly solutions for stormwater management',
            'Resurfacing & Rehabilitation - Crack sealing and overlay systems',
            'Pavement Markings - Thermoplastic striping and signage installations'
        ],
    },
    {
        count: 11,
        title: 'Elevator Installation',
        flaticon: 'flaticon-entrance',
        description: 'We engineer precision vertical transportation systems that combine cutting-edge technology with rigorous safety standards. Our comprehensive solutions include:',
        details: [
            'Traction & Hydraulic Elevators - Custom configurations for all building types',
            'ADA-Compliant Lifts - Barrier-free access solutions',
            'Machine-Room-Less (MRL) Systems - Space-saving modern installations',
            'Destination Dispatch Controls - AI-optimized traffic management',
            'Maintenance Programs - 24/7 monitoring and preventive care'
        ],
    },
    {
        count: 12,
        title: 'Termite & Pest Control',
        flaticon: 'flaticon-hotel',
        description: 'We safeguard structures from biological threats with preventive treatments and eco-conscious eradication methods. Our protective services include:',
        details: [
            'Termite Barriers - Chemical and physical colony prevention systems',
            'Wood Borer Treatments - Structural timber preservation',
            'Rodent Proofing - Building entry point sealing',
            'Green Pest Solutions - Low-toxicity organic treatments',
            'Post-Construction Protocols - Warranty-backed maintenance programs'
        ],
    }
]

var img1 = require('./../../images/background/bg-5.png');
var img2 = require('./../../images/background/line.png');

class OurServices3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false,
        };
    }

    componentDidMount(){
        function loadScript(src) {
            return new Promise(function(resolve, reject){
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                    // Remove script after it loads
                    document.body.removeChild(script);
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                    // Remove script if error occurs
                    document.body.removeChild(script);
                });
                document.body.appendChild(script);
            });
        }

        loadScript('./assets/js/masonary.js');
    }

    render() {
        // Always show all services
        const visibleServices = services;

        return (
            <>


            
                <div className="section-full p-t50 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">All</span> Services</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}

                        <table className="table table-striped">                             
  <tbody>
    <tr>
      <td>General Contracting</td>
      <td>Electric Automation</td>
      <td>Complete Solar Energy Solutions</td>
    </tr>
    <tr>
      <td>Civil & Site Work</td>
      <td>Structural Construction</td>
      <td>Roofing & Exteriors</td>
    </tr>
    <tr>
      <td>MEP (Mechanical, Electrical, Plumbing)</td>
      <td>Interior Finishes</td>
      <td>Renovation & Remodeling</td>
    </tr>
    <tr>
      <td>Demolition & Waste Removal</td>
      <td>Paving & Surfacing</td>
      <td>Termite & Pest Control</td>
    </tr>
    <tr>
      <td>Flooring Installation</td>
      <td>Landscaping & Hardscaping</td>
      <td>Painting & Coating</td>
    </tr>
    <tr>
      <td>Waterproofing & Insulation</td>
      <td>Site Preparation & Excavation</td>
      <td>Foundation & Structural Work</td>
    </tr>
    <tr>
      <td>Electrical & Lighting Installation</td>
      <td>HVAC Installation & Maintenance</td>
      <td>Plumbing & Drainage Systems</td>
    </tr>
    <tr>
      <td>Fire Protection & Safety Systems</td>
      <td>Roofing & Waterproofing</td>
      <td>Carpentry & Millwork</td>
    </tr>
    <tr>
      <td>Drywall & Ceiling Installation</td>
      <td>Concrete & Masonry Work</td>
      <td>Specialty Contracting</td>
    </tr>
  </tbody>
</table>

                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-center">
                                        <div className="mt-separator">
                                             <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Services </span> Details</h2>
                                                <p></p>
                                    </div>
                            </div>
                        </div>
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div
                                className="row"
                                style={{
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'stretch', // Ensures columns stretch to same height
                                }}
                            >
                                {visibleServices.map((item, index) => (
                                    <div
                                        key={index}
                                        className="col-md-4 col-sm-6"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginBottom: '30px', // keep spacing between rows
                                        }}
                                    >
                                        <Link
                                            to="/gallery"
                                            style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
                                        >
                                            <div
                                                className="mt-icon-box-wraper p-a30 center box-shadow bg-white"
                                                style={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-start',
                                                }}
                                            >
                                                <div className="mt-icon-box-sm inline-icon text-primary m-b20 radius bg-primary scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                                    <span className="icon-cell text-secondry">
                                                        <i className={item.flaticon} style={{ color: '#fff' }} />
                                                    </span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    {item.details && (
                                                        <ul style={{ textAlign: 'left', margin: '0 0 10px 20px', padding: 0 }}>
                                                            {item.details.map((detail, i) => (
                                                                <li key={i}>{detail}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {/* Read More button removed */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {/* Expand button removed */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServices3;