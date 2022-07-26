import { NextPage } from "next";
import { useState } from "react"

const Visualizer: NextPage = () => {
    const [url, setUrl] = useState([]);

    const fetchUrl = async () => {
        const response = await fetch("/api/storage");
        const metadata = await response.json();
        const data = JSON.parse(metadata);
        const cid = await data.images.replace("ipfs://", "")
        setUrl(cid);
    }

    return (
        <>  
            <button onClick={fetchUrl}>metadata</button>
            <div><img src={`https://nftstorage.link/ipfs/${url}/wetransfer_creacio-generalitat-cara-nft_hq-png_2022-06-23_0949/Creacio%CC%81%20Generalitat%20Cara%20(NFT_HQ).png`}/></div>
        </>
    )
}

export default Visualizer;