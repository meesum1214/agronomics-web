export default ({ onClick, children }) => {
    return (
        <div onClick={onClick} className="bg-secondary font-semibold text-white text-sm flex justify-center items-center px-4 py-2 rounded-full cursor-pointer">{children}</div>
    )
}