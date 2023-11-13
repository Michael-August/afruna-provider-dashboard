export default function Loading() {
    return (
        <div className="flex items-center justify-center h-[90vh] bg-black/10 z-50 backdrop-blur-sm">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}