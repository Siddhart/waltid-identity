import Cookies from "universal-cookie";

async function getCredentials(wallet_id = "7999978a-eff4-4eed-9771-c2b57495c3e9") {
    const cookies = new Cookies();
    const { token } = cookies.get("session");

    try {
        const response = await fetch(`http://localhost:7101/wallet-api/wallet/${wallet_id}/credentials?showDeleted=false&showPending=false`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function getCredentialData(credential_id, wallet_id = "7999978a-eff4-4eed-9771-c2b57495c3e9") {
    const cookies = new Cookies();
    const { token } = cookies.get("session");

    try {
        const response = await fetch(`http://localhost:7101/wallet-api/wallet/${wallet_id}/credentials/${credential_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        const data = await response.json();
        console.log(data);
        
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export { getCredentials, getCredentialData };