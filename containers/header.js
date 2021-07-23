import React, {useState} from "react";
import { Header } from '../components';

import {ROUTES} from "../constants/routes";

export default function HeaderContainer({children, webp, dontShowOnSmallViewPort, ...restProps }){

    const [open, setOpen] = useState(false);

    return(
        <>
            <Header webp={webp} dontShowOnSmallViewPort={dontShowOnSmallViewPort} {...restProps}>
                <Header.Frame>
                    <Header.Logo src={'/images/misc/logo.png'} to={'/'} />
                    <Header.Nav>
                        {ROUTES.mainMenu.map(item =>{
                            return(
                                <Header.ButtonLink to={item.link} key={item.name}>{item.name}</Header.ButtonLink>
                            )
                        })}
                    </Header.Nav>
                    <Header.Hamburger open={open} setOpen={setOpen} />
                </Header.Frame>
                {children}
            </Header>
        </>
    );

}