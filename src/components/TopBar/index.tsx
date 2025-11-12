'use client'

import Logo from "../Home/Hero/Logo"
import { useEdit } from "@/app/api/contex/EditContext"

const TopBar = () => {
    const { isEditing, setIsEditing } = useEdit();

    return (
        <section className="bg-section py-6">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex justify-between">
                    <div>
                        <Logo />
                    </div>
                    <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                        {isEditing ? 'Save Changes' : 'Edit'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TopBar