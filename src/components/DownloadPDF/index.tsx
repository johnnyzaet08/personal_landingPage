'use client'
import { useEffect, useState } from "react";

export default function DownloadPDF() {
    const [isVisible, setIsVisible] = useState(false);

    const handleDownloadPDF = () => {
        setIsVisible(false);

        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                body * {
                    visibility: hidden;
                }
                main, main * {
                    visibility: visible;
                }
                main {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                }
                .fixed {
                    display: none !important;
                }
                /* Preserve background colors */
                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    color-adjust: exact !important;
                }
                .info,
                .logo,
                .edit{
                    display: none;
                }
                .link{
                    display: block;
                }
            }
        `;
        document.head.appendChild(style);

        window.print();

        document.head.removeChild(style);
        setIsVisible(true);
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-999">
            <div className="flex items-center gap-2.5">
                <button
                    onClick={handleDownloadPDF}
                    className="bg-primary text-sm hover:bg-blue-700 text-white px-4 py-3.5 leading-none rounded-lg font-medium text-nowrap"
                >
                    Download this as PDF
                </button>
            </div>
        </div>
    );
}