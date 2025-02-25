import Cookies from "universal-cookie";

async function getCredentialData(id) {
    let cookies = new Cookies()
    let { token } = cookies.get("session")
    console.log(id);
    

    try {
        const response = await fetch('http://localhost:7101/wallet-api/wallet/7999978a-eff4-4eed-9771-c2b57495c3e9/credentials/' + id, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Pragma': 'no-cache',
                'Referer': 'http://localhost:7101/wallet-api/wallet/7999978a-eff4-4eed-9771-c2b57495c3e9/credentials/',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Authorization': `Bearer ${token}`,
                'Sec-Fetch-Site': 'same-origin',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
                'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': 'macOS'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default getCredentialData;