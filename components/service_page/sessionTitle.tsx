export function SessionTitle({
    title = "We leverage the latest advancements in AI and Machine Learning to drive efficiency in your business"
}: {
    title?: string
}) {
    return (
        <div className="ServicePage_sectionTitleWrapper__UMXDk">
            <div
                style={{
                    position: "relative",
                    width: "fit-content",
                    overflow: "hidden",
                    height: "fit-content"
                }}
            >
                <div style={{height: "100%", opacity: 1, transform: "none"}}>
                    <span className="ServicePage_sectionTitle__oveqC">{title}</span>
                    <span className="ServicePage_sectionTitle__oveqC ServicePage_dot__o_WJO">.</span>
                </div>
                <div
                    style={{
                        position: "absolute",
                        inset: "100% 0px 4px",
                        zIndex: 20,
                        background: "rgb(59, 133, 183)"
                    }}
                ></div>
            </div>
        </div>
    );
}