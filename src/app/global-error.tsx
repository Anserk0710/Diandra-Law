"use client";

export default function GlobalError({
    reset,
}: {
    error: Error & {
        digest?: string;
    };

    reset: () => void;
}) {
    return (
        <html lang="id">
            <body
                style={{
                    margin: 0,
                    background:
                        "#f1f5f9",
                    color:
                        "#0f172a",
                    fontFamily:
                        "Arial, sans-serif",
                }}
            >
                <main
                    style={{
                        minHeight:
                            "100vh",

                        display:
                            "flex",

                        alignItems:
                            "center",

                        justifyContent:
                            "center",

                        padding:
                            "24px",
                    }}
                >
                    <section
                        style={{
                            width:
                                "100%",

                            maxWidth:
                                "560px",

                            padding:
                                "32px",

                            borderRadius:
                                "12px",

                            background:
                                "#ffffff",

                            boxShadow:
                                "0 18px 50px rgba(15, 23, 42, 0.12)",

                            textAlign:
                                "center",
                        }}
                    >
                        <h1>
                            Sistem sedang
                            bermasalah
                        </h1>

                        <p
                            style={{
                                lineHeight:
                                    1.7,

                                color:
                                    "#475569",
                            }}
                        >
                            Aplikasi tidak dapat
                            dimuat dengan benar.
                            Silakan mencoba kembali.
                        </p>

                        <button
                            type="button"
                            onClick={reset}
                            style={{
                                marginTop:
                                    "16px",

                                border:
                                    0,

                                borderRadius:
                                    "8px",

                                background:
                                    "#17202e",

                                color:
                                    "#ffffff",

                                padding:
                                    "12px 20px",

                                fontWeight:
                                    700,

                                cursor:
                                    "pointer",
                            }}
                        >
                            Coba Lagi
                        </button>
                    </section>
                </main>
            </body>
        </html>
    );
}