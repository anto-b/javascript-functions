function extractDomain(url) {
    /* 
    The first regex tries to remove anything between http and www., but if there isn't www tries 
    to remove anything between htttp and //
    The second regex tries to remove anything after .com
    */
    return url.replace(/^.*w\.|^.*\/\//i, "").replace(/\..*$/i, "");
}

const url = "https://www.cnet.com";
console.log(extractDomain(url));