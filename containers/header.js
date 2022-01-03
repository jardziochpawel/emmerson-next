import React, {useEffect, useRef, useState} from "react";
import {Header, Popup} from '../components';

import {ROUTES} from "../constants/routes";
import useLocalStorage from "../hooks/useLocalStorage";
import {useOnClickOutside} from "../hooks";

export default function HeaderContainer({children, webp, smallView, ...restProps }){

    const [open, setOpen] = useState(false);
    // const [loadPopUp, setLoadPopUp] = useState(false);
    // const [isOpenPopup, setIsOpenPopup] = useLocalStorage('isOpenPopup', true)

    const node = useRef();

    const renderHeaderNav = () => {
        const array = []
        ROUTES.mainMenu.map(item =>{
            array.push(
                <Header.ButtonLink to={item.link} key={'header_nav_'+item.name}>{item.name}</Header.ButtonLink>
            )
        })

        return array;
    }

    const renderSidebarNav = () => {
        const array = [];
        ROUTES.mainMenu.map(item =>{
            array.push(
                <Header.SidebarItem to={item.link} key={'sidebar_nav_'+item.name}>{item.name}</Header.SidebarItem>
            );
        })
        return array;
    }

    // useEffect(()=>{
    //     setTimeout(()=>setLoadPopUp(true), 500);
    // },[])

    useOnClickOutside(node, () => setIsOpenPopup(false));

    return(
        <>
            {/*{loadPopUp && <Popup isOpenPopup={isOpenPopup}>*/}
            {/*    <Popup.Background />*/}
            {/*    <Popup.Box node={node} background={'/images/misc/popup.jpg'}/>*/}
            {/*</Popup>}*/}
            <Header webp={webp} smallView={smallView} {...restProps}>
                <Header.Frame>
                    <Header.Logo src={'/images/misc/logo.jpg'} to={'/'} />
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