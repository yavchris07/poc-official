
import { useCallback, useEffect, useState } from "react";


export type Wallet = {
    id: number,
    name: string,
    payment_address: string,
    stake_address: string,
    network: string,
    created_at: string
}

export default function useFetchWallets() {
    const [wallets, setWallet] = useState<Wallet[]>([]);
    const [pending, setPending] = useState<boolean>(true);
    const [fail, setError] = useState<string>("");


    const fetchData = useCallback(async () => {
        setPending(true);
        setError("");

        if (typeof window === "undefined") {
            setPending(false);
            return;
        }

        const token = localStorage.getItem("auth_token");
        console.log('xxxxxxxxxx', token)

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wallets/user_wallets/`, {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },

            });

            if (!res.ok) {
                throw new Error(`Erreur ${res.status}`);
            }

            const data = await res.json();
            setWallet(data.wallets);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message || "Erreur inconnue");
            } else {
                setError("Erreur inconnue");
            }
        } finally {
            setPending(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { wallets, pending, fail, refresh: fetchData };
}