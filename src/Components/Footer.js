import { Si42, SiAnalogue } from "react-icons/si";
import { Si4Chan } from "react-icons/si";
import { SiAlltrails } from "react-icons/si";
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className='bg-dark'>
            <div>
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
                        <div className=''>
                            <form>
                                <input className='rounded p-2 sub-input' type='email' placeholder='Enter email' name='email' />
                                <button className='p-2 btn-light butt rounded ms-2' type='submit'>Submit</button>
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
            </div>
        </footer>
    );
}

export default Footer;