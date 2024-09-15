import Navbar from '@/components/main/Navbar';
import { ModeToggle } from '@/components/sub/ModeToggle';
import React from 'react'

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            {/* dark theme mode button :  <ModeToggle /> */}
            <Navbar />
            {children}

        </main>
    )
}

export default RootLayout