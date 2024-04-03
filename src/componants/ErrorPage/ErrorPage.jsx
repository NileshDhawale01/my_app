import React from 'react'
import './ErrorPage.css'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div class="error-container">
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but the page you're looking for cannot be found.</p>
            <Link to={'/'} className='HomeLink'>Go back to homepage</Link>
        </div>
    )
}

export default ErrorPage