import React from 'react'
import { Link } from 'react-router-dom'
import { VscGithub } from "react-icons/vsc";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";



function index() {
    return (
<div class="footer-basic">
        <footer>
            <div class="social">
                <Link className='a' to="https://www.instagram.com/galloaugusto/"><TiSocialInstagram/></Link>
                <Link to="https://github.com/AugustoGa"><VscGithub/></Link>
                <Link to="https://www.linkedin.com/in/augusto-gallo-ab1150150/"><TiSocialLinkedin/></Link>
                <Link to="https://www.facebook.com/augusto.gallo"><TiSocialFacebook/></Link>
                <Link to="#"><TfiEmail/></Link>
                </div>
            <p class="copyright">Company Name © 2023</p>
        </footer>
        </div>
    )
}

export default index