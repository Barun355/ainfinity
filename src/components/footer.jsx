import React from 'react'

export default function Footer() {
    return (
        <footer className="border-t flex flex-col items-center bg-muted">
            <div className="grid gap-6 lg:gap-14 sm:grid-cols-2 lg:grid-cols-4 pt-10">
                <div className="space-y-4">
                    <h3 className="font-semibold text-orange-500">About</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Company</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Team</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Careers</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold text-orange-500">Courses</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Financial Modelling</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Machine Learning</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Data Analytics</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold text-orange-500">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Documentation</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Help Center</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold text-orange-500">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my-8 border-t pt-8 text-center w-full flex justify-center items-center">
                <p className='text-black text-sm'>© 2024 Online Coaching Company. All rights reserved.</p>
            </div>
        </footer>
    )
}
