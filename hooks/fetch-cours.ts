
import { useCallback, useEffect, useState } from "react";

type CourseLesson = {
  id: number;
  course_title: string;
  instructor_name: string;
  is_enrolled: boolean;
  watch_progress: number; // en pourcentage (0-100)
  is_completed: boolean;
  title: string;
  description: string;
  video_url: string;
  duration_minutes: number;
  order: number;
  is_preview: boolean;
  course: number; // ID du cours parent
};


export default function useFetchCours() {
    const [cours, setCours] = useState<CourseLesson[]>([]);
    const [pending, setPending] = useState<boolean>(true);
    const [fail, setError] = useState<string>("");


    const fetchData = useCallback(async () => {
        setPending(true);
        setError("");

        if (typeof window === "undefined") {
            setPending(false);
            return;
        }

        // const token = localStorage.getItem("auth_token");
        // console.log('xxxxxxxxxx', token)

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/free/`, {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Token ${token}`
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