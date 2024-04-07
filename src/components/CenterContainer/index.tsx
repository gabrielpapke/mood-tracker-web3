const CenterContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-center space-y-2 md:h-[80vh]">
            {children}
        </div>
    </div>
)

export { CenterContainer }
