import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className='thumbnail'></div>

            <div className='top'>
                <div className='Container_full_top'>
                    <div id='offline_banner' className='offline_banner'>
                        <span>No Internet connection...</span>
                    </div>
                    
                    <header data-i18n-ns='main/header'>
                        <Link className='Container_site_title' to='/'>
                            <span className='site_title'>mySelf</span>
                        </Link>

                        <nav>
                            <Link to='/habilities'>
                                <span data-i18n='header.1_url'></span>
                            </Link>

                            <Link to='/resources'>
                                <span data-i18n='header.2_url'></span>
                            </Link>

                            <Link to='/FAQs'>
                                <span data-i18n='header.3_url'></span>
                            </Link>

                            <Link to='/contact'>
                                <span data-i18n='header.4_url'></span>
                            </Link>
                        </nav>

                        <select className='languageSelect' onChange={(event) => window.setLanguage(event.target.value)}>
                            <option value='pt'>pt-PT</option>
                            <option value='en'>en-US</option>
                        </select>

                        <button className='header_ham_menu_button' id='header_ham_menu_button'>
                            <div className='HMI_bar_1'></div>
                            <div className='HMI_bar_2'></div>
                            <div className='HMI_bar_3'></div>
                        </button>
                    </header>

                    <div
                        id='_fullPage_dropDownMenu'
                        className='_fullPage_dropDownMenu'
                        data-i18n-ns='main/header'
                    >
                        <nav>
                            <Link to='/habilities'>
                                <span data-i18n='header.1_url'></span>
                            </Link>

                            <Link to='/resources'>
                                <span data-i18n='header.2_url'></span>
                            </Link>

                            <Link to='/FAQs'>
                                <span data-i18n='header.3_url'></span>
                            </Link>

                            <Link to='/contact'>
                                <span data-i18n='header.4_url'></span>
                            </Link>
                        </nav>

                        <select className='languageSelect' onChange={(event) => window.setLanguage(event.target.value)}>
                            <option value='pt'>pt-PT</option>
                            <option value='en'>en-US</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}