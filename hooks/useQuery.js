import { useRouter } from 'next/router'

export const useQuery = () => {
    const router = useRouter();
    return router.query;
}