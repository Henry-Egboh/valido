import { Si42, SiAnalogue } from "react-icons/si";
import { Si4Chan } from "react-icons/si";
import { SiAlltrails } from "react-icons/si";
import { BsWhatsapp, BsTwitter, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className='bg-dark'>
                {/* row one */}
            <main className='row-1'>
                {/* col one */}
                <main className='list-img'>
                    <section className='footer-list'>
                        <div>
                            <h4>Check Out</h4>
                            <ul>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Check Out</h4>
                            <ul>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Check Out</h4>
                            <ul>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Check Out</h4>
                            <ul>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                                <li><Link to='/'>Restore Beat</Link></li>
                            </ul>
                        </div>
                    </section>

                    <section className='footer-text-img'>
                        <div>
                            <Si42 className="fs-2" />
                            <h4>React & Stuff</h4>
                            <cite>Wuruku Learning</cite>
                            <p>When you start well, just know that we will continue learning regardless and you will know.
                            </p>
                        </div>
                        <div>
                            <Si4Chan className="fs-2" />
                            <h4>React & Stuff</h4>
                            <cite>Wuruku Learning</cite>
                            <p>When you start well, just know that we will continue learning regardless and you will know.
                            </p>
                        </div>
                        <div>
                            <SiAlltrails className="fs-2" />
                            <h4>React & Stuff</h4>
                            <cite>Wuruku Learning</cite>
                            <p>When you start well, just know that we will continue learning regardless and you will know.
                            </p>
                        </div>
                    </section>
                </main>

                <main className='bg-light bg-opacity-25 wrapper subscribe-section'>

                    <div className='sub-sec'> 
                        <div>
                            <h2 className="fs-5 mb-3 text-center">Subscribe</h2>
                            <form>
                                <input className='shadow rounded p-2 sub-input' type='email' placeholder='Enter email' name='email' />
                                <button className='p-2 butt rounded ms-2 mt-3 mt-xxl-0' type='submit'>Submit</button>
                            </form>
                        </div>
                        <div className='logo-footer'>
                            <SiAnalogue className="fs-2" />
                            <h4>Valido Restaurant Ltd.</h4>
                            <p>Recipe for everyone</p>
                            <div className='hor-list'>
                                <ul>
                                    <li><Link to='/'>Mission</Link></li>
                                    <li><Link to='/'>Vision</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </main>
            {/* row two */}
            <main className="base-footer">
                <div>
                    <ul>
                        <li><Link to='/'>Vanilla Javascript</Link></li>
                        <li><Link to='/'>Bootstrap is complex for this</Link></li>
                        <li><Link to='/'>CSS Grid is well suited for the layout</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to='/'>Vanilla Javascript</Link></li>
                        <li><Link to='/'>Bootstrap is complex for this</Link></li>
                        <li><Link to='/'>CSS Grid is well suited for the layout</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to='/'>Vanilla Javascript</Link></li>
                        <li><Link to='/'>Bootstrap is complex for this</Link></li>
                        <li><Link to='/'>CSS Grid is well suited for the layout</Link></li>
                    </ul>
                </div>
                <div>
                    <p>Follow us:</p>
                    <div className="d-flex gap-4 social">
                        <Link to='/'><BsWhatsapp className="fs-4" /></Link>
                        <Link to='/'><BsTwitter className="fs-4" /></Link>
                        <Link to='/'><BsInstagram className="fs-4" /></Link>
                        <Link to='/'><BsFacebook className="fs-4" /></Link>
                        <Link to='/'><BsWhatsapp className="fs-4" /></Link>
                        <Link to='/'><BsLinkedin className="fs-4" /></Link>
                    </div>
                </div>
            </main>
            
        </footer>
    );
}

export default Footer;