import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='absolute'>
            <div className='footer bg-slate-500 bottom-0 fixed text-black-50  flex justify-between py-2  items-center min-h-[5vh] min-w-[100vw]'>
                <div className="first ml-2 ">
                    <div>You're just one task away from achieving more. Keep going!</div>
                </div>
                <div className="second ">
                    Made with ❤️ to simplify your day.
                </div>
                <div className="third mr-3">
                    Need help? Contact us | Privacy Policy | Terms of Service
                </div>
            </div>
        </footer>
    )
}

export default Footer
