import React from 'react'
import './Content.css' 

function Content() {
    return (
        <div className='content'>
            <table>
                <thead>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>User1</td>
                        <td>user1@gmail.com</td>
                        <td>pass</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>User2</td>
                        <td>user2@gmail.com</td>
                        <td>pass</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>User3</td>
                        <td>user3@gmail.com</td>
                        <td>pass</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>User4</td>
                        <td>user4@gmail.com</td>
                        <td>pass</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Content