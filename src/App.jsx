const App = () => {
    return (
        <main>
            {/* HEADER */}
            <section>
                {/* 你的 header 内容 */}
            </section>

            {/* HERO */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-purple-900">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/hero.mp4"
                    style={{ opacity: 0.5 }} // 视频本身变淡
                />

                {/* 紫色半透明遮罩 */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-purple-800/80 via-purple-900/80 to-purple-950/90 pointer-events-none" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center">
                    <h1
                        className="
              text-5xl md:text-7xl font-extrabold
              text-transparent bg-clip-text
              bg-gradient-to-r from-purple-300 via-purple-100 to-purple-400
              drop-shadow-[0_2px_16px_rgba(80,0,150,0.7)]
              mb-4
            "
                    >
                        Unfold trauma through literature
                    </h1>
                    {/* subtitle */}
                    {/* <p className="text-lg md:text-2xl text-purple-200 font-medium drop-shadow">副标题</p> */}
                </div>

                {/* move downward */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                    <span className="animate-bounce text-purple-200 text-3xl">&#8595;</span>
                </div>
            </section>

            {/* Chapter 1 History */}
            <section>
                {/* Chapter 1 内容 */}
            </section>
        </main>
    )
}
export default App
