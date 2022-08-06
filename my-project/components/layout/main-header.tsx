import Link from 'next/link'




function MainHeader() {
    return (
        <header className="main-header">
            <div>
                <Link href="/">Back to Homepage</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/events">All Events</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )}

export default MainHeader;