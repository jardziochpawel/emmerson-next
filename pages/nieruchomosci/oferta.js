import slugify from "react-slugify";
import {switchPropertyType} from "../../helpers/switchPropertyType";
import {getPropertyAndTransaction} from "../../helpers/getPropertyAndTransaction";
import variationByCases from "../../helpers/variationByCases";
import {BACKEND_HOST, BACKEND_URL} from "../../constants/data";


export default function OldOffer(){

    return(<div>Loading...</div>)
}

OldOffer.getInitialProps = async (ctx) => {

    const id = ctx.query.number;

    const res = await fetch(`${BACKEND_URL}/offer/${id}`, {
        method: 'GET',
        headers: {
            "Host": BACKEND_HOST,
            "Content-Type": 'application/json',
            "Accept-Encoding": 'gzip, deflate, br',
            "Accept": '*/*',
            "Connection": 'keep-alive',
            "Cache-Control": 'no-cache',
        }
    });

    const json = await res.json();

    if(json?.type === 404){
        ctx.res.writeHead(302,{ Location: '/404' });
        ctx.res.end();

        return {data: []}
    }

    const title = json.title ?  json.title.replace(/\s/g, '') : '';

    if(json && title.length === 0){
        const obj = getPropertyAndTransaction(json.id)
        json.title = `${ obj.property } ${ Math.floor(json.area) }m2, ${json.rooms ? json.rooms : ''} ${json.rooms ? variationByCases(json.rooms, 'pokój', 'pokoje', 'pokoi'): '' } na ${data.offerType}`
    }

    if(json){
        ctx.res.writeHead(301,{ Location: `/${slugify(switchPropertyType(json.objectName))}/${slugify(json.offerType)}/${slugify(json.title)}/${id}` });
        ctx.res.end();
    }

    return {data: json}

}