
import { useCallback, useEffect, useState } from "react";


export default function useFetchCours() {
    const [cours, setCours] = useState<[]>([]);
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/free`, {
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
            setCours(data.wallets);
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

    return { cours, pending, fail, refresh: fetchData };
}