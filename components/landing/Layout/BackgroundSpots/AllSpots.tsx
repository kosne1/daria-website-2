import {FirstSpot} from "./FirstSpot";
import {useEffect, useState} from "react";
import {useWindowSize} from "../../../../hooks/useWindowSize";

export const AllSpots = () => {
    let size = useWindowSize();

    return <>
        <FirstSpot height={size.height} width={size.width}/>
    </>
}