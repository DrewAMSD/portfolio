export default function Navbar() {
    const anchorClass: string = "text-lg";

    return (
        <div className="flex flex-row items-center justify-between w-full h-[8vh] min-h-20">
            <p className="w-[60vw] text-left text-2xl pl-[2vw] lg:pl-[4vw]">Drew Miller</p>
            <nav className="w-[32vw] flex flex-row items-center justify-evenly w-full">
                {/* <a href="#hero">Hero</a> */}
                <a href="#about" className={anchorClass}>About</a>
                <a href="#projects" className={anchorClass}>Projects</a>
                <a href="#contact" className={anchorClass}>Contact</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={anchorClass}>Resume</a>
            </nav>
            <p className="w-[8vw] text-lg text-left">🌙</p>
        </div>
    );
};