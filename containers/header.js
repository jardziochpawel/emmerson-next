import React, {useState} from "react";
import { Header } from '../components';

import {ROUTES} from "../constants/routes";

export default function HeaderContainer({children, webp, smallView, ...restProps }){

    const [open, setOpen] = useState(false);

    const renderHeaderNav = () => {
        const array = []
        ROUTES.mainMenu.map(item =>{
            array.push(
                <Header.ButtonLink to={item.link} key={item.name}>{item.name}</Header.ButtonLink>
            )
        })

        return array;
    }

    const renderSidebarNav = () => {
        const array = [];
        ROUTES.mainMenu.map(item =>{
            array.push(
                <Header.SidebarItem to={item.link} key={item.name}>{item.name}</Header.SidebarItem>
            );
        })
        return array;
    }

    return(
        <>
            <Header webp={webp} smallView={smallView} {...restProps}>
                <Header.Frame>
                    <Header.Logo src={'/images/misc/logo.png'} to={'/'} />
                    <Header.Nav>
                        { renderHeaderNav() }
                    </Header.Nav>
                    <Header.Hamburger open={open} setOpen={setOpen} />
                    <Header.Sidebar open={open}>
                        <Header.SidebarNav>
                            { renderSidebarNav() }
                        </Header.SidebarNav>
                    </Header.Sidebar>
                </Header.Frame>
                {children}
            </Header>
        </>
    );

}