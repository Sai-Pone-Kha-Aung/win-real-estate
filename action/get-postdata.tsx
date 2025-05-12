import apiRequest from "@/lib/apiRequest";
import { PostData } from "@/types";

const getPostData = async (id: string): Promise<PostData> => {
    const res = await fetch (`${apiRequest}/posts/ ${id}`);
    if(!res.ok) throw new Error("failed to fetch data");
    return res.json();
}

export default getPostData;