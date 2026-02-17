import Link from 'next/link'

interface InnerHeaderProps {
    title: string;
    breadcrumb: string;
    parentText?: string;
    parentLink?: string;
}

export default function InnerHeader({ title, breadcrumb, parentText, parentLink }: InnerHeaderProps) {
    return (
        <div className="inner-page-header" style={{
            backgroundImage: 'url(/images/Slide.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            {/* Dark Blue Overlay 70% */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(7, 3, 39, 0.7)', // #070327 at 70%
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="heading1 text-center">
                            <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
                            <div className="space20" />
                            <Link href="/" style={{ color: '#00bcd4' }}>Home <i className="fa-solid fa-angle-right" /></Link>
                            {parentText && parentLink && (
                                <>
                                    {" "}<Link href={parentLink} style={{ color: '#00bcd4' }}>{parentText} <i className="fa-solid fa-angle-right" /></Link>
                                </>
                            )}
                            {" "}<span style={{ fontSize: 'var(--ztc-font-size-font-s28)', fontWeight: 'var(--ztc-weight-medium)', fontFamily: 'var(--grotesk)', display: 'inline-block', color: '#00bcd4' }}>{breadcrumb}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
