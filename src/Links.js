import React from 'react'

const Links = () => {
    const links = [{
        id: 1,
        siteName: "Github",
        linkUrl: "https://github.com/AshongAbdallah06"
    }, {
        id: 2,
        siteName: "Frontend Mentor",
        linkUrl: "https://www.frontendmentor.io/profile/AshongAbdallah06"
    }, {
        id: 3,
        siteName: "LinkedIn"
    }, {
        id: 4,
        siteName: "Twitter",
        linkUrl: "https://twitter.com/XuGaR_2_0_0_6"
    }, {
        id: 5,
        siteName: "Instagram",
        linkUrl: "https://www.instagram.com/_.ashong_/"
    }];


    const listItems = links.map(link => (
        <a href={link.linkUrl} target='_blank'>
            <li key={link.id}>{link.siteName}</li>
        </a>
    ))

    return (
        <section>
            <ul>{listItems}</ul>
        </section>
    )
}

export default Links