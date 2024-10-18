'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



type TQueryProvider = {
    children: React.ReactNode
}

export const QueryProvider = ({children}: TQueryProvider) =>{
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}